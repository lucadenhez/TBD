export default function TeamContact() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-3">
            <div className="border border-[#C8FF00] p-6 rounded-2xl flex flex-col gap-4">
                <h4 className="text-[#C8FF00] text-sm uppercase tracking-widest font-black">Communication Plan</h4>
                <div className="flex flex-wrap gap-2">
                    {["Group Chat", "Microsoft Teams", "Email"].map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-[#C8FF00] text-black text-md font-bold rounded-full uppercase">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>

            <div className="border border-[#C8FF00] p-6 rounded-2xl flex flex-col gap-4">
                <h4 className="text-[#C8FF00] text-sm uppercase tracking-widest font-black">Meeting Schedule</h4>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between border-b border-[#C8FF00]/30 pb-1">
                        <span className="text-white/60 uppercase text-xs">Thursday</span>
                        <span className="text-white">16:30 — 17:00</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-white/60 uppercase text-xs">Friday</span>
                        <span className="text-white">14:05 — 15:30</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
