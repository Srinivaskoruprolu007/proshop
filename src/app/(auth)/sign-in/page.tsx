import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import CredentialsSignInForm from "./credentials-signIn-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = async (props: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;

  const session = await auth();
  if (session?.user) {
    return redirect(callbackUrl || "/");
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-2">
          <Link href="/" className="flex-center">
            <Image
              src={"https://img.icons8.com/arcade/64/shop.png"}
              alt={`${APP_NAME} logo`}
              width={100}
              height={100}
              priority={true}
            />
          </Link>
          <CardTitle className="text-center text-xl font-bold">
            Sign In
          </CardTitle>
          <CardDescription className="text-center text-sm text-muted-foreground">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <CredentialsSignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
