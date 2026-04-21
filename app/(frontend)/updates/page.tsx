import { getPayload } from "payload";
import config from '@payload-config'

import PageHeader from "../components/pages/PageHeader";
import RichText from "../components/updates/RichText";
import BackButton from "../components/pages/BackButton";

export const dynamic = 'force-dynamic'; // check database for new weekly updates on page reload

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
        <div className="sm:mx-20 mx-7 sm:my-20 my-10 flex flex-col gap-12">
            <PageHeader title="Project Updates" />

            <div className="relative flex flex-col gap-16 ml-2 sm:ml-4 pl-8">
                <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-[#C8FF00] via-white/20 to-transparent" />

                {updates.docs.length > 0 ? updates.docs.map((update) => (
                    <div key={update.id} className="relative flex flex-col gap-4 group">
                        <div className="flex items-center gap-4 -ml-[40px]">
                            <div className="z-10 w-4 h-4 rounded-full bg-black border-2 border-[#C8FF00] shrink-0" />
                            <span className="ml-2 text-sm text-[#C8FF00] uppercase font-bold whitespace-nowrap">
                                {new Date(update.date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-bold text-4xl text-white tracking-tighter uppercase leading-none">
                                {update.title}
                            </h2>
                            <div className="text-white/70 max-w-2xl
                                            prose prose-invert
                                            prose-img:rounded-2xl prose-img:border prose-img:border-white/5
                                            prose-p:text-white
                                            text-white
                                            prose-headings:text-white prose-headings:text-xl
                                            prose-a:text-[#C8FF00] 
                                            prose-strong:text-white
                                            prose-ul:leading-tight prose-ul:text-white/90 prose-li:marker:text-[#C8FF00]">
                                <RichText content={update.notes} />
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="p-8 border border-white/5 rounded-2xl">
                        <p className="text-white/20 text-sm">No logs yet.</p>
                    </div>
                )}
            </div>
            <BackButton />
        </div>
    );
}
