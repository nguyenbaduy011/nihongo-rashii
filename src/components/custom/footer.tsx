import {
  ToggleLeft,
  Facebook,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export function Footer() {
  return (
    <footer className="bg-[#Ffaaaa]">
      <div className="mx-auto flex h-[400px] items-center justify-center space-x-[400px]">
        {/* <div>
          <Image
            src="/nihongo_rashii_white.svg"
            width={160}
            height={80}
            className="object-contain"
            alt="Nihongo rashii"
          />
        </div> */}
        <div className="max-w-66">
          <div className="items-center space-y-14 text-xl">
            <div className="font-medium">日本語らしい</div>
            <div className="space-y-5 font-medium">
              <div>Blogs</div>
              <div>Contact</div>
              <div>Quick Links</div>
            </div>
            {/* <div className="flex space-x-5">
              <div className="">Light/Dark mode</div>
              <ToggleLeft />
            </div> */}
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="text-xl font-medium">Social media</h1>
          <div className="flex space-x-3">
            <Facebook />
            <Instagram />
            <Linkedin />
            <Link href="https://github.com/nguyenbaduy011/nihongo-rashii">
              <Github />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
