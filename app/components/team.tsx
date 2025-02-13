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
    <section id="teams" className="py-20">
      <div className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Organizers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teams.map((team, index) => (
            <BackgroundGradient
              key={index}
              className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900"
            >
              <Image
                src={team.logo || "/placeholder.svg"}
                alt={team.name} 
                width={150}
                height={150}
                className="mx-auto mb-4"
              />
              <TextGenerateEffect
                words={team.name}
                className="text-center text-lg font-bold"
              />
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
}