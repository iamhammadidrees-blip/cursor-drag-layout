"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { Button } from "@/components/ui/button";

export function DemoButton() {
  return (
    <Button
      type="button"
      size="lg"
      variant="outline"
      className="relative h-20 min-w-52 overflow-hidden border-primary-border bg-primary-soft px-12 text-xl font-semibold text-accent-foreground shadow-sm hover:bg-primary-soft/90 [&_canvas]:absolute [&_canvas]:inset-0 [&_canvas]:size-full"
      aria-label="Demo"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
      >
        <DotLottieReact
          src="/kpk98v7shw.lottie"
          loop
          autoplay
          layout={{ fit: "fill", align: [0.5, 0.5] }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </span>
      <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
        Demo
      </span>
    </Button>
  );
}
