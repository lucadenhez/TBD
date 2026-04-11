export default function TeamOperations() {
    const norms = [
        "Clear Communication", "Honesty", "Punctuality",
        "Finish your task", "Pulling your weight", "Open mind",
        "Don’t be rude", "Uphold respect"
    ];

    return (
        <div className="mt-3 flex flex-col gap-10">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-[#C8FF00] text-sm uppercase tracking-widest font-black mb-6">Team Norms</h4>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {norms.map((norm, i) => (
                        <div key={norm} className="flex items-center gap-3">
                            <span className="text-[#C8FF00] font-mono text-xs">0{i + 1}</span>
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
                            <p className="text-xl font-black uppercase leading-none">Published to website via RSS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
