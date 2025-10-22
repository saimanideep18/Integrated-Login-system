import { withAuth } from "next-auth/middleware";

// This middleware will protect routes that require authentication
export default withAuth({
  // Configure protected routes
  pages: {
    signIn: "/login",
  },
});

export const config = {
  // Protect all routes that start with /dashboard
  matcher: "/dashboard/:path*",
};
