"use client";

import React from "react";
import Webcam from "react-webcam";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 max-w-md w-full text-center">
                <h1 className="text-3xl font-bold mb-4">Ausweisverifikation</h1>
                <p className="text-gray-300 mb-6 text-sm">
                    Halte deinen Ausweis mit der Vorderseite gut sichtbar vor die Kamera.
                </p>

                <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 border-4 border-green-500 rounded-lg pointer-events-none animate-pulse"></div>
                    <Webcam
                        className="rounded-lg"
                        height={250}
                    />
                </div>

                <p className="text-gray-400 text-xs mt-3">
                    Stelle sicher, dass dein Gesicht und der Ausweis gut beleuchtet sind.
                </p>

                <button className="mt-6 bg-green-500 w-full py-3 rounded-xl font-semibold hover:bg-green-600 transition">
                    Verifizieren
                </button>

                <p className="text-green-400 text-sm mt-4 italic animate-pulse">
                    Verifikation läuft ...
                </p>
            </div>
        </div>
    );
}
