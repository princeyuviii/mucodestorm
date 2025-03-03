import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Teams() {
  const teams = [
    { name: "Palak Sharma", logo: "/palak.png", role: "Organizer" },
    { name: "Yuvraj Singh Rathore", logo: "/yuvi.png", role: "Organizer" },
    { name: "Mradul Maheshwari", logo: "/mradul.png", role: "Organizer" },
    { name: "Kavy Porwal", logo: "/k.jpeg", role: "Organizer" },
  ];

  const blobColors = [
    "#FFFFFF"
  ];

  return (
    <section id="teams" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
        >
          Organizers
        </motion.h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

function TeamCard({ team, index, blobColor }: { team: { name: string, logo: string, role: string }, index: number, blobColor: string }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="flex justify-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative w-[250px] h-[320px] rounded-[14px] overflow-hidden group">
        {/* Animated border */}
        <motion.div 
          className="absolute inset-0 bg-white rounded-[14px]"
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
          className="relative w-[250px] h-[320px] rounded-[14px] z-10 overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#1a1a1a,_-20px_-20px_60px_#2c2c2c]"
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="absolute z-[1] top-[50%] left-[50%] rounded-[50%] opacity-100 blur-[12px]" 
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
            initial={{ width: 200, height: 200 }}
            whileHover={{ width: 250, height: 250, filter: "blur(18px)" }}
          />
          
          <div className="absolute top-[5px] left-[5px] w-[calc(100%-10px)] h-[calc(100%-10px)] z-[2] bg-[rgba(20,20,20,0.95)] backdrop-blur-[24px] rounded-[10px] overflow-hidden outline-[2px] outline outline-gray-800 group-hover:outline-blue-500 flex flex-col items-center justify-center p-4 transition-all duration-300">
            <motion.div 
              className="relative z-10 w-[130px] h-[130px] mb-4 overflow-hidden rounded-full border-2 border-gray-700 group-hover:border-blue-500 transition-all duration-300 mt-2"
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
              className="text-xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text relative z-10"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {team.name}
            </motion.h4>
            
            <motion.p 
              className="text-white text-sm opacity-80 group-hover:opacity-100 transition-all duration-300 relative z-10 mb-2"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {team.role}
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
