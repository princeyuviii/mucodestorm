import { HoverEffect } from "./ui/card-hover-effect";
import { LinkPreview } from "@/components/ui/link-preview";
import { Download } from "lucide-react";
import { Button } from "./ui/moving-border";
import { motion } from "framer-motion";

export default function Themes() {
  const themes = [
    {
      title: "AI/ML/DL",
      description: "Explore the cutting-edge world of AI, Machine Learning, and Deep Learning to innovate and solve real-world challenges.",
      downloadUrl: "/aiml.pdf",
    },
    {
      title: "Open Innovation",
      description: "Unleash the power of open innovation to transform healthcare, finance, edtech, and more with collaborative, cutting-edge solutions.",
      downloadUrl: "/open.pdf",
    },
    {
      title: "Cyber Security",
      description: "Empower the future of digital safety by innovating and collaborating on cutting-edge cybersecurity solutions to protect against evolving threats.",
      downloadUrl: "/cyber.pdf",
    },
    {
      title: "Blockchain",
      description: "Revolutionize industries with decentralized solutions and transparent technologies through the power of blockchain innovation.",
      downloadUrl: "/bct.pdf",
    },
    {
      title: "Development",
      description: "Build innovative, scalable, and user-centric web and mobile applications that redefine digital experiences.",
      downloadUrl: "/appweb.pdf",
    },
    {
      title: "IoT",
      description: "Connect the world seamlessly with smart, intuitive solutions through the power of the Internet of Things (IoT).",
      downloadUrl: "/iot.pdf",
    },
  ];

  return (
    <section id="themes" className="py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Problem Statements Download Section */}
        <div className="mt-20"></div>
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Download Problem Statements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  background: "linear-gradient(145deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))"
                }}
                viewport={{ once: true }}
                className="rounded-xl p-6 shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-transparent backdrop-blur-sm group relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                {/* Glowing corner effect */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text relative z-10">{theme.title}</h4>
                <p className="text-white mb-5 text-sm relative z-10">{theme.description}</p>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={theme.downloadUrl} 
                  download
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-10"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span id="register" className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-lg font-medium text-white backdrop-blur-3xl group-hover:bg-slate-900 transition-colors">
                    <Download className="mr-2 h-5 w-5 opacity-70 group-hover:opacity-100" /> 
                    Download Problem Statement
                  </span>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  );
}
