import { describe, expect, it } from "vitest";

import { getExperienceLabel, getYearsOfExperience } from "@/content/career";

describe("career duration", () => {
  it("does not count a year before the work anniversary", () => {
    expect(getYearsOfExperience(new Date("2026-08-14T00:00:00Z"))).toBe(9);
  });

  it("counts a completed year on the work anniversary", () => {
    expect(getYearsOfExperience(new Date("2026-08-15T00:00:00Z"))).toBe(10);
    expect(getExperienceLabel(new Date("2026-08-15T00:00:00Z"))).toBe(
      "10+ years",
    );
  });

  it("does not produce a negative duration before the career start date", () => {
    expect(getYearsOfExperience(new Date("2016-08-14T00:00:00Z"))).toBe(0);
  });
});
