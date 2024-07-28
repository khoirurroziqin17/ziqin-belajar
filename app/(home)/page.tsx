import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">ZBelajar</h1>
      <p className="text-muted-foreground">
        You can open{" "}
        <Link href="/buku" className="text-foreground font-semibold underline">
          /buku
        </Link>{" "}
        and see the curriculum.
      </p>
    </main>
  );
}
