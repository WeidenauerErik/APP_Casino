"use client";

import React, { JSX, useEffect, useState } from "react";

export default function Page() {
    const symbols = [
        "andreasFink.jpeg",
        "florianWeiss.jpg",
        "franzStimpfl.jpeg",
        "sonjaRauchenwald.jpeg",
        "sabineSchlechta.jpg",
        "martinFitz.jpeg"
    ];

    const [currentSymbols, setCurrentSymbols] = useState<string[]>([]);
    const [isSpinning, setIsSpinning] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    useEffect(() => {
        const initialSymbols: string[] = [];
        for (let i = 0; i < 9; i++) {
            initialSymbols.push(
                symbols[Math.floor(Math.random() * symbols.length)]
            );
        }
        setCurrentSymbols(initialSymbols);
    }, []);

    const spinner = () => {
        if (isSpinning) return;
        setIsSpinning(true);
        setResult(null); // Reset Ergebnis beim Start

        let count = 0;
        const interval = setInterval(() => {
            setCurrentSymbols(prevSymbols => {
                const newSymbols = [...prevSymbols];
                for (let i = 0; i < 3; i++) {
                    newSymbols.shift();
                    newSymbols.push(
                        symbols[Math.floor(Math.random() * symbols.length)]
                    );
                }
                return newSymbols;
            });

            count++;
            if (count >= 10) {
                clearInterval(interval);
                setIsSpinning(false);
                setCurrentSymbols(prev => {
                    const checkSymbols = [prev[3], prev[4], prev[5]];
                    const allEqual = checkSymbols.every(s => s === checkSymbols[0]);

                    if (allEqual) {
                        setResult("🎉 Gewonnen!");
                    } else {
                        setResult("❌ Nicht gewonnen");
                    }
                    return prev;
                });
            }
        }, 200);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
            <h1 className="text-4xl font-bold mb-6">Slot Machine</h1>

            <div className="grid grid-cols-3 gap-4 mb-8">
                {currentSymbols.map((symbol, i) => (
                    <div
                        key={i}
                        className="w-48 h-48 rounded-xl overflow-hidden bg-gray-800 shadow-lg flex items-center justify-center"
                    >
                        <img
                            src={"/resources/" + symbol}
                            alt={"Slot-Bild " + i}
                            className={`w-full h-full object-contain transition-transform duration-100 ease-in-out ${
                                isSpinning ? "animate-pulse" : ""
                            }`}
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={spinner}
                disabled={isSpinning}
                className={`px-6 py-3 rounded-xl font-semibold text-lg transition 
                    ${
                    isSpinning
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600 cursor-pointer"
                }`}
            >
                {isSpinning ? "Spinning..." : "Spin"}
            </button>

            {result && (
                <div className="mt-6 text-2xl font-bold">
                    {result}
                </div>
            )}
        </div>
    );
}
