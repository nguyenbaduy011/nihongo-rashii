import Image from "next/image";
export default function BlogPage() {
  return (
    <div className="mx-auto mt-36 max-w-[1000px]">
      <div className="space-y-16">
        <div className="space-y-8">
          <h1 className="items-center text-3xl text-[#2B2B2B]">Tên blog</h1>
          <div className="flex space-x-4">
            <Image
              src="/hero.png"
              height={50}
              width={50}
              alt="Dummy Image"
              className="aspect-square rounded-full object-cover"
            />
            <p>
              Fullname | Job title
              <br />
              August 23, 2024 | 4 min read
            </p>
          </div>
        </div>
        <Image src="/hero.png" height={540} width={1000} alt="Dummy Image" />
      </div>
    </div>
  );
}
