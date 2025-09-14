import type { Challenge } from "./types"

export const challenges: Challenge[] = [
  {
    id: "challenge-nature-nurture",
    slug: "nature-vs-nurture",
    name: "Nature vs. Nurture",
    brief: "Debate on relative contributions of genetic inheritance and environmental factors to behavior and traits.",
    theme: "Foundations",
    keyQuestions: ["How do genes and environment interact?", "Epigenetics and plasticity"],
    tags: ["development", "behavioral-genetics"],
    resources: {
      articles: [{ title: "Nature vs. Nurture Overview", url: "#" }],
      videos: [{ title: "Genes, Environment, and You", url: "#" }],
    },
    similarities: [],
    differences: [],
  },
  {
    id: "challenge-replication",
    slug: "replication-crisis",
    name: "Replication Crisis",
    brief:
      "Concerns about the reproducibility of findings, leading to reforms in methodology, transparency, and statistics.",
    theme: "Methods",
    keyQuestions: ["p-hacking & QRPs", "Preregistration", "Open data"],
    tags: ["methods", "meta-science"],
    resources: { articles: [{ title: "Understanding the Replication Crisis", url: "#" }], videos: [] },
    similarities: [],
    differences: [],
  },
]
