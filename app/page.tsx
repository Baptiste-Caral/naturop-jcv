import Nav from "@/components/Nav"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="p-4">
     <Nav />
     <section className="flex flex-col items-center">
      <h1>Bienvenue</h1>
      <p>ici c&apos;est la santé</p>
     </section>
     <div className="flex justify-center gap-6 py-6">
      <Button>Dark</Button>
      <Button>White</Button>
     </div>
    </main>
  )
}
