import Image from "next/image";
import Link from "next/link";

interface PageHeaderProps {
    title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
    return (
        <div className="flex flex-col gap-2">
            <Link href="/">
                <div className="flex gap-3 items-center">
                    <Image
                        width={10}
                        height={10}
                        src="/vectors/arrow_white.svg"
                        alt="Back Arrow"
                        className="rotate-[-135deg]"
                    />
                    <p className="font-bold uppercase">Go Back</p>
                </div>
            </Link>
            <h1 className="font-bold uppercase text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-[var(--accent)]">{title}</h1>
        </div>
    );
}
