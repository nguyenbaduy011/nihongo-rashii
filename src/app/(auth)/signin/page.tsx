import SignInForm from "@/components/auth/signInForm";
import Image from "next/image";
export default function SignInPage() {
  return (
    <div className="flex items-center justify-center gap-48">
      <SignInForm />
    </div>
  );
}
