import Image from "next/image";
import Link from "next/link";

export default function BackButton() {
    return (
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
    );
}
