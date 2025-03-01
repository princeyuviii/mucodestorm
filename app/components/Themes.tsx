import { HoverEffect } from "./ui/card-hover-effect";
import { LinkPreview } from "@/components/ui/link-preview";

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

  // Just use the title and description
  const themeDisplay = themes.map(({ title, description }) => ({
    title,
    description,
  }));

  // Handle the download functionality
  const handleDownload = (index) => {
    const link = document.createElement('a');
    link.href = themes[index].pdfUrl;
    link.download = themes[index].title + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="themes" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          CodeStorm Themes
        </h2>
        
        <div 
          className="cursor-pointer" 
          onClick={(e) => {
            // Find the closest theme card
            const themeCard = e.target.closest('.grid > div');
            if (!themeCard) return;
            
            // Get the index of the clicked card
            const cards = Array.from(document.querySelectorAll('.grid > div'));
            const index = cards.indexOf(themeCard);
            
            if (index !== -1) {
              handleDownload(index);
            }
          }}
        >
          <HoverEffect items={themeDisplay} />
        </div>
      </div>
    </section>
  );
}
