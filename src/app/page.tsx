import { DemoButton } from "@/components/demo-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 bg-transparent text-foreground">
      {/* Zone: sidebar width / nested layout */}
      <aside
        data-measure="sidebar"
        className="flex w-56 shrink-0 flex-col gap-3 border-r border-white/15 bg-brand-gradient-y p-4 text-white"
      >
        <p className="text-sm font-medium tracking-tight">Playground</p>
        <nav className="flex flex-col gap-1 text-sm text-white/80">
          <span className="rounded-md bg-white/20 px-2 py-1.5 font-medium text-white">
            Layout lab
          </span>
          <span className="rounded-md px-2 py-1.5 hover:bg-white/10 hover:text-white">
            Resize card
          </span>
          <span className="rounded-md px-2 py-1.5 hover:bg-white/10 hover:text-white">
            Alignment
          </span>
          <span className="rounded-md px-2 py-1.5 hover:bg-white/10 hover:text-white">
            Spacing
          </span>
        </nav>
        <p className="mt-auto text-xs text-white/70">
          Drag in Design Mode, then invoke the skill.
        </p>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Zone: header bar padding / height */}
        <header
          data-measure="header"
          className="flex items-center justify-between border-b border-border px-6 py-3"
        >
          <div>
            <h1 className="text-lg font-semibold tracking-tight">
              Visual UI Layout Playground
            </h1>
            <p className="text-sm text-muted-foreground">
              Basic targets for move, resize, and spacing tests
            </p>
          </div>
          <DemoButton />
        </header>

        <main className="flex flex-1 flex-col gap-8 p-6">
          {/* Zone: resize card */}
          <section className="space-y-2">
            <h2 className="text-sm font-medium text-muted-foreground">
              1. Resize card
            </h2>
            <Card
              data-measure="hero-card"
              className="w-full max-w-sm border-primary-border/60"
            >
              <CardHeader>
                <CardTitle>Resize me</CardTitle>
                <CardDescription>
                  Widen or narrow this card in Design Mode. The skill should map
                  to a Tailwind width utility.
                </CardDescription>
                <CardAction>
                  <Badge
                    variant="outline"
                    className="border-primary-border text-primary"
                  >
                    w / max-w
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Target classes like{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                  max-w-md
                </code>{" "}
                or{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                  w-96
                </code>
                — not arbitrary pixels.
              </CardContent>
              <CardFooter>
                <Button type="button" size="sm" variant="brand">
                  Primary action
                </Button>
              </CardFooter>
            </Card>
          </section>

          {/* Zone: alignment strip */}
          <section className="space-y-2">
            <h2 className="text-sm font-medium text-muted-foreground">
              2. Alignment strip
            </h2>
            <div
              data-measure="align-row"
              className="flex justify-start gap-2 rounded-lg border border-dashed border-primary-border p-3"
            >
              <div
                data-measure="align-item-1"
                className="flex h-16 w-16 items-center justify-center rounded-md bg-secondary text-xs font-medium text-secondary-foreground"
              >
                A
              </div>
              <div
                data-measure="align-item-2"
                className="flex h-16 w-16 items-center justify-center rounded-md bg-primary text-xs font-medium text-primary-foreground"
              >
                B
              </div>
              <div
                data-measure="align-item-3"
                className="ml-2 flex h-16 w-16 items-center justify-center rounded-md bg-secondary text-xs font-medium text-secondary-foreground"
              >
                C
              </div>
            </div>
          </section>

          {/* Zone: spacing stack */}
          <section className="space-y-2">
            <h2 className="text-sm font-medium text-muted-foreground">
              3. Spacing stack
            </h2>
            <div
              data-measure="spacing-stack"
              className="flex max-w-md flex-col gap-2 rounded-lg border border-dashed border-border p-4"
            >
              <div
                data-measure="spacing-block-1"
                className="rounded-md bg-muted px-3 py-2 text-sm"
              >
                Block one
              </div>
              <div
                data-measure="spacing-block-2"
                className="mt-4 rounded-md bg-muted px-3 py-2 text-sm"
              >
                Block two (extra mt-4)
              </div>
              <div
                data-measure="spacing-block-3"
                className="rounded-md bg-primary-soft px-3 py-2 text-sm text-accent-foreground"
              >
                Block three
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
