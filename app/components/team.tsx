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
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ team, index }: { team: { name: string, logo: string, role: string }, index: number }) {
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
      <div className="relative w-[250px] h-[320px] rounded-xl overflow-hidden group">
        {/* Clean border with subtle animation - same as CB component */}
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
          className="relative w-full h-full rounded-xl z-10 overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#1a1a1a,_-20px_-20px_60px_#2c2c2c]"
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-[5px] left-[5px] w-[calc(100%-10px)] h-[calc(100%-10px)] z-[2] bg-[rgba(15,15,15,0.95)] backdrop-blur-md rounded-xl overflow-hidden flex flex-col items-center justify-center p-4 transition-all duration-300">
            <motion.div 
              className="relative z-10 w-[130px] h-[130px] mb-4 overflow-hidden rounded-full border-2 border-gray-800 group-hover:border-indigo-500 transition-all duration-300 mt-2"
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
            <div className="space-y-1 text-center">
              <motion.h4 
                className="text-xl font-bold relative z-10 text-white"
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
                className="text-gray-300 text-sm font-medium relative z-10"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {team.role}
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
