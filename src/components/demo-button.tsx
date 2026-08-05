"use client";

import { useRef } from "react";
import { DotLottieReact, type DotLottie } from "@lottiefiles/dotlottie-react";

import { Button } from "@/components/ui/button";

export function DemoButton() {
  const dotLottieRef = useRef<DotLottie | null>(null);

  return (
    <Button
      type="button"
      size="lg"
      variant="outline"
      className="relative size-16 shrink-0 overflow-hidden border-primary-border bg-primary-soft p-0 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-primary-soft/90 [&_canvas]:absolute [&_canvas]:inset-0 [&_canvas]:size-full"
      aria-label="Demo"
      onMouseEnter={() => {
        void dotLottieRef.current?.play();
      }}
      onMouseLeave={() => {
        const player = dotLottieRef.current;
        if (!player) return;
        player.pause();
        player.setFrame(0);
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
      >
        <DotLottieReact
          src="/kpk98v7shw.lottie"
          loop
          autoplay={false}
          layout={{ fit: "contain", align: [0.5, 0.5] }}
          dotLottieRefCallback={(dotLottie) => {
            dotLottieRef.current = dotLottie;
          }}
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
