import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

export default function CB() {
  const teams = [
    { 
      name: "Aditya Joshi", 
      logo: "/aditya.jpg", 
      position: "Technical Committee Core", 
      order: "order-1" 
    },
    { 
      name: "Shashank Gupta", 
      logo: "/gupta.jpg", 
      position: "Sports Committee Core", 
      order: "order-2" 
    },
    { 
      name: "Harshvardhan Singh", 
      logo: "/harsh.jpg", 
      position: "Marketing Committee Core", 
      order: "order-3" 
    },
    { 
      name: "Jigyasa Joshi", 
      logo: "/jigyasa.png", 
      position: "Training & Placement Committee Core", 
      order: "order-4" 
    },
    { 
      name: "Sudip Bhalwankar", 
      logo: "/sudip.png", 
      position: "Cultural Committee Core", 
      order: "order-5" 
    },
  ];

  return (
    <section id="teams" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Chancellor's Brigade Core Members
        </h2>

        {/* Responsive layout */}
        <div className="flex flex-wrap justify-center gap-6 sm:grid sm:grid-cols-2 md:grid-cols-5">
          {teams.map((team, index) => (
            <BackgroundGradient
              key={index}
              className={`rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 flex flex-col items-center w-full max-w-[300px] ${team.order}`}
            >
              <Image
                src={team.logo || "/placeholder.svg"}
                alt={team.name}
                width={120}
                height={120}
                className="rounded-full mb-4 object-cover"
              />
              <TextGenerateEffect
                words={team.name}
                className="text-center text-lg sm:text-xl font-bold"
              />
              <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
                {team.position}
              </p>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
}
