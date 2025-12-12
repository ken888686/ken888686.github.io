"use client";

import { loadStarsPreset } from "@tsparticles/preset-stars";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      preset: "stars",
      background: {
        color: {
          value: "transparent",
        },
      },
      particles: {
        color: {
          value: resolvedTheme === "dark" ? "#ffffff" : "#000000",
        },
      },
    }),
    [resolvedTheme],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="fixed inset-0 -z-10 transition-all"
      />
    );
  }

  return <></>;
}
