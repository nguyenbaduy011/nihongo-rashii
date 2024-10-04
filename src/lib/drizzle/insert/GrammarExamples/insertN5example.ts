import { db } from "@/lib/drizzle/db";
import { grammarExamples } from "@/lib/drizzle/schema";

export async function InsertN5GrammarExamples() {
  return await db.insert(grammarExamples).values([
    {
      id: "N5_1_1",
      grammarID: "N5_1",
      vietnameseRead: "=>Tôi không hay xem phim kinh dị lắm.",
      japaneseRead:
        "ホラー映画は <span style='color:red;'>あまり</span>見ません。",
      romajiRead:
        "Horaa eiga wa <span style='color:red;'>amari</span> mimasen.",
    },
    {
      id: "N5_1_2",
      grammarID: "N5_1",
      vietnameseRead: "=>Tôi không thích rượu lắm.",
      japaneseRead:
        "私はお酒が<span style='color:red;'>あまり</span>好きじゃない。",
      romajiRead:
        "Watashi wa osake ga  <span style='color:red;'>amari</span> suki janai.",
    },
    {
      id: "N5_1_3",
      grammarID: "N5_1",
      vietnameseRead: "=>Cái món này không ngon lắm.",
      japaneseRead:
        "この食べ物は<span style='color:red;'>あまり</span>美味しくなかった",
      romajiRead:
        "Kono tabemono wa  <span style='color:red;'>amari</span> oishi kunakatta.",
    },
    {
      id: "N5_1_4",
      grammarID: "N5_1",
      vietnameseRead:
        "=>Tôi không xem tivi nhiều lắm nhưng không phải là tôi ghét nó.",
      japaneseRead:
        "テレビは<span style='color:red;'>あまり</span>見ませんが嫌いじゃありません。",
      romajiRead:
        "Terebi wa  <span style='color:red;'>amari</span> mimasen ga kirai jaarimasen.",
    },
    {
      id: "N5_1_5",
      grammarID: "N5_1",
      vietnameseRead: "=>Tôi không thích đồ uống lạnh lắm.",
      japaneseRead:
        "冷たい飲み物が<span style='color:red;'>あまり</span>好きじゃありません。",
      romajiRead:
        "Tsumetai nomimono ga  <span style='color:red;'>amari</span> suki jaarimasen.",
    },
  ]);
}
