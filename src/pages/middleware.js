import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // Redirect ke halaman login jika tidak terautentikasi
  },
});
