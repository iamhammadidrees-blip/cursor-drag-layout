import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <CardTitle>cursor-drag-layout</CardTitle>
            <Badge variant="secondary">Scaffold</Badge>
          </div>
          <CardDescription>
            Next.js, Tailwind CSS, and shadcn/ui are wired up. Ready for the drag
            layout feature next.
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="text-muted-foreground">
          Run <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">npm run dev</code>{" "}
          and open <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">localhost:3000</code>.
        </CardContent>
        <CardFooter>
          <Button type="button">Environment ready</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
