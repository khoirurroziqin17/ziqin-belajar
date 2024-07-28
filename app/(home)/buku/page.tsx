import Link, { type LinkProps } from "next/link";
import Image from "next/image";

export default function BukuPage(): React.ReactElement {
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
        Pilihan Kurikulim Belajar
      </h1>
      <p className="text-muted-foreground">
        Tersedia 2 kurikulum, yaitu kurikulum merdeka dan kurikulum 2013.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-4 text-left md:grid-cols-2">
        <Item href="/buku/kumer">
          <Icon>
            <Image
              src={"/images/kumer.png"}
              width={256}
              height={256}
              alt="logo kurikulum merdeka"
            />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold text-center">
            Kurikulum Merdeka
          </h2>
        </Item>
        <Item href="/buku/k13">
          <Icon>
            <Image
              src={"/images/k13.png"}
              width={256}
              height={256}
              alt="logo kurikulum 2013"
            />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold text-center">
            Kurikulum 2013
          </h2>
        </Item>
      </div>
    </main>
  );
}

function Icon({ children }: { children: React.ReactNode }): React.ReactElement {
  return <div className="mx-auto mb-2 size-16 ">{children}</div>;
}

function Item(
  props: LinkProps & { children: React.ReactNode }
): React.ReactElement {
  return (
    <Link
      {...props}
      className="rounded-2xl border border-transparent p-6 shadow-lg transition-all hover:shadow-primary/20"
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
