import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

export default function CB() {
  const teams = [
    { name: "Sudip Bhalwankar", logo: "/sudip.png", order: "order-5" },
    { name: "Harshvardhan Singh", logo: "/harsh.jpg", order: "order-3" },
    { name: "Aditya Joshi", logo: "/aditya.jpg", order: "order-1" }, // First on mobile
    { name: "Jigyasa Joshi", logo: "/jigyasa.png", order: "order-4" },
    { name: "Shashank Gupta", logo: "/gupta.jpg", order: "order-2" }, // Second on mobile
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
              className={`rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 ${team.order}`}
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
