export default function Payment() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center text-white">
            <h1 className="text-4xl font-bold mb-8">Aktuelles Guthaben</h1>
            <div className="text-6xl font-extrabold text-green-400 mb-12">€ 150,00</div>

            <h2 className="text-2xl font-semibold mb-6">Zahlungsmethode auswählen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-800 rounded-2xl shadow hover:shadow-xl hover:bg-gray-700 cursor-pointer transition">
                    <img
                        src="https://img.icons8.com/ios-filled/100/ffffff/bank-card-back-side.png"
                        alt="Karte"
                        className="mx-auto mb-4"
                    />
                    <p className="text-lg font-medium">Kredit-/Debitkarte</p>
                </div>

                <div className="p-6 bg-gray-800 rounded-2xl shadow hover:shadow-xl hover:bg-gray-700 cursor-pointer transition">
                    <img
                        src="https://img.icons8.com/ios-filled/100/ffffff/bank-building.png"
                        alt="Bankeinzug"
                        className="mx-auto mb-4"
                    />
                    <p className="text-lg font-medium">Bankeinzug</p>
                </div>

                <div className="p-6 bg-gray-800 rounded-2xl shadow hover:shadow-xl hover:bg-gray-700 cursor-pointer transition">
                    <img
                        src="https://img.icons8.com/ios-filled/100/ffffff/mac-os.png"
                        alt="Apple Pay"
                        className="mx-auto mb-4"
                    />
                    <p className="text-lg font-medium">Apple Pay</p>
                </div>
            </div>
        </div>
    );
}
