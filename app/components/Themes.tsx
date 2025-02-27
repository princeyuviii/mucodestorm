import { HoverEffect } from "./ui/card-hover-effect";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Themes() {
  const themes = [
    {
      title: "AI/ML/DL",
      description: "Explore the cutting-edge world of AI, Machine Learning, and Deep Learning to innovate and solve real-world challenges.",
      pdfUrl: "/aiml.pdf", // Add the path to the PDF for this theme
    },
    {
      title: "Open Innovation",
      description: "Unleash the power of open innovation to transform healthcare, finance, edtech, and more with collaborative, cutting-edge solutions.",
      pdfUrl: "/path/to/open-innovation.pdf", // Add the path to the PDF for this theme
    },
    {
      title: "Cyber Security",
      description: "Empower the future of digital safety by innovating and collaborating on cutting-edge cybersecurity solutions to protect against evolving threats.",
      pdfUrl: "/path/to/cyber-security.pdf", // Add the path to the PDF for this theme
    },
    {
      title: "Blockchain",
      description: "Revolutionize industries with decentralized solutions and transparent technologies through the power of blockchain innovation.",
      pdfUrl: "/path/to/blockchain.pdf", // Add the path to the PDF for this theme
    },
    {
      title: "Development",
      description: "Build innovative, scalable, and user-centric web and mobile applications that redefine digital experiences.",
      pdfUrl: "/path/to/development.pdf", // Add the path to the PDF for this theme
    },
    {
      title: "IoT",
      description: "Connect the world seamlessly with smart, intuitive solutions through the power of the Internet of Things (IoT).",
      pdfUrl: "/path/to/iot.pdf", // Add the path to the PDF for this theme
    },
  ];

  // Function to handle downloading the PDF on theme click
  const handleDownloadPdf = (pdfUrl: string) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop() || 'file.pdf'; // Default filename if the URL doesn't have one
    link.click();
  };

  return (
    <section id="themes" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          CodeStorm Themes
        </h2>
        <HoverEffect 
          items={themes} 
          onClick={(theme) => handleDownloadPdf(theme.pdfUrl)} // Call handleDownloadPdf when a theme is clicked
        />
      </div>
    </section>
  );
}
