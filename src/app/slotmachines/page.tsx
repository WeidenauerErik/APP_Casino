"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
    const [slots] = useState([
        {
            id: 1,
            name: "Mechatronik Hölle",
            image: "https://www.htlrennweg.at/wp-content/uploads/avia_instagram_cache/2-htl3r--instagram/original_127908854_229992398470474_4245673324282574824_n.jpg",
            description: "Gehirnzellen sind verbrannt",
        },
        {
            id: 2,
            name: "Nerd Hölle",
            image: "https://media.istockphoto.com/id/494851754/de/foto/jungen-nerd-mit-gro%C3%9Fen-l%C3%A4cheln.jpg?s=612x612&w=0&k=20&c=XQk9k0AlZWrEeOEjeKmeplTAdR3UnP2fFlZG33cQhyI=",
            description: "Gehirnzellen werden gefarmt.",
        }
    ]);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white px-6 py-12">
            <h1 className="text-5xl font-extrabold mb-10 text-green-400 drop-shadow-lg text-center">
                Slotmachines
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {slots.map((slot) => (
                    <Link href="/slotmachine"
                        key={slot.id}
                        className="p-6 bg-gray-800 rounded-2xl shadow hover:shadow-xl hover:bg-gray-700 transition flex flex-col items-center text-center"
                    >
                        <img src={slot.image} alt={slot.name} className="mb-4 h-50"/>
                        <h2 className="text-xl font-semibold mb-2">{slot.name}</h2>
                        <p className="text-sm opacity-80 mb-4">{slot.description}</p>
                        <button className="mt-auto px-6 py-2 rounded-xl bg-green-500 font-semibold shadow hover:bg-green-600 transition">
                            Play Now
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
}