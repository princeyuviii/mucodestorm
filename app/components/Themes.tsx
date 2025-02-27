import { HoverEffect } from "./ui/card-hover-effect";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Themes() {
  const themes = [
    {
      title: "AI/ML/DL",
      description: "Explore the cutting-edge world of AI, Machine Learning, and Deep Learning to innovate and solve real-world challenges.",
      pdfLink: "/path/to/ai-ml-dl.pdf",  // Replace with actual PDF link
    },
    {
      title: "Open Innovation",
      description: "Unleash the power of open innovation to transform healthcare, finance, edtech, and more with collaborative, cutting-edge solutions.",
      pdfLink: "/path/to/open-innovation.pdf",  // Replace with actual PDF link
    },
    {
      title: "Cyber Security",
      description: "Empower the future of digital safety by innovating and collaborating on cutting-edge cybersecurity solutions to protect against evolving threats.",
      pdfLink: "/path/to/cyber-security.pdf",  // Replace with actual PDF link
    },
    {
      title: "Blockchain",
      description: "Revolutionize industries with decentralized solutions and transparent technologies through the power of blockchain innovation.",
      pdfLink: "/path/to/blockchain.pdf",  // Replace with actual PDF link
    },
    {
      title: "Development",
      description: "Build innovative, scalable, and user-centric web and mobile applications that redefine digital experiences.",
      pdfLink: "/path/to/development.pdf",  // Replace with actual PDF link
    },
    {
      title: "IoT",
      description: "Connect the world seamlessly with smart, intuitive solutions through the power of the Internet of Things (IoT).",
      pdfLink: "/path/to/iot.pdf",  // Replace with actual PDF link
    },
  ];

  return (
    <section id="themes" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          CodeStorm Themes
        </h2>
        <HoverEffect items={themes} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <div key={index} className="theme-card p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold">{theme.title}</h3>
              <p className="text-lg text-gray-600 mt-2">{theme.description}</p>
              <a
                href={theme.pdfLink}
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4"
                download
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-lg font-medium text-white backdrop-blur-3xl">
                  Download PDF
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
