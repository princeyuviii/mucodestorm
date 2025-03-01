import { HoverEffect } from "./ui/card-hover-effect";
import { LinkPreview } from "@/components/ui/link-preview";
import { useState } from "react";

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

  // State to store the clicked PDF URL
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Create a modified version of themes without the pdfUrl for HoverEffect
  const themesForDisplay = themes.map((theme, index) => ({
    title: theme.title,
    description: theme.description,
    // Add an onClick handler by using data attributes
    "data-index": index,
  }));
  
  return (
    <section id="themes" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          CodeStorm Themes
        </h2>
        
        {/* Wrapper div that catches clicks and determines which theme was clicked */}
        <div 
          onClick={(e) => {
            const index = e.target.closest('[data-index]')?.getAttribute('data-index');
            if (index !== undefined && index !== null) {
              // Open the PDF in a new tab
              window.open(themes[index].pdfUrl, '_blank');
            }
          }}
          className="cursor-pointer"
        >
          <HoverEffect items={themesForDisplay} />
        </div>
        
      </div>
    </section>
  );
}
