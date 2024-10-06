import { InsertLevels } from "@/lib/drizzle/seed/levels/insertLevels";
import { InsertN5Grammars } from "@/lib/drizzle/seed/grammars/insertGrammars";
import { InsertN5GrammarExamples } from "@/lib/drizzle/seed/grammarExamples/insertGrammarExamples";
const seed = async () => {
  try {
    await InsertLevels();
    await InsertN5Grammars();
    await InsertN5GrammarExamples();   
    console.log("Đã chèn dữ liệu thành công");
  } catch (error) {
    console.error("Lỗi khi chèn dữ liệu:", error);
  }
};

seed();
