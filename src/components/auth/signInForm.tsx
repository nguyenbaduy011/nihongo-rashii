// "use client";

// import Link from "next/link";

// import {
//   CardTitle,
//   CardDescription,
//   CardHeader,
//   CardContent,
//   CardFooter,
//   Card,
// } from "@/components/ui/card";

// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { LoginUserAction } from "@/data/actions/auth-actions";
// import { useFormState } from "react-dom";

// const INITIAL_STATE = {
//   data: "hello",
// };

// export default function SignInForm() {

//   const [formState, formAction] = useFormState(LoginUserAction, INITIAL_STATE);

//   console.log(formState, "client");

//   return (
//     <div className="w-full max-w-md flex-1">
//       <form action={formAction}>
//         <Card>
//           <CardHeader className="space-y-1">
//             <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
//             <CardDescription>
//               Enter your details to sign in to your account
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="text"
//                 placeholder="username or email"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Mật khẩu</Label>
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 placeholder="password"
//               />
//             </div>
//           </CardContent>
//           <CardFooter className="flex flex-col">
//             <button className="w-full">Đăng nhập</button>
//           </CardFooter>
//         </Card>
//         <div className="mt-4 text-center text-sm">
//           Bạn chưa có tài khoản?
//           <Link className="ml-2 underline" href="signup">
//             Đăng ký
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// }

"use client";

import Link from "next/link";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { LoginUserAction } from "@/data/actions/auth-actions";
import { useFormState } from "react-dom";
import { SignInClient } from "./signIn-button-client";
const INITIAL_STATE = {
  data: "hello",
};

export default function SignInForm() {
  const [formState, formAction] = useFormState(LoginUserAction, INITIAL_STATE);

  console.log(formState, "client");

  return (
    <div className="flex items-center justify-center">
      <form action={formAction}>
        <Card>
          <CardHeader className="items-center space-y-1">
            <CardTitle className="text-3xl font-bold">Đăng nhập</CardTitle>
            {/* <CardDescription>
              Enter your details to sign in to your account
            </CardDescription> */}
          </CardHeader>
          <div className="border-spacing-0"></div>
          <CardContent className="space-y-4">
            <div className="border-b-2 py-2">
              <SignInClient />
            </div>

            <div className="border-b-2 py-2">
              <div className="space-y-2">
                <Label htmlFor="email">Tên đăng nhập</Label>
                <Input id="email" name="email" type="text" placeholder="" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mật khẩu</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder=""
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w- bg-[#2B2B2B]">Đăng nhập</Button>
          </CardFooter>
          <CardContent>
            <div className="text-center text-sm">
              Bạn chưa có tài khoản?
              <Link className="ml-2 underline" href="signup">
                Đăng ký
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
