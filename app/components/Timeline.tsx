import { StickyScroll } from "./ui/sticky-scroll-reveal"

export default function Timeline() {
  const events = [
    { date: "February 11, 2025", event: "Registration Opens" },
    { date: "March 15, 2025", event: "Registration Closes" },
    { date: "March 20, 2025", event: "Cultural Night"},
    { date: "March 21, 2025", event: "CodeStorm Begins" },
    { date: "March 21, 2025", event: "Convocation"},
    { date: "March 22, 2022", event: "Project Submission" },
    { date: "March 22, 2025", event: "Judging and Awards Ceremony" },
    { date: "March 22, 2025", event:"Celebrity Night!" },
    { date: "",event:""},
    { date: "", event:""},

  ]

  const content = events.map((event) => ({
    title: event.date,
    description: event.event,
  }))

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Event Timeline
        </h2>
        <StickyScroll content={content} />
      </div>
    </section>
  )
}

