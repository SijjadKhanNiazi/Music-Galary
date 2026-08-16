"use-client";
import music from "@/data/courses.json";
import { Meteors } from "./ui/meteors";
import { BackgroundGradient } from "./ui/background-gradient";

interface Music {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  year: number;
  image: string;
}

const FeaturedCourses = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-amber-300 px-6 py-20 backdrop-blur-2xl">
      <Meteors number={20} />

      <div className="relative z-10 mx-auto mb-16 max-w-3xl text-center">
        <p className="text-sm font-bold tracking-[0.3em] text-yellow-500">
          FEATURED COURSES
        </p>

        <h2 className="mt-4 text-4xl font-extrabold text-black md:text-5xl">
          Learn with the best
        </h2>

        <p className="mt-4 text-gray-600">
          Explore our hand-picked courses and start learning something new.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {music.map((mus: Music) => (
          <div key={mus.id}>
            {" "}
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={mus.image}
                  alt={mus.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Genre */}
                <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  {mus.genre}
                </span>

                {/* Play Button */}
                <button className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-black shadow-lg transition-transform duration-300 hover:scale-110">
                  ▶
                </button>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900">{mus.title}</h3>

                <p className="mt-1 text-sm text-gray-500">{mus.artist}</p>

                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-500">
                  <span>{mus.year}</span>
                  <span>{mus.duration}</span>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
