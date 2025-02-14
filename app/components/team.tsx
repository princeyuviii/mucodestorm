import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

export default function Teams() {
  const teams = [
    { name: "Palak Sharma", logo: "/palak.png" },
    { name: "Yuvraj Singh Rathore", logo: "/yuvi.png" },
    { name: "Mradul Maheshwari", logo: "/mradul.png" },
    { name: "Kavy Porwal", logo: "/kavy.jpeg" },
  ];

  return (
    <section id="teams" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Organizers
        </h2>

        {/* Responsive Grid Layout */}
        <div className="flex flex-wrap justify-center gap-6 sm:grid sm:grid-cols-2 md:grid-cols-4">
          {teams.map((team, index) => (
            <BackgroundGradient
              key={index}
              className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 flex flex-col items-center w-full max-w-[280px]"
            >
              <Image
                src={team.logo || "/placeholder.svg"}
                alt={team.name}
                width={130}
                height={130}
                className="rounded-full mb-4 object-cover"
              />
              <TextGenerateEffect
                words={team.name}
                className="text-center text-lg sm:text-xl font-bold"
              />
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
}
