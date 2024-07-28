"use client";

import { usePathname } from "next/navigation";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import Image from "next/image";

export default function Modes() {
  const pathname = usePathname().split("/");

  const modes = RootToggleOptions.filter(
    (opt) => opt.kelas === pathname[3] && opt.mapel === pathname[4]
  );

  return (
    <RootToggle
      options={modes.map((mode) => ({
        title: mode.name,
        description: mode.description,
        url: `/buku/${mode.kurikulum}/${mode.kelas}/${mode.mapel}`,
        icon: (
          <Image
            src={`/images/${mode.kurikulum}.png`}
            alt="Logo Kurikulum Merdeka"
            height={64}
            width={64}
            className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1 bg-indigo-200 dark:bg-indigo-900/80"
          />
        ),
      }))}
    />
  );
}

interface RootToggleOption {
  name: string;
  description: string;
  kelas: string;
  mapel: string;
  kurikulum: string;
}

const RootToggleOptions: RootToggleOption[] = [
  {
    name: "7 IPA",
    description: "Kurikulum merdeka kelas 7 IPA",
    kelas: "7",
    mapel: "ipa",
    kurikulum: "kumer",
  },
  {
    name: "8 IPA",
    description: "Kurikulum merdeka kelas 8 IPA",
    kelas: "8",
    mapel: "ipa",
    kurikulum: "kumer",
  },
  {
    name: "8 IPA",
    description: "Kurikulum 2013 kelas 8 IPA",
    kelas: "8",
    mapel: "ipa",
    kurikulum: "k13",
  },
  {
    name: "9 IPA",
    description: "Kurikulum merdeka kelas 9 IPA",
    kelas: "9",
    mapel: "ipa",
    kurikulum: "kumer",
  },
  {
    name: "9 IPA",
    description: "Kurikulum 2013 kelas 9 IPA",
    kelas: "9",
    mapel: "ipa",
    kurikulum: "k13",
  },
];
