import type { Metadata } from "next";
import "./ui/globals.css";
import { SessionProvider } from "next-auth/react";


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className="bg-background text-text"
        >
        <SessionProvider>{children}</SessionProvider>
        </body>
        </html>
    );
}
