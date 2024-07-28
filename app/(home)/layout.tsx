import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/home-layout";
import { baseOptions } from "@/app/layout.config";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <HomeLayout {...baseOptions}>
      {children}
      <Footer />
    </HomeLayout>
  );
}

function Footer(): React.ReactElement {
  return (
    <footer className="mt-auto border-t bg-card py-12 text-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold">ZBelajar</p>
          <p className="text-xs">
            Ditulis dengan ❤️ oleh{" "}
            <a
              href="https://zyqn.my.id"
              rel="noreferrer noopener"
              target="_blank"
              className="font-medium"
            >
              Ziqin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
