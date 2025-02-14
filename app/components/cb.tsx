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
    <section id="teams" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Chancellor's Brigade Core Members
        </h2>
        <div className="flex flex-wrap justify-center sm:grid sm:grid-cols-2 md:grid-cols-5 gap-4">
          {teams.map((team, index) => (
            <BackgroundGradient
              key={index}
              className={`rounded-[22px] p-6 sm:p-10 bg-white dark:bg-zinc-900 ${team.order} w-full h-full min-h-[320px] flex flex-col items-center justify-center`}
            >
              <div className="w-32 h-32 relative mb-4">
                <Image
                  src={team.logo || "/placeholder.svg"}
                  alt={team.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <TextGenerateEffect
                words={team.name}
                className="text-center text-lg font-bold"
              />
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                {team.position}
              </p>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
}
