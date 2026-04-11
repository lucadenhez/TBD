import Image from "next/image";
import Footer from "./components/home/Footer";
import Link from "next/link";
import PrimaryButton from "./components/home/PrimaryButton";

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <div className="absolute h-full w-full z-20 inset-0 mask-radial-at-top-right mask-circle mask-radial-to-[60%] topographic" />
      <div className="relative w-full overflow-hidden flex items-center justify-center max-h-[calc(100vh-400px)]">
        <div className="bg-linear-to-b from-transparent to-[#0a0a0a] via-black/65 absolute w-full bottom-0 h-full z-10" />
        <Image
          src="/photos/group_pictures/day_1.jpeg"
          alt="Group photo"
          width={1920}
          height={1080}
          className="w-full h-auto block"
          priority
        />
      </div>

      <div className="m-10 flex flex-col gap-3">
        <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase leading-tight">We are team [TBD].</h1>
        <h3 className="text-md sm:text-md md:text-md lg:text-lg xl:text-lg uppercase leading-tight">Yes, that is our name.</h3>
        <h3 className="lg:pt-0 pt-10 text-right text-md sm:text-md md:text-md lg:text-lg xl:text-lg uppercase leading-tight">Team 203 · Integrated Design Project · Spring `26 · Jairo, Luca, Calvin, Jesse, and Kai</h3>
      </div>

      <div className="mx-10 my-30 flex sm:flex-row flex-col gap-x-10 gap-y-5 sm:items-start items-center">
        <PrimaryButton
          text="Project Updates"
          target="/updates"
          color="#C8FF00"
        />
        <PrimaryButton
          text="Who We Are"
          target="/about-us"
          color="#C8FF00"
        />
        <PrimaryButton
          text="Deliverables"
          target="/deliverables"
          color="#C8FF00"
        />
      </div>
    </main>
  );
}
