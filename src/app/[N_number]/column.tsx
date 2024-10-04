/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Grammar = {
  id: string;
  romajiRead: string;
  japaneseRead: string;
  meaning: string;
  level: string;
};

const HandleClick = ({
  id,
  level,
  romajiRead,
}: {
  id: string;
  level: string;
  romajiRead: string;
}) => {
  return <a href={`/${level}/${id}`}>{romajiRead}</a>;
};

export const columns: ColumnDef<Grammar>[] = [
  {
    accessorKey: "romajiRead",
    header: "Ngữ pháp",
    cell: ({ row }) => {
      const id = row.original.id;
      const level = row.original.level;
      const romajiRead = row.original.romajiRead;

      return <HandleClick id={id} level={level} romajiRead={romajiRead} />;
    },
  },
  {
    accessorKey: "japaneseRead",
    header: "文法レッスン",
  },
  {
    accessorKey: "meaning",
    header: "Ý Nghĩa (意味)",
  },
];
