import { auth } from "@/auth";

const protectedRoutes = ["/trips", "/reservations", "/favourites"];

export default auth((req) => {
  if (!req.auth && protectedRoutes.includes(req.nextUrl.pathname)) {
    return Response.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
