"use client";

import Link from "next/link";
import { RegisterUserAction } from "@/data/actions/auth-actions";
import { useFormState } from "react-dom";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ZodErrors } from "../custom/ZodErrors";

const INITIAL_STATE = {
  data: null,
  zodErrors: null,
  message: null,
};

export function SignupForm() {
  const [formState, formAction] = useFormState(
    RegisterUserAction,
    INITIAL_STATE,
  );

  console.log(formState, "client");

  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Đăng ký</CardTitle>
            <CardDescription>
              Enter your details to create a new account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Tên đăng nhập</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="username"
              />
              <ZodErrors error={formState?.zodErrors?.username} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
              />
              <ZodErrors error={formState?.zodErrors?.email} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mật khẩu</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password"
              />
              <ZodErrors error={formState?.zodErrors?.password} />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <button type="submit" className="w-full">
              Đăng ký
            </button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Bạn đã có tài khoản?
          <Link className="ml-2 underline" href="signin">
            Đăng nhập
          </Link>
        </div>
      </form>
    </div>
  );
}
