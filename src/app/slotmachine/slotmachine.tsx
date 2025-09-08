"use client";

import React, {JSX, useEffect, useState} from "react";
import "./slotmachine.css";

export default function Slotmachine() {
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

    useEffect(() => {
        const initialSymbols: string[] = [];
        for (let i = 0; i < 9; i++) {
            initialSymbols.push(symbols[Math.floor(Math.random() * symbols.length)]);
        }
        setCurrentSymbols(initialSymbols);
    }, []);

    const spinner = () => {
        if (isSpinning) return;
        setIsSpinning(true);

        let count = 0;
        const interval = setInterval(() => {
            setCurrentSymbols(prevSymbols => {
                const newSymbols = [...prevSymbols];
                for (let i = 0; i < 3; i++) {
                    newSymbols.shift();
                    newSymbols.push(symbols[Math.floor(Math.random() * symbols.length)]);
                }
                return newSymbols;
            });

            count++;
            if (count >= 10) {
                clearInterval(interval);
                setIsSpinning(false);
            }
        }, 200);
    };


    return (
        <div className="slotmachine-container">
            <div className="slotmachine-grid">
                {(() => {
                    const reels: JSX.Element[] = [];
                    for (let i = 0; i < currentSymbols.length; i++) {
                        reels.push(
                            <div key={i} className="slotmachine-reel">
                                <img
                                    src={"/resources/" + currentSymbols[i]}
                                    alt={"Slot-Bilder" + i}
                                    className={isSpinning ? "spinning" : ""}
                                />
                            </div>
                        );
                    }
                    return reels;
                })()}
            </div>

            <button onClick={spinner} disabled={isSpinning}>
                {isSpinning ? "Spinning..." : "Spin"}
            </button>
        </div>
    );
}
