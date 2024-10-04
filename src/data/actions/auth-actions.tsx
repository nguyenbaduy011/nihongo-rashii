"use server";

export async function RegisterUserAction(prevState: any, formData: FormData) {
  const fields = {
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
  };

  return {
    ...prevState,
    data: fields,
  }
}
