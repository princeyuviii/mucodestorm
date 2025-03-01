import { HoverEffect } from "./ui/card-hover-effect";
import { LinkPreview } from "@/components/ui/link-preview";
import { Download } from "lucide-react";
import { Button } from "./ui/moving-border";

export default function Themes() {
  const themes = [
    {
      title: "AI/ML/DL",
      description: "Explore the cutting-edge world of AI, Machine Learning, and Deep Learning to innovate and solve real-world challenges.",
      downloadUrl: "/problem-statements/ai-ml-dl.pdf",
    },
    {
      title: "Open Innovation",
      description: "Unleash the power of open innovation to transform healthcare, finance, edtech, and more with collaborative, cutting-edge solutions.",
      downloadUrl: "/problem-statements/open-innovation.pdf",
    },
    {
      title: "Cyber Security",
      description: "Empower the future of digital safety by innovating and collaborating on cutting-edge cybersecurity solutions to protect against evolving threats.",
      downloadUrl: "/problem-statements/cyber-security.pdf",
    },
    {
      title: "Blockchain",
      description: "Revolutionize industries with decentralized solutions and transparent technologies through the power of blockchain innovation.",
      downloadUrl: "/problem-statements/blockchain.pdf",
    },
    {
      title: "Development",
      description: "Build innovative, scalable, and user-centric web and mobile applications that redefine digital experiences.",
      downloadUrl: "/problem-statements/development.pdf",
    },
    {
      title: "IoT",
      description: "Connect the world seamlessly with smart, intuitive solutions through the power of the Internet of Things (IoT).",
      downloadUrl: "/problem-statements/iot.pdf",
    },
  ];

  return (
    <section id="themes" className="py-20">
      <div className="container mx-auto px-4 text-center">
{/*         <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          CodeStorm Themes
        </h2>
        <HoverEffect items={themes} /> */}
        
        {/* Problem Statements Download Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Download Problem Statements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <div 
                key={index} 
                className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-transparent backdrop-blur-sm"
              >
                <h4 className="text-xl font-bold mb-3">{theme.title}</h4>
                <p className="text-white mb-5 text-sm">{theme.description}</p>
                <a href={theme.downloadUrl} download>
                  <Button
                    borderRadius="1.75rem"
                    className="bg-slate-950 text-white border-neutral-200 dark:border-slate-800"
                  >
                    <div className="flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download Problem Statement
                    </div>
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
