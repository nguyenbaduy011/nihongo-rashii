import { DataTable } from "./data-table";
import { columns } from "./column";
import { db } from "@/lib/drizzle/db";
import { grammars, levels } from "@/lib/drizzle/seed/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export default async function DemoPage({
  params,
}: {
  params: { N_number: string };
}) {
  const N_ID = await db.query.levels.findFirst({
    where: eq(levels.id, params.N_number),
  });

  if (!N_ID) {
    redirect("/");
  }

  const data = await db
    .select()
    .from(grammars)
    .where(eq(grammars.level, params.N_number));

  return (
    <div className="mx-auto mt-10 max-w-[1000px]">
      <div className="border-b-2 pb-3">
        <div className="flex h-20 items-center justify-center bg-[#Ffaaaa] text-3xl text-[#2B2B2B]">
          Danh Sách Ngữ Pháp {params.N_number}
        </div>
      </div>
      <div className="mt-3 text-center text-xl">{N_ID.content}</div>
      <div className="container py-10">
        {data.length > 0 && <DataTable columns={columns} data={data} />}
      </div>
    </div>
  );
}
