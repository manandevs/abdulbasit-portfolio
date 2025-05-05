"use client";
import React, { useState, useEffect, useRef } from "react";
import { ParticlesConfig } from "./types";
import ParticleCanvas from "./ParticleCanvas";

/**
 * ParticleBackground component that displays a background image with animated particles
 */
function ParticleBackground() {
  const [particlesConfig, setParticlesConfig] = useState<ParticlesConfig>(() => ({
    autoPlay: true,
    background: {
      color: "#000000",
      image:
        "https://images.pexels.com/photos/26587611/pexels-photo-26587611.jpeg",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
      opacity: 1,
    },
    backgroundMask: {
      composite: "destination-out",
      cover: {
        color: {
          value: "#ffffff",
        },
        opacity: 1,
      },
      enable: true,
    },
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: {
          min: 1,
          max: 5,
        },
      },
    },
  }));

  return (
    <section className="overflow-hidden relative w-full h-screen bg-black">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 bg-center bg-no-repeat bg-cover opacity-60 w-full h-full"
        style={{
          backgroundImage: `url(${particlesConfig.background.image})`,
          backgroundPosition: particlesConfig.background.position,
          backgroundSize: particlesConfig.background.size,
          backgroundRepeat: particlesConfig.background.repeat,
        }}
        aria-hidden="true"
      />

      {/* Particle Canvas */}
      <ParticleCanvas config={particlesConfig} />
    </section>
  );
}

export default ParticleBackground;