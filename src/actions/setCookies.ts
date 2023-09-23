"use server";
import { cookies } from "next/headers";

export async function setCookies(access: string, refresh: string) {
  const oneDay: number = 24 * 60 * 60;
  cookies().set({
    name: "access",
    value: access,
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: oneDay,
    sameSite: 'strict',
    priority: 'medium',
  });
  cookies().set({
    name: "refresh",
    value: refresh,
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: oneDay + oneDay,
    sameSite: 'strict',
    priority: 'medium',
  });
}
