import { CardSpotlight } from "@/app/components/ui/card-spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Prizes() {
  const prizes = [
    { place: "1st Place", amount: "₹25,000", icon: "🥇" },
    { place: "2nd Place", amount: "₹15,000", icon: "🥈" },
    { place: "3rd Place", amount: "₹7,000", icon: "🥉" },
  ];

  return (
    <section id="prizes" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Prizes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <CardSpotlight key={index} className="h-96 w-full flex flex-col items-center justify-center p-6 rounded-2xl">
              <div className="text-6xl mb-4 z-10">{prize.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-white z-10">{prize.place}</h3>
              <h3 className="text-2xl font-bold mb-2 text-white z-10">{prize.amount}</h3>
            </CardSpotlight>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Additional Prize for Best Idea!</h3>
          {/* <span className="text-2xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">₹3000</span> */}
          <span className="text-lg text-gray-300 text-3xl font-bold">₹3000 Prize for Best Idea!
          </span>
        </div>
      </div>
    </section>
  );
}
