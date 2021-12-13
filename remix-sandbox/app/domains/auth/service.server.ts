import bcrypt from "bcryptjs";
import { createCookieSessionStorage, redirect } from "remix";
import { db } from "~/utils/db.server";

type LoginForm = {
  email: string;
  password: string;
};

const sessionSecret = process.env.SESSION_SECRET || "session-secret";
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "RJ_session",
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export class AuthService {
  static async login({ email, password }: LoginForm) {
    const user = await db.user.findUnique({
      where: { email },
    });
    if (!user) return null;
    const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isCorrectPassword) return null;
    return user;
  }

  static async logout(request: Request) {
    const session = await this.getUserSession(request);
    return redirect("/login", {
      headers: {
        "Set-Cookie": await storage.destroySession(session),
      },
    });
  }

  static async createUserSession(userId: string, redirectTo: string) {
    const session = await storage.getSession();
    session.set("userId", userId);
    return redirect(redirectTo, {
      headers: {
        "Set-Cookie": await storage.commitSession(session),
      },
    });
  }

  static async getCurrentUserId(request: Request): Promise<string | null> {
    const session = await this.getUserSession(request);
    const userId = session.get("userId");
    if (!userId || typeof userId !== "string") return null;
    return userId;
  }

  private static getUserSession(request: Request) {
    return storage.getSession(request.headers.get("Cookie"));
  }
}
