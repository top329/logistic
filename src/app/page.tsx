"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Spinner, useAuth } from "@/component";
import { validateToken } from "@/utils/utility";
import { logout } from "@/features/projects";

export default function MainPage() {
  const router = useRouter();
  const query = useSearchParams();
  const isAuth = query.get("auth");
  // const { expireDate, accessToken } = useAuth();

  useEffect(() => {
    // if (isAuth) {
    //   dispatch(logout());
    // } else if (
    //   accessToken &&
    //   accessToken !== "" &&
    //   expireDate &&
    //   validateToken(expireDate)
    // ) {
      router.replace("/home");
    // } else {
    //   dispatch(logout());
    // }
  }, [router]);

  return <Spinner loading={true} size="large" />;
}
