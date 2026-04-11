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
            className="w-full h-30 border-3 flex justify-center items-center text-white hover:text-black z-30 transition-all ease-in-out duration-300 border-[#C8FF00] bg-black hover:bg-[#C8FF00]"
        >
            <p className="uppercase text-lg font-bold">{text}</p>
        </Link>
    );
}
