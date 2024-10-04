import Image from "next/image";
import { BlogCard } from "./blogs/blogCard";
export function TodayPick() {
  return (
    <div className="mx-auto max-w-[1000px] pb-16 pt-40">
      <h2 className="text-xl font-medium text-[#2B2B2B]">Today&apos;s picks</h2>
      {/* <div className="mt-8 space-y-5">
        <Image
          src="/hero.png"
          width={1000}
          height={450}
          alt="Picture of the author"
        />
        <div className="space-y-4">
          <button className="items-center rounded-full border border-blue-600 px-2 py-1 text-xs text-blue-600">
            Technology
          </button>
          <div className="text-[#2B2B2B]/60">
            <p>
              Fullname | Job title | 4 min read
              <br />
              August 23, 2024
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="max-w-[800px]">
            <h3 className="text-2xl font-medium text-[#2B2B2B]">
              Write the blog post title right here
            </h3>
            <div className="text-base text-[#2B2B2B]/60">
              Write the blog description right here, Write the blog description
              right here, Write the blog description right here.Write the blog
              description right here, Write the blog description right here,
              Write the blog description right here. Write the blog description
              right here, Write the blog description right here, Write the blog
              description right here.
            </div>
          </div>
          <a className="text-base text-blue-600 underline">Learn more</a>
        </div>
      </div> */}
      <div className="mt-16 grid grid-cols-2 grid-rows-[764px_594px] gap-16">
        <BlogCard
          width={1000}
          title="blog1"
          image="/hero1.png"
          tag="blog1"
          author="blog1"
          readtime={6}
          description="blog1"
          date="2015"
          className="col-span-2"
        />
        <BlogCard
          title="blog2"
          image="/hero1.png"
          tag="blog2"
          author="blog2"
          readtime={6}
          description="blog2"
          date="2015"
        />
        <BlogCard
          title="blog3"
          image="/hero1.png"
          tag="blog3"
          author="blog3"
          readtime={6}
          description="blog3"
          date="2015"
        />
      </div>
    </div>
  );
}
