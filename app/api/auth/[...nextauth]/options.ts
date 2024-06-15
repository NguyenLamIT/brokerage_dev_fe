import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        type: {
          label: "Type",
          type: "text",
          placeholder: "type",
          value: "",
        },
        params: {
          label: "Params",
          type: "text",
          placeholder: "params",
          value: "",
        },
        email: {
          label: "Email",
          type: "text",
          placeholder: "your email",
          value: "tester6@gmail.com",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "your password",
          value: "tmt@13579",
        },
      },
      async authorize(credentials: any) {
        if(credentials.type == "google"){ 
          const res = await fetch(
            process.env.NEXT_PUBLIC_BASE_URL + `/auth/google/callback?${credentials?.params}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await res.json();
          if (res.ok) {
            const { access_token, token_type, user } = data;
            const token = { access_token, token_type };
  
            return { ...user, ...token };
          }
          return null;
        }
        if(credentials.type == "facebook"){ 
          const res = await fetch(
            process.env.NEXT_PUBLIC_BASE_URL + `/auth/facebook/callback?${credentials?.params}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await res.json();
          if (res.ok) {
            const { access_token, token_type, user } = data;
            const token = { access_token, token_type };
  
            return { ...user, ...token };
          }
          return null;
        }
        const res = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + "/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );
        const data = await res.json();
        if (res.ok) {
          const { access_token, token_type, user } = data;
          const token = { access_token, token_type };

          return { ...user, ...token };
        }
        return null;
      },
    }),

  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        if (session?.role) {
          token.role = session.role;
        }
        if (session?.avatar) {
          token.avatar = session.avatar;
        }
        if (session?.user) {
          token = { ...token, ...session.user };
        }

        return { ...user, ...token };
      }
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  }
};
