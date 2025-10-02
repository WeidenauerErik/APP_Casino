"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 text-center">
            <h1 className="text-5xl font-extrabold mb-6 text-green-400 drop-shadow-lg">
                Welcome to Ereksa
            </h1>

            <p className="text-lg max-w-xl opacity-90 mb-12">
                This is a fun casino application and not with real money!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-12">

                <Link href="/slotmachines" className="p-6 bg-gray-800 rounded-2xl shadow hover:shadow-xl hover:bg-gray-700 transition">
                    <img
                        src="https://img.icons8.com/ios-filled/100/ffffff/dice.png"
                        alt="Casino Games"
                        className="mx-auto mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-2">Casino Games</h2>
                    <p className="text-sm opacity-80">
                        Spin slotmachines!
                    </p>
                </Link>

                <Link href="/badges" className="p-6 bg-gray-800 rounded-2xl shadow hover:shadow-xl hover:bg-gray-700 transition">
                    <img
                        src="https://img.icons8.com/ios-filled/100/ffffff/gift.png"
                        alt="Rewards"
                        className="mx-auto mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-2">Rewards</h2>
                    <p className="text-sm opacity-80">
                        Earn fun rewards and achievements as you play.
                    </p>
                </Link>
            </div>

            <Link href="/payment" className="px-8 py-3 rounded-2xl bg-green-500 text-gray-900 font-semibold shadow-lg hover:bg-green-600 hover:shadow-xl transition">
                Get Started
            </Link>
        </div>
    );
}