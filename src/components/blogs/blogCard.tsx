import { Tag } from "lucide-react";
import Image from "next/image";
export function BlogCard({ className, image, tag, title, author, readtime, description, date}:any) {
  return (
    <div className= {className}>
        <div className="space-y-5">
          <Image
            src={image}
            width={0}
            height={0}
            sizes="100vw"
            className="w-[100%] h-auto"
            alt="Picture of the author"
          />
          <div className="space-y-4">
            <button className="items-center rounded-full border border-blue-600 px-2 py-1 text-xs text-blue-600">
              {tag}
            </button>
            <div className="text-[#2B2B2B]/60">
              <p>
                {author} | {readtime} min read
                <br />
                {date}
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="max-w-[470px]">
            <h3 className="mb-1 text-2xl font-medium text-[#2B2B2B]">
              {title}
            </h3>
            <div className="text-base text-[#2B2B2B]/60">
              {description}
            </div>
          </div>
      </div>
    </div>
  );
}
