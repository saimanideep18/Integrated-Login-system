// Import necessary providers and types from NextAuth
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

// Define the User interface for type safety
interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

// Mock database of users
// In a real application, this would be stored in a secure database
// The passwords should be hashed using bcrypt or similar
const users: User[] = [
  {
    id: "1",
    email: "admin@example.com",
    password: "adminpass", // In production, this would be hashed
    name: "admin",
  },
  {
    id: "2",
    email: "author@example.com",
    password: "authorpass",
    name: "author",
  },
  {
    id: "3",
    email: "consumer@example.com",
    password: "consumerpass",
    name: "consumer",
  },
];

// Main NextAuth configuration object
const NEXT_AUTH = {
  // Authentication Providers Configuration
  providers: [
    CredentialsProvider({
      // Display name for the sign-in form
      name: "Credentials",

      // Define the fields required in the sign-in form
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      // Authorization function - validates credentials and returns a user object
      // This is where the actual authentication happens
      async authorize(credentials) {
        // Input validation
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        // Check if user exists and password matches
        // In production, you would hash the password and use a secure comparison
        const user = users.find(
          (u) =>
            u.email === credentials.email && u.password === credentials.password
        );

        // If no user is found or password doesn't match, return null
        // This will trigger the 'Invalid credentials' error on the client
        if (!user) {
          return null;
        }

        // If authentication is successful, return the user object
        // This object will be passed to the JWT and session callbacks
        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],

  // Secret used to sign JWTs - should be a secure random string in production
  secret: process.env.NEXTAUTH_SECRET,

  // Session Configuration
  session: {
    // Using JWT strategy for sessions instead of database sessions
    // This means session data is stored in the JWT token itself
    strategy: "jwt" as const,
  },

  // Callback functions to customize JWT and session behavior
  callbacks: {
    // JWT Callback - Called whenever a JWT is created or updated
    async jwt({
      token,
      user,
    }: {
      token: JWT & { name?: string };
      user?: User;
    }) {
      if (user) {
        // Add custom claims to the JWT token
        token.name = user.name;
      }
      return token;
    },

    // Session Callback - Called whenever a session is checked
    async session({
      session,
      token,
    }: {
      session: Session & { user?: { name?: string; id?: string } };
      token: JWT & { name?: string };
    }) {
      if (session.user) {
        // Add custom properties to the session object
        // These will be available on the client side
        session.user.name = token.name;
        session.user.id = token.sub; // sub is the user ID stored in the JWT
      }
      return session;
    },
  },

  // Custom pages configuration
  pages: {
    // Redirect to our custom login page instead of the default
    signIn: "/login",
  },
};

// Initialize NextAuth with our configuration
// This creates API routes for handling authentication
const handler = NextAuth(NEXT_AUTH);

// Export the handler for both GET and POST requests
// GET: Used for retrieving session data and CSRF tokens
// POST: Used for authentication and callback handling
export { handler as GET, handler as POST };
