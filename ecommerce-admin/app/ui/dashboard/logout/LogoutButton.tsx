// components/LogoutButton.tsx
"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <button
            onClick={() => signOut({ redirectTo: "/login" })}
            className="px-16 py-2 bg-red-500 text-white rounded"
        >
            Logout
        </button>
    );
}