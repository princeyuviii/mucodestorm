import { HoverEffect } from "./ui/card-hover-effect";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Themes() {
  const themes = [
    {
      title: "AI/ML/DL",
      description: "Explore the cutting-edge world of AI, Machine Learning, and Deep Learning to innovate and solve real-world challenges.",
      pdfLink: "/path/to/ai-ml-dl-theme.pdf", // PDF link for AI/ML/DL theme
    },
    {
      title: "Open Innovation",
      description: "Unleash the power of open innovation to transform healthcare, finance, edtech, and more with collaborative, cutting-edge solutions.",
      pdfLink: "/path/to/open-innovation-theme.pdf", // PDF link for Open Innovation theme
    },
    {
      title: "Cyber Security",
      description: "Empower the future of digital safety by innovating and collaborating on cutting-edge cybersecurity solutions to protect against evolving threats.",
      pdfLink: "/path/to/cyber-security-theme.pdf", // PDF link for Cyber Security theme
    },
    {
      title: "Blockchain",
      description: "Revolutionize industries with decentralized solutions and transparent technologies through the power of blockchain innovation.",
      pdfLink: "/path/to/blockchain-theme.pdf", // PDF link for Blockchain theme
    },
    {
      title: "Development",
      description: "Build innovative, scalable, and user-centric web and mobile applications that redefine digital experiences.",
      pdfLink: "/path/to/development-theme.pdf", // PDF link for Development theme
    },
    {
      title: "IoT",
      description: "Connect the world seamlessly with smart, intuitive solutions through the power of the Internet of Things (IoT).",
      pdfLink: "/path/to/iot-theme.pdf", // PDF link for IoT theme
    },
  ];

  return (
    <section id="themes" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          CodeStorm Themes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{theme.title}</h3>
              <p className="text-gray-600 mb-4">{theme.description}</p>
              {/* Add a PDF download link for each theme */}
              <a
                href={theme.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
