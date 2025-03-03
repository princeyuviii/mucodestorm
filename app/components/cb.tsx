import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

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
    <section id="teams" className="py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-extrabold text-center mb-8 md:mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
        >
          Chancellor's Brigade Core Members
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {teams.map((team, index) => (
            <TeamCard 
              key={index}
              team={team}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ team, index }: { 
  team: { 
    name: string, 
    logo: string, 
    position: string, 
    order: string 
  }, 
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`flex justify-center ${team.order}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] h-[280px] sm:h-[300px] md:h-[320px] rounded-xl overflow-hidden group">
        {/* Clean border with subtle animation */}
        <motion.div 
          className="absolute inset-0 rounded-xl bg-gray-900"
          animate={{
            boxShadow: isHovered 
              ? "0 0 20px rgba(79, 70, 229, 0.4)" 
              : "0 0 10px rgba(30, 30, 30, 0.4)",
          }}
          style={{
            border: isHovered ? "1px solid rgba(99, 102, 241, 0.4)" : "1px solid rgba(75, 85, 99, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div 
          className="relative w-full h-full rounded-xl z-10 overflow-hidden flex flex-col items-center justify-center shadow-[10px_10px_30px_#1a1a1a,_-10px_-10px_30px_#2c2c2c] sm:shadow-[20px_20px_60px_#1a1a1a,_-20px_-20px_60px_#2c2c2c]"
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-[5px] left-[5px] w-[calc(100%-10px)] h-[calc(100%-10px)] z-[2] bg-[rgba(15,15,15,0.95)] backdrop-blur-md rounded-xl overflow-hidden flex flex-col items-center justify-center p-3 sm:p-4 transition-all duration-300 text-center">
            <motion.div 
              className="relative z-10 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] mb-3 sm:mb-4 overflow-hidden rounded-full border-2 border-gray-800 group-hover:border-indigo-500 transition-all duration-300 mt-2"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={team.logo || "/placeholder.svg"}
                alt={team.name}
                width={130}
                height={130}
                className="rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
            
            {/* Clean name styling */}
            <div className="space-y-1 text-center w-full">
              <motion.h4 
                className="text-lg sm:text-xl font-bold relative z-10 text-white"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {team.name}
              </motion.h4>
              
              <motion.div 
                className="h-[2px] w-16 mx-auto bg-indigo-600 rounded-full my-2"
                initial={{ width: "30%" }}
                animate={{ width: isHovered ? "60%" : "30%" }}
                transition={{ duration: 0.5 }}
              />
              
              <motion.p 
                className="text-gray-300 text-xs sm:text-sm font-medium relative z-10 px-1"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {team.position}
              </motion.p>
            </div>
            
            {/* Subtle accent lighting on edges only */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-xl"
                style={{
                  boxShadow: "inset 0 0 10px rgba(79, 70, 229, 0.4)",
                }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
