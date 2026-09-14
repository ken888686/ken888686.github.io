const careerStartDate = new Date("2016-08-15T00:00:00Z");

export function getYearsOfExperience(asOf = new Date()) {
  const startYear = careerStartDate.getUTCFullYear();
  const startMonth = careerStartDate.getUTCMonth();
  const currentYear = asOf.getUTCFullYear();
  const currentMonth = asOf.getUTCMonth();

  const completedYears = currentYear - startYear;
  const beforeAnniversary =
    currentMonth < startMonth ||
    (currentMonth === startMonth &&
      asOf.getUTCDate() < careerStartDate.getUTCDate());

  return Math.max(0, completedYears - (beforeAnniversary ? 1 : 0));
}

export function getExperienceLabel(asOf = new Date()) {
  return `${getYearsOfExperience(asOf)}+ years`;
}
