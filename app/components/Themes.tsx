import { HoverEffect } from "./ui/card-hover-effect";
import { LinkPreview } from "@/components/ui/link-preview";
import { useEffect, useRef } from "react";

export default function Themes() {
  const themes = [
    {
      title: "AI/ML/DL",
      description: "Explore the cutting-edge world of AI, Machine Learning, and Deep Learning to innovate and solve real-world challenges.",
      pdfUrl: "/pdfs/ai-ml-dl.pdf" 
    },
    {
      title: "Open Innovation",
      description: "Unleash the power of open innovation to transform healthcare, finance, edtech, and more with collaborative, cutting-edge solutions.",
      pdfUrl: "/pdfs/open-innovation.pdf"
    },
    {
      title: "Cyber Security",
      description: "Empower the future of digital safety by innovating and collaborating on cutting-edge cybersecurity solutions to protect against evolving threats.",
      pdfUrl: "/pdfs/cyber-security.pdf"
    },
    {
      title: "Blockchain",
      description: "Revolutionize industries with decentralized solutions and transparent technologies through the power of blockchain innovation.",
      pdfUrl: "/pdfs/blockchain.pdf"
    },
    {
      title: "Development",
      description: "Build innovative, scalable, and user-centric web and mobile applications that redefine digital experiences.",
      pdfUrl: "/pdfs/development.pdf"
    },
    {
      title: "IoT",
      description: "Connect the world seamlessly with smart, intuitive solutions through the power of the Internet of Things (IoT).",
      pdfUrl: "/pdfs/iot.pdf"
    },
  ];

  // Create a ref for invisible download links
  const downloadRefs = useRef([]);

  // Initialize refs array based on themes length
  useEffect(() => {
    downloadRefs.current = downloadRefs.current.slice(0, themes.length);
  }, [themes.length]);

  // Create a copy of themes with a click handler
  const themesWithHandlers = themes.map((theme, index) => ({
    title: theme.title,
    description: theme.description,
    onClick: () => {
      // Trigger the hidden download link
      if (downloadRefs.current[index]) {
        downloadRefs.current[index].click();
      }
    }
  }));
  
  return (
    <section id="themes" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          CodeStorm Themes
        </h2>
        
        {/* Hidden download links */}
        <div className="hidden">
          {themes.map((theme, index) => (
            <a 
              key={index}
              ref={el => downloadRefs.current[index] = el}
              href={theme.pdfUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              {theme.title}
            </a>
          ))}
        </div>
        
        {/* Use HoverEffect with click handlers */}
        <div className="cursor-pointer">
          <HoverEffect items={themesWithHandlers} />
        </div>
      </div>
    </section>
  );
}
