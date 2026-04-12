import Image from "next/image";
import PageHeader from "../components/pages/PageHeader";

export default function About() {
    const team = [
        {
            name: "Calvin",
            roles: "CAD, Building, Technical Writing",
            headshot: "/headshots/temp.jpg",
            description: "",
            hobbies: []
        },
        {
            name: "Luca",
            roles: "Website, CAD, Technical Writing",
            headshot: "/headshots/luca.jpg",
            description: "Hi! I'm a second year mechanical engineering student and aspiring product designer. I like working on cars, coding, and rock climbing.",
            hobbies: ["BMW Restoration", "Solidworks", "Lead Climbing"]
        },
        {
            name: "Jairo",
            roles: "Website, Documentation, Building",
            headshot: "/headshots/temp.jpg",
            description: "",
            hobbies: []
        },
        {
            name: "Jesse",
            roles: "3D Printing, Technical Writing",
            headshot: "/headshots/temp.jpg",
            description: "",
            hobbies: []
        },
        {
            name: "Kai",
            roles: "Sketching, Building, Documentation",
            headshot: "/headshots/temp.jpg",
            description: "",
            hobbies: []
        },
    ];

    return (
        <div className="sm:mx-20 mx-7 sm:my-20 my-10 flex flex-col gap-12">
            <PageHeader title="Who We Are" />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {team.map((member, index) => (
                    <div
                        key={index}
                        className="group relative rounded-3xl p-8 border border-white/10 hover:border-[#C8FF00]/50 bg-white/5 backdrop-blur-sm transition-all duration-300 flex flex-col sm:flex-row gap-8 items-start sm:items-center"
                    >
                        <div className="relative w-32 h-32 shrink-0">
                            <div className="absolute inset-0 bg-white rounded-full overflow-hidden border-2 border-white">
                                <Image
                                    src={member.headshot}
                                    alt={`Image of ${member.name}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-white font-bold text-4xl uppercase tracking-tighter">
                                    {member.name}
                                </h3>
                                <p className="text-[#C8FF00] font-black text-xs uppercase tracking-widest mb-2">
                                    {member.roles}
                                </p>
                            </div>

                            <p className="text-white leading-relaxed text-sm max-w-md italic ">
                                {member.description !== "" ? `"${member.description}"` : ""}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {member.hobbies.map((hobby) => (
                                    <span
                                        key={hobby}
                                        className="text-[10px] leading-0 font-bold uppercase p-3 rounded-full border border-white/20 text-white group-hover:border-[#C8FF00]/30 group-hover:text-[#C8FF00] transition-colors"
                                    >
                                        {hobby}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
