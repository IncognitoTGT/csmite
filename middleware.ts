import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const referer = requestHeaders.get("Referer");
  if (referer?.includes("reddit.com")) {
    return Response.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ", 301);
  }
}
