"use server";
import { z } from "zod";

const schemaRegister = z.object({
  username: z
    .string()
    .min(3)
    .max(20, { message: "Tên người dùng phải dài hơn 3 và ngắn hơn 20 ký tự" }),
  password: z
    .string()
    .min(6)
    .max(100, { message: "Mật khẩu phải dài hơn 6 và ngắn hơn 100 ký tự" }),
  email: z.string().email({ message: "Vui lòng nhập email hợp lệ" }),
});

export async function RegisterUserAction(prevState: any, formData: FormData) {
  const validatedFields = schemaRegister.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
  });

if (!validatedFields.success){
  return {
    ...prevState, 
    zodErrors: validatedFields.error.flatten().fieldErrors,
    message: "Thiếu thông tin, đăng ký thất bại"
  }
}

  const fields = {
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
  };

  return {
    ...prevState,
    data: "ok",
  };
}

export async function LoginUserAction(prevState: any, formData: FormData) {

  const fields = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  return {
    ...prevState,
    data: "ok",
  };
}
