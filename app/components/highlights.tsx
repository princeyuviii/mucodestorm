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
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="flex justify-center"
    >
      <div className="relative w-full h-[320px] rounded-xl overflow-hidden">
        {/* Simplified border with minimal style */}
        <div className="absolute inset-0 rounded-xl bg-gray-900 border border-gray-800" />

        <div className="relative w-full h-full rounded-xl z-10 overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full z-[2] bg-[rgba(15,15,15,0.95)] backdrop-blur-sm rounded-xl overflow-hidden flex flex-col items-center justify-center p-4">
            {/* YouTube Embed with smaller bezel */}
            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden border border-gray-800">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${highlight.videoId}`}
                title={highlight.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </div>

            {/* Title and description styling */}
            <div className="space-y-1 text-center">
              <h4 className="text-xl font-bold relative z-10 text-white">
                {highlight.title}
              </h4>

              <div className="h-[2px] w-16 mx-auto bg-indigo-600 rounded-full my-2" />

              <p className="text-gray-300 text-sm font-medium relative z-10">
                {highlight.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
