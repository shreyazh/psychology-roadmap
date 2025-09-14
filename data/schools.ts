import type { School } from "./types"

export const schools: School[] = [
  {
    id: "school-psychoanalysis",
    slug: "psychoanalysis",
    name: "Psychoanalysis",
    brief: "An approach initiated by Freud focusing on the unconscious mind, dreams, and early experiences.",
    period: "Late 19th–20th century",
    corePrinciples: ["Unconscious processes", "Defense mechanisms", "Psychosexual stages"],
    majorAuthors: ["freud", "jung"],
    tags: ["clinical", "dynamic"],
    resources: {
      articles: [
        { title: "Intro to Psychoanalysis", url: "#" },
        { title: "Defense Mechanisms Overview", url: "#" },
      ],
      videos: [{ title: "Freud Explained", url: "#" }],
    },
    similarities: ["cognitive-behavioral-therapy"], // conceptual overlap in therapy goal
    differences: ["behaviorism"],
  },
  {
    id: "school-behaviorism",
    slug: "behaviorism",
    name: "Behaviorism",
    brief: "Emphasizes observable behavior and learning through conditioning rather than internal mental states.",
    period: "Early–Mid 20th century",
    corePrinciples: ["Classical conditioning", "Operant conditioning", "Observable measures"],
    majorAuthors: ["pavlov"],
    tags: ["experimental", "learning"],
    resources: {
      articles: [{ title: "What Is Behaviorism?", url: "#" }],
      videos: [{ title: "Classical vs Operant Conditioning", url: "#" }],
    },
    similarities: ["cognitive-behavioral-therapy"],
    differences: ["psychoanalysis"],
  },
  {
    id: "school-cbt",
    slug: "cognitive-behavioral-therapy",
    name: "Cognitive Behavioral Therapy (CBT)",
    brief: "Integrates cognitive and behavioral principles to modify dysfunctional thoughts and behaviors.",
    period: "Late 20th century–present",
    corePrinciples: ["Cognitive restructuring", "Behavioral activation", "Skills training"],
    majorAuthors: [],
    tags: ["therapy", "evidence-based"],
    resources: { articles: [{ title: "CBT Basics", url: "#" }], videos: [] },
    similarities: ["behaviorism", "psychoanalysis"],
    differences: [],
  },
]
