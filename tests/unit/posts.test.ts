import { describe, expect, it } from "vitest";

import { parsePostSource } from "@/lib/posts";

describe("post parsing", () => {
  it("uses front matter for article metadata and removes the repeated heading", () => {
    const post = parsePostSource(
      "2026-04-01-static-sites.md",
      `---
title: Static sites
date: 2026-04-01
category: Engineering
description: A concise explanation of static site generation.
---

# Static sites

The article body.`,
    );

    expect(post).toEqual({
      slug: "2026-04-01-static-sites",
      title: "Static sites",
      date: "2026-04-01",
      category: "Engineering",
      excerpt: "A concise explanation of static site generation.",
      content: "The article body.",
    });
  });

  it("derives metadata from the filename and Markdown when front matter is absent", () => {
    const post = parsePostSource(
      "2026-03-02-fallback.md",
      "# Fallback title\n\nA short paragraph for the excerpt.",
    );

    expect(post).toMatchObject({
      slug: "2026-03-02-fallback",
      title: "Fallback title",
      date: "2026-03-02",
      category: "Notes",
      excerpt: "A short paragraph for the excerpt.",
      content: "A short paragraph for the excerpt.",
    });
  });
});
