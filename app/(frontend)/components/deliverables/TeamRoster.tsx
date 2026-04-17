export default function TeamRoster() {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">

                <div className="bg-[#C8FF00] p-6 rounded-2xl flex flex-col gap-2">
                    <h4 className="text-sm uppercase tracking-tighter font-black text-black/60">3D Printing / Laser Cutting</h4>
                    <p className="text-xl font-bold text-black uppercase">Jesse</p>
                </div>

                <div className="bg-[#C8FF00] p-6 rounded-2xl flex flex-col gap-2">
                    <h4 className="text-sm uppercase tracking-tighter font-black text-black/60">Website</h4>
                    <p className="text-xl font-bold text-black uppercase">Luca, Jairo</p>
                </div>

                <div className="bg-[#C8FF00] p-6 rounded-2xl flex flex-col gap-2">
                    <h4 className="text-sm uppercase tracking-tighter font-black text-black/60">Documentation</h4>
                    <p className="text-xl font-bold text-black uppercase">Jairo, Kai</p>
                </div>

                <div className="bg-[#C8FF00] p-6 rounded-2xl flex flex-col gap-2">
                    <h4 className="text-sm uppercase tracking-tighter font-black text-black/60">CAD</h4>
                    <p className="text-xl font-bold text-black uppercase">Luca, Calvin</p>
                </div>

                <div className="bg-[#C8FF00] p-6 rounded-2xl flex flex-col gap-2">
                    <h4 className="text-sm uppercase tracking-tighter font-black text-black/60">Technical Writing</h4>
                    <p className="text-xl font-bold text-black uppercase">Calvin, Jesse, Luca</p>
                </div>

                <div className="bg-[#C8FF00] p-6 rounded-2xl flex flex-col gap-2">
                    <h4 className="text-sm uppercase tracking-tighter font-black text-black/60">Building</h4>
                    <p className="text-xl font-bold text-black uppercase">Jairo, Calvin, Kai</p>
                </div>

                <div className="bg-[#C8FF00] p-6 rounded-2xl flex flex-col gap-2">
                    <h4 className="text-sm uppercase tracking-tighter font-black text-black/60">Sketching</h4>
                    <p className="text-xl font-bold text-black uppercase">Kai</p>
                </div>

            </div>
        </div>
    );
}
