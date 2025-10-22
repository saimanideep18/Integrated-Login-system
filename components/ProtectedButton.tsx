"use client";

import { useSession } from "next-auth/react";

interface ProtectedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function ProtectedButton({
  children,
  onClick,
  className = "",
}: ProtectedButtonProps) {
  const { data: session } = useSession();

  // Only render the button for admin users
  if (session?.user?.role !== "admin") {
    return null;
  }

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
