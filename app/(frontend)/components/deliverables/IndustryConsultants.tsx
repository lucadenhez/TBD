export default function IndustryConsultants() {
    return (
        <table className="w-full border-collapse text-left text-sm text-white">
            <thead>
                <tr className="border-b border-zinc-700">
                    <th className="px-4 py-3 font-semibold">Date</th>
                    <th className="px-4 py-3 font-semibold">Consultant(s)</th>
                    <th className="px-4 py-3 font-semibold">What We Talked About</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-zinc-800 align-top">
                    <td className="px-4 py-4 whitespace-nowrap">
                        April 17, 2026
                    </td>
                    <td className="px-4 py-4">
                        Steve Brooks<br />
                        Brian Nasralla
                    </td>
                    <td className="px-4 py-4">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Steve urged the importance of understanding how to communicate effectively with one another.</li>
                            <li>Steve also said that opportunities beyond internships are critical for a Mechanical Engineer, including clubs, volunteering, and personal projects.</li>
                            <li>Brian told us that repeatability in design is important.</li>
                            <li>Vibrations and movements in the chassis are important to minimize.</li>
                            <li>Considering the surface where our design will be tested should be factored into our design.</li>
                            <li>The chassis should remain stable for predictable and consistent launches.</li>
                        </ul>
                    </td>
                </tr>

                <tr className="border-b border-zinc-800 align-top">
                    <td className="px-4 py-4 whitespace-nowrap">
                        April 24, 2026
                    </td>
                    <td className="px-4 py-4">
                        Chiyo Miyaki<br />
                        Benjamin Gove
                    </td>
                    <td className="px-4 py-4">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Tolerance for chamber and piston.</li>
                            <li>Ways to minimize friction between the two pieces.</li>
                            <li>How to ensure a consistent, guided path while minimizing friction.</li>
                            <li>Discussed minimizing unnecessary shear forces and moments in our design.</li>
                            <li>Showed them the broken piston piece.</li>
                            <li>How to add more force to achieve launch distance without compromising our structure.</li>
                        </ul>
                    </td>
                </tr>

                <tr className="align-top">
                    <td className="px-4 py-4 whitespace-nowrap">
                        May 8, 2026
                    </td>
                    <td className="px-4 py-4">
                        Sarah Brown
                    </td>
                    <td className="px-4 py-4">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Force-body diagrams: how can we mitigate the horizontal force from the piston launch?</li>
                            <li>Add friction/rigidity to the base.</li>
                            <li>Discussed weight distribution.</li>
                            <li>Discussed varying stroke length and whether we can generate enough force.</li>
                            <li>Looked into ways we could reduce print/manufacturing times.</li>
                            <li>Good ideas, but we must make sure we have time to test them and ensure they work.</li>
                            <li>Is our design potentially too overengineered?</li>
                            <li>Looked into ways we could simplify our design.</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
