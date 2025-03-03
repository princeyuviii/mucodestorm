import { motion } from "framer-motion";
import { useState } from "react";

export default function SpandanHighlights() {
  const highlights = [
    { 
      title: "Spandan 2024 Celebrity Night", 
      videoId: "czVEFWCmMIg?si=VjjTV1YBk8kQ4aZL", 
      description: "Highlights from Celebrity Night 2K24."
    },
    { 
      title: "Spandan 2023 Celebrity Night", 
      videoId: "QdGTbs6F2rs?si=PN_Ev94x8VD-ar_-", 
      description: "Highlights from Celebrity Night 2K23."
    },
    { 
      title: "Spandan 2023 Launch", 
      videoId: "vGA3ZFNp4sk?si=6e4H05n13UnQoCGP", 
      description: "Spandan 2K23 Inauguration Day."
    }
  ];

  return (
    <section id="highlights" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
        >
          Previous Spandan Highlights
        </motion.h2>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <HighlightCard 
              key={index}
              highlight={highlight}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ highlight, index }: { highlight: { title: string, videoId: string, description: string }, index: number }) {
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
      <div className="relative w-full h-[320px] rounded-xl overflow-hidden group">
        {/* Clean border with subtle animation - same as Team component */}
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
            {/* YouTube Embed */}
            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden border-2 border-gray-800 group-hover:border-indigo-500 transition-all duration-300">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${highlight.videoId}`}
                title={highlight.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover pointer-events-auto" // Ensure iframe can receive pointer events
              ></iframe>
            </div>

            {/* Title and description styling */}
            <div className="space-y-1 text-center">
              <motion.h4 
                className="text-xl font-bold relative z-10 text-white"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {highlight.title}
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
                {highlight.description}
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
