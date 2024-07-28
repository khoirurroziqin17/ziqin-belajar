import { type DocsLayoutProps } from "fumadocs-ui/layout";
import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import { pageTree } from "@/app/source";
import Modes from "./buku/modes";

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: "ZBelajar",
    transparentMode: "top",
  },
  links: [
    {
      text: "Buku",
      url: "/buku",
      active: "nested-url",
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
  nav: {
    ...baseOptions.nav,
    transparentMode: "none",
    // children: undefined,
  },
  sidebar: {
    defaultOpenLevel: 0,
    banner: <Modes />,
  },
};
