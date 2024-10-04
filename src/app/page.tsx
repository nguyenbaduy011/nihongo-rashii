import { Header } from "@/components/custom/header"; 
import { TodayPick } from "@/components/todayPick";
import { TrendingPick } from "@/components/trendingTopics";
import { CreateBlog } from "@/components/blogs/createBlog";
export default function Page() {
    return (
      <main>
        <TodayPick />
        <TrendingPick />
       {/* <CreateBlog />  */}
      </main>
    );
}


