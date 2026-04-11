export function PDS() {
    return (
        <div className="flex flex-col gap-10">
            <section>
                <h3 className="text-[#C8FF00] text-xl font-black uppercase italic mb-5">Attributes & Functions</h3>
                <div className="border border-white/20 rounded-xl overflow-hidden">
                    <div className="grid grid-cols-12 bg-[#C8FF00] text-black font-black uppercase text-xs p-3">
                        <div className="col-span-1">#</div>
                        <div className="col-span-5">Function</div>
                        <div className="col-span-6">Requirement</div>
                    </div>
                    {[
                        { id: 1, function: "Store potential energy", requirement: "Hand crank system" },
                        { id: 2, function: "User accessibility", requirement: "Device is not physically hard to use" },
                        { id: 3, function: "Hold bean bag in place", requirement: "Anchor before launch" },
                        { id: 4, function: "Launch bean bag", requirement: "Release energy " },
                    ].map((row) => (
                        <div key={row.id} className="grid grid-cols-12 border-t border-white/10 p-4 text-sm hover:bg-white/5 transition-colors">
                            <div className="col-span-1 font-mono text-[#C8FF00]">0{row.id}</div>
                            <div className="col-span-5 text-white font-bold uppercase">{row.function}</div>
                            <div className="col-span-6 text-white/60">{row.requirement}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="text-[#C8FF00] text-xl font-black uppercase italic mb-5">Constraints & Limits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        { constraint: "Load Size", limit: "Only able to hold 1 to 3 beanbags at a time" },
                        { constraint: "Prototype Size", limit: `Must fit into 18" x 18" square` },
                        { constraint: "Distance", limit: "10 feet away" },
                        { constraint: "Must be mechanical", limit: "No electronics involved" },
                    ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center p-4 border-l-4 border-[#C8FF00] bg-white/5 rounded-r-xl">
                            <span className="text-xs uppercase font-black text-white/80">{item.constraint}</span>
                            <span className="text-sm font-bold text-[#C8FF00] uppercase tracking-tighter">{item.limit}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="text-[#C8FF00] text-xl font-black uppercase italic mb-5">Objectives</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                        { objective: "Accurate launch", number: "90%", metric: "of the time the bean bags land into the cornhole" },
                        { objective: "Launch bean bag", number: "10 feet", metric: "bean bag flies (or further)" },
                        { objective: "Score the most points", number: "100 ppm", metric: "(points per minute)" },
                    ].map((item, i) => (
                        <div key={i} className="bg-[#C8FF00] p-6 rounded-2xl flex flex-col justify-between h-fit">
                            <p className=" text-md font-black uppercase text-black/50 mb-3">{item.objective}</p>
                            <div className="flex flex-col">
                                <p className="text-5xl pb-5 font-bold text-black">{item.number} </p>
                                <p className="text-sm font-bold text-black uppercase">{item.metric}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
