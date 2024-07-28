import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const kelas = [
  {
    kelas: "7",
  },
  {
    kelas: "8",
  },
  {
    kelas: "9",
  },
];

export default function KumerPage(): React.ReactElement {
  return (
    <main className="container flex flex-col items-center py-16 text-center">
      <div className="absolute inset-0 z-[-1] overflow-hidden duration-1000 animate-in fade-in [perspective:2000px]">
        <div
          className="absolute bottom-[20%] left-1/2 size-[1200px] origin-bottom bg-primary/30 opacity-30"
          style={{
            transform: "rotateX(75deg) translate(-50%, 400px)",
            backgroundImage:
              "radial-gradient(50% 50% at center,transparent,hsl(var(--background))), repeating-linear-gradient(to right,hsl(var(--primary)),hsl(var(--primary)) 1px,transparent 2px,transparent 100px), repeating-linear-gradient(to bottom,hsl(var(--primary)),hsl(var(--primary)) 2px,transparent 3px,transparent 100px)",
          }}
        />
      </div>
      <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
        Kurikulim Merdeka
      </h1>
      <p className="max-w-3xl text-muted-foreground">
        Kurikulum Merdeka adalah kurikulum dengan pembelajaran intrakurikuler
        yang beragam di mana konten akan lebih optimal agar peserta didik
        memiliki cukup waktu untuk mendalami konsep dan menguatkan kompetensi.
      </p>
      <div className="mt-4">
        <Link
          href="/buku"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          Ganti kurikulum
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-4 text-left md:grid-cols-3">
        {kelas.map((k) => (
          <Item key={k.kelas} href={`/buku/kumer/${k.kelas}/ipa`}>
            <h2 className="mb-2 text-lg font-semibold text-center">
              Kelas <span className="block text-6xl font-bold">{k.kelas}</span>
            </h2>
          </Item>
        ))}
      </div>
    </main>
  );
}

function Item(
  props: LinkProps & { children: React.ReactNode }
): React.ReactElement {
  return (
    <Link
      {...props}
      className="min-w-48 rounded-2xl border border-transparent p-6 shadow-lg transition-all hover:shadow-primary/20"
      style={{
        backgroundImage:
          "linear-gradient(to right bottom, hsl(var(--background)) 10%, hsl(var(--accent)), hsl(var(--background)) 60%)," +
          "linear-gradient(to right bottom, rgb(40,40,40) 10%, rgb(180,180,180), rgb(30,30,30) 60%)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
    >
      {props.children}
    </Link>
  );
}
