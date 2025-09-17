"use client";

import React, {useState} from "react";
import medaille from "../assets/medaille.png";

export default function Page() {
    const [level, setLevel] = useState(1);
    const [XP, setXP] = useState(50);
    const maxXP = 120;

    const percent = XP/maxXP;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
            <header className="flex items-center gap-4 mb-6">
                <div id="badgeWrap"
                     className="w-20 h-20 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-200 overflow-hidden">
                    <img src={medaille.src} alt="Badge" className="w-16 h-16 object-cover"/>
                </div>
                <div className="flex-1">
                    <h1 className="text-xl font-semibold">XP Fortschritt</h1>
                    <p className="text-sm text-gray-500">Level <span id="level">1</span> • <span id="xpText">{ XP } / { maxXP } XP</span></p>
                </div>
            </header>

            <section>
                <div className="mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                        <div
                            id="xpFill"
                            className="h-5 rounded-full xp-fill"
                            style={{
                                width: `${percent*100}%`,
                                background: "linear-gradient(90deg,#34d399,#10b981)"
                            }}
                        ></div>

                    </div>
                </div>

                <div className="flex justify-between text-xs text-gray-500">
                    <span id="xpLeft">Noch {maxXP-XP} XP bis Level up</span>
                </div>
            </section>
        </div>
    )
}