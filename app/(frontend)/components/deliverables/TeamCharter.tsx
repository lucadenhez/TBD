export default function TeamCharter() {
    return (
        <div className="mt-3 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
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

                <div className="border border-[#C8FF00] p-6 rounded-2xl flex flex-col gap-3">
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
            <div className="flex flex-col gap-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h4 className="text-[#C8FF00] text-sm uppercase tracking-widest font-black mb-6">Team Norms</h4>
                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                        {[
                            "Clear Communication", "Honesty", "Punctuality",
                            "Finish your task", "Pulling your weight", "Open mind",
                            "Don’t be rude", "Uphold respect"
                        ].map((norm, i) => (
                            <div key={norm} className="flex items-center gap-3">
                                <span className="text-[#C8FF00] text-xs">0{i + 1}</span>
                                <span className="text-white uppercase font-medium tracking-tight">{norm}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#C8FF00] p-6 rounded-2xl text-black">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div>
                            <h4 className="text-xs uppercase font-black opacity-60 leading-none mb-2">Document Coordination</h4>
                            <p className="text-xl font-black uppercase leading-none">Shared via Microsoft Teams</p>
                        </div>
                        <div className="h-px md:h-12 md:w-px bg-black/20" />
                        <div className="flex items-center gap-4">
                            <div>
                                <h4 className="text-xs uppercase font-black opacity-60 leading-none mb-2">Primary Output</h4>
                                <p className="text-xl font-black uppercase leading-none">Published to website</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
