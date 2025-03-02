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

  const blobColors = [
    "#4f46e5", // indigo
    "#8b5cf6", // violet
    "#3b82f6", // blue
    "#06b6d4", // cyan
    "#8b5cf6", // violet (repeated for 5th member)
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
              blobColor={blobColors[index % blobColors.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ team, index, blobColor }: { 
  team: { 
    name: string, 
    logo: string, 
    position: string, 
    order: string 
  }, 
  index: number, 
  blobColor: string 
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
      <div className="relative w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] h-[280px] sm:h-[300px] md:h-[320px] rounded-[14px] overflow-hidden group">
        {/* Animated border */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-[14px]"
          animate={{
            boxShadow: isHovered 
              ? "0 0 25px rgba(139, 92, 246, 0.9)" 
              : "0 0 15px rgba(79, 70, 229, 0.5)",
            backgroundPosition: isHovered ? "100% 50%" : "0% 50%",
            opacity: isHovered ? 1 : 0.7,
          }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          style={{ backgroundSize: "200% 200%" }}
        />
        
        <motion.div 
          className="relative w-full h-full rounded-[14px] z-10 overflow-hidden flex flex-col items-center justify-center shadow-[10px_10px_30px_#1a1a1a,_-10px_-10px_30px_#2c2c2c] sm:shadow-[20px_20px_60px_#1a1a1a,_-20px_-20px_60px_#2c2c2c]"
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="absolute z-[1] top-[50%] left-[50%] rounded-[50%] opacity-100 blur-[8px] sm:blur-[12px]" 
            style={{ backgroundColor: blobColor }}
            animate={{
              x: ["-100%", "0%", "0%", "-100%", "-100%"],
              y: ["-100%", "-100%", "0%", "0%", "-100%"],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "linear"
            }}
            initial={{ width: 150, height: 150 }}
            whileHover={{ width: 200, height: 200, filter: "blur(12px) sm:blur(18px)" }}
          />
          
          <div className="absolute top-[5px] left-[5px] w-[calc(100%-10px)] h-[calc(100%-10px)] z-[2] bg-[rgba(20,20,20,0.95)] backdrop-blur-[16px] sm:backdrop-blur-[24px] rounded-[10px] overflow-hidden outline-[2px] outline outline-gray-800 group-hover:outline-blue-500 flex flex-col items-center justify-center p-3 sm:p-4 transition-all duration-300 text-center">
            <motion.div 
              className="relative z-10 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] mb-3 sm:mb-4 overflow-hidden rounded-full border-2 border-gray-700 group-hover:border-blue-500 transition-all duration-300 mt-2"
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
            
            <motion.h4 
              className="text-lg sm:text-xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text relative z-10 text-center w-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {team.name}
            </motion.h4>
            
            <motion.p 
              className="text-white text-xs sm:text-sm opacity-80 group-hover:opacity-100 transition-all duration-300 relative z-10 mb-2 text-center w-full"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {team.position}
            </motion.p>
            
            <motion.div 
              className="h-[2px] bg-gradient-to-r from-blue-400 to-purple-600 mt-2 rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "80%" }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
