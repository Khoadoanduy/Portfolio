"use client";

import Image from "next/image";

function Hero() {
  return (
    <header className="bg-[#f8f8f3] p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <h1 className="text-blue-gray-900 mb-4 lg:text-5xl text-3xl leading-tight">
            Welcome to my Portfolio!
          </h1>
          <p className="text-gray-500 mb-4 md:pr-16 xl:pr-28">
            I&apos;m Kevin Doan, a passionate developer based in USA.
            Here, you&apos;ll get a glimpse of my journey in the world of
            development, where creativity meets functionality.
          </p>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/image-7.svg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
