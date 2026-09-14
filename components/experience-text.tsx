"use client";

import { getExperienceLabel } from "@/content/career";
import { useEffect, useState } from "react";

type ExperienceTextProps = {
  template: string;
  initialLabel: string;
};

const experienceToken = "{experience}";

export function ExperienceText({
  template,
  initialLabel,
}: ExperienceTextProps) {
  const [experienceLabel, setExperienceLabel] = useState(initialLabel);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setExperienceLabel(getExperienceLabel());
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      {template.split(experienceToken).map((segment, index, segments) => (
        <span key={`${segment}-${index}`}>
          {segment}
          {index < segments.length - 1 && (
            <span data-experience-duration>{experienceLabel}</span>
          )}
        </span>
      ))}
    </>
  );
}
