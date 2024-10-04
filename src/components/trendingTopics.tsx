import Image from "next/image";
import { BlogCard } from "./blogs/blogCard";

let data = [
  {
    id: 1,
    title: "blog",
    image: "/hero1.png",
    tag: "blog",
    author: "blog",
    readtime: 6,
    description: "blog",
    date: "2015",
  },
  {
    id: 2,
    title: "blog",
    image: "/hero1.png",
    tag: "blog",
    author: "blog",
    readtime: 34,
    description: "blog",
    date: "2015",
  },
  {
    id: 3,
    title: "blog",
    image: "/hero1.png",
    tag: "blog",
    author: "blog",
    readtime: 7,
    description: "blog",
    date: "2025",
  },
];

export function TrendingPick() {
  return (
    <div className="mx-auto max-w-[1000px] border-t-2 pb-16 pt-24">
      <h2 className="text-xl font-medium text-[#2B2B2B]">Trending picks</h2>

      <div className="mt-16 grid grid-cols-2 gap-14">
        {data.map((blog)=> <BlogCard
          key={blog.id}
          title={blog.title}
          image={blog.image}
          tag={blog.tag}
          author={blog.author}
          readtime={blog.readtime}
          description={blog.description}
          date={blog.date}/>)}
      </div>
    </div>
  );
}
