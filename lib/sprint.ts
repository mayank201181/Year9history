// ---------------------------------------------------------------------------
// 60-second Fluency Sprint for Tanglin Trust School Year 9 History.
// ---------------------------------------------------------------------------
import type { Drill, Rng } from "./drills/types.ts";
import type { AnswerSpec, Strand, Trap } from "./types.ts";
import { displayAnswer } from "./answerCheck.ts";
import { TOPIC_META } from "./topics/meta.ts";

export type SprintMode = "wars" | "protest" | "singapore" | "mixed";
export type SprintStrandMode = Exclude<SprintMode, "mixed">;

export const SPRINT_MODES: readonly SprintMode[] = ["wars", "protest", "singapore", "mixed"];

export const SPRINT_MODE_STRAND: Record<SprintStrandMode, Strand> = {
  wars: "Why Did Wars Start?",
  protest: "Protest & Conflict",
  singapore: "Singapore & Change",
};

export const SPRINT_SECONDS = 60;
export const SPRINT_MAX_LEVEL = 2;
export const SPRINT_TIER = 1;

export interface SprintModeInfo {
  label: string;
  icon: string;
  description: string;
  example: string;
}

export const SPRINT_MODE_INFO: Record<SprintMode, SprintModeInfo> = {
  wars: {
    label: "Causes of 20th-C Wars",
    icon: "⚔️",
    description: "WWI MAIN causes, alliances, Sarajevo 1914, Cold War Domino Theory, Dien Bien Phu & Gulf of Tonkin.",
    example: "Year Archduke Franz Ferdinand was assassinated? · Parallel dividing Vietnam?",
  },
  protest: {
    label: "Protest & The Holocaust",
    icon: "✊",
    description: "Nuremberg Laws, Salt March 1930, Civil Rights Act 1964, Sharpeville 1960, Mandela & NOP skills.",
    example: "Gandhi's non-violent truth-force? · What does the 'P' in NOP stand for?",
  },
  singapore: {
    label: "Singapore & Change",
    icon: "🦁",
    description: "1942 Fall, 1959 Self-Government, 1963 Merger, 1965 Independence, HDB, Jurong & EDB.",
    example: "Year Singapore became independent? · Agency built to solve housing shortages?",
  },
  mixed: {
    label: "Full Year 9 History Sprint",
    icon: "🏛️",
    description: "WWI, Vietnam, Holocaust, Protest Movements, Singapore & Source Skills interleaved.",
    example: "Dates, flashpoints, key figures, protest acts & NOP in 60 seconds",
  },
};

export interface SprintItem {
  key: string;
  prompt: string;
  answer: AnswerSpec;
  answerText: string;
  traps?: Trap[];
  diagram?: string;
  drillId: string;
  topicId: string;
}

export function isSprintMode(v: unknown): v is SprintMode {
  return typeof v === "string" && (SPRINT_MODES as readonly string[]).includes(v);
}

export function sprintBestKey(mode: SprintMode): string {
  return `sprint:${mode}`;
}

export function sprintAwardKey(mode: SprintMode, day: string): string {
  return `sprint:${day}:${mode}`;
}

export function sprintStars(score: number): number {
  return Math.max(0, Math.min(5, Math.floor(score / 5)));
}

const STRAND_OF_TOPIC = new Map<string, Strand>(TOPIC_META.map((t) => [t.id, t.strand]));

export function strandOfTopic(topicId: string): Strand | undefined {
  return STRAND_OF_TOPIC.get(topicId);
}

export function sprintPool(mode: SprintMode, drills: readonly Drill[]): Drill[] {
  return drills.filter((d) => {
    if (d.level > SPRINT_MAX_LEVEL) return false;
    const strand = strandOfTopic(d.topicId);
    if (!strand) return false;
    return mode === "mixed" || strand === SPRINT_MODE_STRAND[mode];
  });
}

export function sprintPoolSizes(drills: readonly Drill[]): Record<SprintMode, number> {
  const out = {} as Record<SprintMode, number>;
  for (const m of SPRINT_MODES) out[m] = sprintPool(m, drills).length;
  return out;
}

function itemFrom(drill: Drill, rng: Rng): SprintItem | null {
  try {
    const it = drill.generate(rng, SPRINT_TIER);
    const prompt = typeof it?.prompt === "string" ? it.prompt.trim() : "";
    if (!prompt || !it.answer) return null;
    const answerText = displayAnswer(it.answer);
    if (!answerText) return null;
    return {
      key: `${drill.id}::${prompt}::${answerText}`,
      prompt,
      answer: it.answer,
      answerText,
      traps: it.traps?.length ? it.traps : undefined,
      diagram: it.diagram || undefined,
      drillId: drill.id,
      topicId: drill.topicId,
    };
  } catch {
    return null;
  }
}

export function sprintItem(pool: readonly Drill[], rng: Rng): SprintItem | null {
  if (!pool.length) return null;
  const byTopic = new Map<string, Drill[]>();
  for (const d of pool) {
    const list = byTopic.get(d.topicId);
    if (list) list.push(d);
    else byTopic.set(d.topicId, [d]);
  }
  const topics = [...byTopic.values()];
  let withDiagram: SprintItem | null = null;
  for (let i = 0; i < 12; i++) {
    const drill = rng.pick(rng.pick(topics));
    const item = itemFrom(drill, rng);
    if (!item) continue;
    if (!item.diagram) return item;
    withDiagram ??= item;
  }
  if (withDiagram) return withDiagram;
  for (const d of pool) {
    const item = itemFrom(d, rng);
    if (item) return item;
  }
  return null;
}
