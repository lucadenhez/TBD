import Image from "next/image"
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mx-20 mb-20">
            <div className="w-full h-[10rem]" />
            <div className="flex sm:flex-row flex-col gap-y-20 justify-between items-start">
                <Link href="https://www.seattleu.edu/" target="_blank">
                    <Image
                        width={125}
                        height={125}
                        src="/vectors/su_seal_bw.svg"
                        alt="Seattle University Seal"
                    />
                </Link>
                <div className="flex gap-7 flex-col items-center sm:items-end text-lg font-bold ">
                    <p className="uppercase">Keep thinking, keep creating.</p>

                    <div className="flex gap-7 items-center">
                        <Link
                            href="https://github.com/lucadenhez/tbd"
                            target="_blank"
                            className="border-2 border-white/70 p-3 rounded-full"
                        >
                            <Image
                                width={30}
                                height={30}
                                src="/vectors/github.svg"
                                alt="Github Logo"
                            />
                        </Link>
                        <Link href="https://notbyai.fyi/" target="_blank">
                            <Image
                                width={175}
                                height={175}
                                src="/vectors/no_ai.svg"
                                alt="Not made with AI badge"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
