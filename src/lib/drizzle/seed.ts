import { InsertN5GrammarExamples } from "./insert/GrammarExamples/insertN5GrammarExamples";
import { InsertN4Grammars } from "./insert/Grammars/insertN4Grammars";
import { InsertN5Grammars } from "./insert/Grammars/insertN5Grammars";
import { InsertLevels } from "./insert/insertLevels";

const seed = async () => {
  try {
   
    await InsertN5Grammars();
    await InsertN5GrammarExamples();
    await InsertLevels();
    console.log("Đã chèn dữ liệu thành công");
  } catch (error) {
    console.error("Lỗi khi chèn dữ liệu:", error);
  }
};

seed();
