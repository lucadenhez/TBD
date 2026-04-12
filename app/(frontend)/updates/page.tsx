import { getPayload } from "payload";
import config from '@payload-config'

import PageHeader from "../components/pages/PageHeader";
import SectionHeader from "../components/pages/SectionHeader";
import RichText from "../components/updates/RichText";
import BackButton from "../components/pages/BackButton";


export default async function Updates() {
    const payload = await getPayload({ config })

    const updates = await payload.find({
        collection: 'weekly-updates',
        where: {
            status: { equals: 'published' }
        },
        sort: '-date',
    });

    return (
        <div className="sm:mx-20 mx-7 sm:my-20 my-10 flex flex-col gap-20">
            <PageHeader title="Weekly Updates" />

            {updates.docs.length > 0 ? updates.docs.map((update) =>
                <div key={update.id} className="bg-gradient-to-tl from-[#171717] to-black
                border border-[#232323] p-10 rounded-2xl">
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-3xl text-[#C8FF00]">{update.title}</h2>
                        <p className="font-bold">{new Date(update.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-white max-w-none
                                    prose 
                                    prose-img:mx-auto
                                    prose-img:rounded-2xl
                                    prose-h1:text-[#C8FF00]
                                    prose-h1:uppercase
                                    prose-h2:text-[#C8FF00]
                                    prose-h2:uppercase
                                    prose-h3:text-[#C8FF00]
                                    prose-h3:uppercase
                                    prose-ul:text-white">
                        <RichText content={update.notes} />
                    </div>
                </div>
            ) : <p>No posts at the moment.</p>}

            <BackButton />
        </div>
    );
}
