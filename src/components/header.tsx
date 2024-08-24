import { Menu, Search } from "lucide-react";

export function Header() {
  return (
    <div className="flex h-20 items-center justify-between bg-[#2B2B2B] px-10 py-[1.375rem] text-lg text-white">
      <div className="flex space-x-32">
        <div>日本語らしい</div>
        <div className="flex items-center space-x-16">
          <a>N5</a>
          <a>N4</a>
          <a>N3</a>
          <a>N2</a>
          <a>N1</a>
          <Search className="size-5" />
        </div>
      </div>
      <Menu />
    </div>
  );
}
