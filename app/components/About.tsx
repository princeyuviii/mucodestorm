import { StickyScroll } from "./ui/sticky-scroll-reveal"

export default function About() {
  const content = [
    {
      title: "What is MU CodeStorm?",
      description:
        "CodeStorm is a 36-hour hackathon that brings together creative minds to tackle real-world challenges through technology. This event is your opportunity to showcase your skills, learn from peers, and potentially win exciting prizes!",
    },
    {
      title: "Who can participate?",
      description:
        "Students from all over India can participate in this hackathon. There is no restriction on department or year, Students from any year and any department can participate.",
    },
    {
      title: "What will you gain?",
      description:
        "Apart from the chance to win amazing prizes, you'll get to network with industry professionals, learn new technologies, and push your limits in a fun and challenging environment.",
    },
    {
      title: "How does it work?",
      description:
        "Form a team of 3-4 members, choose a problem statement from our themes, and start coding! You'll have 36 hours to create a working prototype and pitch your solution to our panel of judges.",
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          About CodeStorm
        </h2>
        <StickyScroll content={content} />
      </div>
    </section>
  )
}

