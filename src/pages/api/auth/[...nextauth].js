import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (
          credentials.email === "user@example.com" &&
          credentials.password === "test"
        ) {
          return { id: 1, name: "Demo", email: "user@example.com" };
        }
        return null;
      },
    }),
  ],
  secret: "aku-cinta-menkrep",
});