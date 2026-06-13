import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function getAbout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* <p>Read more to learn about the Professional Vibemaster</p> */}
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-5xl font-bold [text-shadow:0_0_8px_rgba(255,215,0,0.5)]">
              Meet THE Professional Vibemaster You've Always Wanted
            </h1>
            <p className="text-muted-foreground mb-8 text-xl">
              As a computer-science graduate who earned a RCM Grade 10
              Certification in Piano Performance, Steven excels at performing
              and digitalizing immersive entertainment experiences. You can find
              Steven singing jazz standards in live venues while accompanying
              himself on the piano, and explore a catalogue of educational music
              videos published using a DIY production pipeline.
            </p>
            <p className="text-muted-foreground mb-8 text-xl">
              Striving to reinvent the independent artist in the streaming era,
              Steven leverages his unique background to craft a rich fusion
              sound informed by popular culture and music legends of the past.
              Furthermore, Steven's technical competence and versatility allows
              him to navigate through the expections of fellow musicians and the
              expectations of studio engineers with ease, leading to consistent
              delivery of engaging content.
            </p>
            <p className="text-muted-foreground mb-8 text-xl">
              During the day, he teaches piano to students of all ages at all
              levels at Capital City Keyboards. During the night, he jams at
              Ottawa's one-and-only jazz club &mdash; Jazz@248 — as a jazz
              keyboardist. He is open to collaborating with musicians,
              directors, and engineers based in Ottawa to co-create the next big
              hit in the local music scene.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/music">
                <Button
                  size="lg"
                  className="h-12 px-8 text-lg font-bold bg-destructive hover:text-black cursor-pointer"
                >
                  Music <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                professionalvibemaster@stevensun.com
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* <p>Read more to learn about the Professional Vibemaster</p> */}
    </div>
  );
}
