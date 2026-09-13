export const blogConfig = {
  title: "Technical & Life Notes",
  description:
    "Notes on software engineering, learning, music, and everyday life in Japan.",
  categories: {
    "2024-04-02-001": "Life in Japan",
    "2025-02-15-001": "Music",
    "2025-05-02-life-in-japan": "Reflection",
    "2025-12-01-001": "Engineering",
  } satisfies Record<string, string>,
} as const;
