import { getPayload } from "payload";
import config from '@payload-config'

import PageHeader from "../components/pages/PageHeader";
import SectionHeader from "../components/pages/SectionHeader";
import RichText from "../components/updates/RichText";
import BackButton from "../components/pages/BackButton";


export default async function Updates() {
    const payload = await getPayload({ config })

    const updates = await payload.find({
        collection: 'team-minutes',
        where: {
            status: { equals: 'published' }
        },
        sort: '-date', // Show newest first
    });

    return (
        <div className="sm:m-20 m-7 flex flex-col gap-20">
            <PageHeader title="Project Updates" />
            <div>
                <SectionHeader title="Team Minutes" />

                {updates.docs.map((update) => (
                    <div key={update.id} className="bg-[#0f0f0f]
                    border border-[#232323] p-10 rounded-2xl">
                        <h2 className="font-bold text-4xl pb-1 text-[#C8FF00]">{update.title}</h2>
                        <p className="font-bold">{new Date(update.date).toLocaleDateString()}</p>
                        <div className="prose text-white max-w-none 
                                        prose-img:mx-auto
                                        prose-img:max-w-3/4
                                        prose-img:rotate-[-5deg]
                                        prose-img:rounded-2xl
                                      prose-h3:text-[#C8FF00]
                                        prose-h3:uppercase
                                      prose-ul:text-white">
                            <RichText content={update.notes} />
                        </div>
                    </div>
                ))}
            </div>

            <BackButton />
        </div>
    );
}
