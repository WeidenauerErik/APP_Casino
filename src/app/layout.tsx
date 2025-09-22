import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Casino APP",
    description: "A Casino App for everyone",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased flex bg-gray-900`}
        >
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-gray-800 text-white shadow-md flex flex-col p-4">
            <h1 className="text-2xl font-bold mb-6">Casino APP</h1>
            <nav className="flex flex-col gap-4">
                <Link href="/" className="hover:bg-gray-700 p-2 rounded">Home</Link>
                <Link href="/slotmachines" className="hover:bg-gray-700 p-2 rounded">Slotmachines</Link>
                <Link href="/identitycheck" className="hover:bg-gray-700 p-2 rounded">Identitycheck</Link>
                <Link href="/payment" className="hover:bg-gray-700 p-2 rounded">Payment</Link>
                <Link href="/badges" className="hover:bg-gray-700 p-2 rounded">Stats</Link>
            </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-5 bg-gray-900 ">
            {children}
        </main>
        </body>
        </html>
    );
}
