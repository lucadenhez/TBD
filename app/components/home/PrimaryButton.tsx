import Link from "next/link";
import { UrlObject } from "url";

interface PrimaryButtonProps {
    text: string;
    target: string | UrlObject;
    color?: string
}

export default function PrimaryButton({ text, target, color = "var(--accent)" }: PrimaryButtonProps) {
    return (
        <Link
            href={target}
            className="relative rounded-2xl w-full h-30 border flex justify-center items-center text-white hover:text-black z-30 transition-all ease-in-out duration-300 border-[#C8FF00] bg-transparent hover:bg-[#C8FF00]"
        >
            <p className="uppercase text-lg font-bold">{text}</p>
            <div className="w-full h-full absolute inset-0 mask-radial-at-top-right mask-ellipse mask-radial-to-80% diagonal" />
        </Link>
    );
}
