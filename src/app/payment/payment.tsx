"use client";

import { useState } from "react";

export default function Payment() {

    const [selectedMethod, setSelectedMethod] = useState('card');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-8">Aktuelles Guthaben</h1>
            <div className="text-6xl font-extrabold text-green-400 mb-12">€ 150,00</div>

            <h2 className="text-2xl font-semibold mb-6">Zahlungsmethode auswählen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Kredit-/Debitkarte */}
                <div
                    onClick={() => setSelectedMethod("card")}
                    className={`p-6 rounded-2xl shadow cursor-pointer transition 
                        ${selectedMethod === "card" ? "bg-green-600 shadow-xl" : "bg-gray-800 hover:shadow-xl hover:bg-gray-700"}`}
                >
                    <img
                        src="https://img.icons8.com/ios-filled/100/ffffff/bank-card-back-side.png"
                        alt="Karte"
                        className="mx-auto mb-4"
                    />
                    <p className="text-lg font-medium">Kredit-/Debitkarte</p>
                </div>

                {/* Bankeinzug */}
                <div
                    onClick={() => setSelectedMethod("bank")}
                    className={`p-6 rounded-2xl shadow cursor-pointer transition 
                        ${selectedMethod === "bank" ? "bg-green-600 shadow-xl" : "bg-gray-800 hover:shadow-xl hover:bg-gray-700"}`}
                >
                    <img
                        src="https://img.icons8.com/ios-filled/100/ffffff/bank-building.png"
                        alt="Bankeinzug"
                        className="mx-auto mb-4"
                    />
                    <p className="text-lg font-medium">Bankeinzug</p>
                </div>

                {/* Apple Pay */}
                <div
                    onClick={() => setSelectedMethod("apple")}
                    className={`p-6 rounded-2xl shadow cursor-pointer transition 
                        ${selectedMethod === "apple" ? "bg-green-600 shadow-xl" : "bg-gray-800 hover:shadow-xl hover:bg-gray-700"}`}
                >
                    <img
                        src="https://img.icons8.com/ios-filled/100/ffffff/mac-os.png"
                        alt="Apple Pay"
                        className="mx-auto mb-4"
                    />
                    <p className="text-lg font-medium">Apple Pay</p>
                </div>
            </div>

            {/* Unterpunkte / Formulare */}
            <div className="w-full max-w-md text-left">
                {selectedMethod === "card" && (
                    <div className="p-6 bg-gray-800 rounded-2xl shadow mb-4">
                        <h3 className="text-xl font-semibold mb-4">Kredit-/Debitkarte</h3>
                        <input type="text" placeholder="Kartennummer" className="w-full mb-3 p-2 rounded bg-gray-700 text-white"/>
                        <input type="text" placeholder="Name auf der Karte" className="w-full mb-3 p-2 rounded bg-gray-700 text-white"/>
                        <div className="flex gap-3">
                            <input type="text" placeholder="MM/YY" className="w-1/2 p-2 rounded bg-gray-700 text-white"/>
                            <input type="text" placeholder="CVV" className="w-1/2 p-2 rounded bg-gray-700 text-white"/>
                        </div>
                        <button className="mt-4 w-full bg-green-500 p-2 rounded font-semibold hover:bg-green-600 transition">Zahlen</button>
                    </div>
                )}

                {selectedMethod === "bank" && (
                    <div className="p-6 bg-gray-800 rounded-2xl shadow mb-4">
                        <h3 className="text-xl font-semibold mb-4">Bankeinzug</h3>
                        <input type="text" placeholder="IBAN" className="w-full mb-3 p-2 rounded bg-gray-700 text-white"/>
                        <input type="text" placeholder="BIC" className="w-full mb-3 p-2 rounded bg-gray-700 text-white"/>
                        <button className="mt-4 w-full bg-green-500 p-2 rounded font-semibold hover:bg-green-600 transition">Zahlen</button>
                    </div>
                )}

                {selectedMethod === "apple" && (
                    <div className="p-6 bg-gray-800 rounded-2xl shadow mb-4">
                        <h3 className="text-xl font-semibold mb-4">Apple Pay</h3>
                        <p className="mb-4">Klicken Sie auf den Button, um mit Apple Pay zu bezahlen.</p>
                        <button className="w-full bg-green-500 p-2 rounded font-semibold hover:bg-green-600 transition">Apple Pay verwenden</button>
                    </div>
                )}
            </div>
        </div>
    );
}
