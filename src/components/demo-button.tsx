"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { Button } from "@/components/ui/button";

export function DemoButton() {
  return (
    <Button
      type="button"
      size="sm"
      variant="outline"
      className="h-9 gap-2 border-primary-border bg-primary-soft pr-3 pl-1.5 text-accent-foreground hover:bg-primary-soft/80"
      aria-label="Demo"
    >
      <DotLottieReact
        src="/demo-animation.lottie"
        loop
        autoplay
        className="size-7 shrink-0"
        style={{ width: 28, height: 28 }}
      />
      Demo
    </Button>
  );
}
