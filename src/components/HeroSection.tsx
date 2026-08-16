import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center sm:h-screen   my-auto  overflow-hidden mx-auto py-12 md:py-0 px-4 sm:px-6">
      <Spotlight
        className="-top-40 left-10 md:-top-20 md:left-60 "
        fill="gold"
      />
      <div className="relative z-10 flex flex-col gap-4 sm:gap-6 justify-center items-center text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold select-none leading-tight">
          Master the art of music
        </h1>
        <p className="max-w-2xl text-sm sm:text-base md:text-lg select-none text-neutral-600 dark:text-neutral-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus, magnam! Earum quia, repudiandae, accusamus odio
          architecto nemo, excepturi voluptate tempore sapiente ullam optio
          quaerat minus rem amet obcaecati reprehenderit? Dolorum?
        </p>
        <div>
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-600"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
