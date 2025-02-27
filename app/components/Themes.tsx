import { HoverEffect } from "./ui/card-hover-effect"; // Keep the HoverEffect import

export default function Themes() {
  const themes = [
    {
      title: "AI/ML/DL",
      description: "Explore the cutting-edge world of AI, Machine Learning, and Deep Learning to innovate and solve real-world challenges.",
      pdfUrl: "/pdfs/ai-ml-dl.pdf", // Make sure the path is correct
    },
    {
      title: "Open Innovation",
      description: "Unleash the power of open innovation to transform healthcare, finance, edtech, and more with collaborative, cutting-edge solutions.",
      pdfUrl: "/pdfs/open-innovation.pdf", // Make sure the path is correct
    },
    {
      title: "Cyber Security",
      description: "Empower the future of digital safety by innovating and collaborating on cutting-edge cybersecurity solutions to protect against evolving threats.",
      pdfUrl: "/pdfs/cyber-security.pdf", // Make sure the path is correct
    },
    {
      title: "Blockchain",
      description: "Revolutionize industries with decentralized solutions and transparent technologies through the power of blockchain innovation.",
      pdfUrl: "/pdfs/blockchain.pdf", // Make sure the path is correct
    },
    {
      title: "Development",
      description: "Build innovative, scalable, and user-centric web and mobile applications that redefine digital experiences.",
      pdfUrl: "/pdfs/development.pdf", // Make sure the path is correct
    },
    {
      title: "IoT",
      description: "Connect the world seamlessly with smart, intuitive solutions through the power of the Internet of Things (IoT).",
      pdfUrl: "/pdfs/iot.pdf", // Make sure the path is correct
    },
  ];

  return (
    <section id="themes" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          CodeStorm Themes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <a 
              key={index}
              href={theme.pdfUrl} 
              download // This triggers the download
              className="block bg-transparent p-6 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 hover:text-white transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{theme.title}</h3>
              <p className="text-gray-600">{theme.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
