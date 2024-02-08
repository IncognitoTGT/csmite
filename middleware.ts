import type { NextRequest } from "next/server";
// :trolley:
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const referer = requestHeaders.get("Referer");
  const willDo = Math.random() < 0.5;
  if (referer?.includes("reddit.com") && willDo) {
    return Response.redirect(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      302,
    );
  }
}
