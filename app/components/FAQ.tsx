import { AccordionDemo } from "./ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Who can participate?",
      answer: "MU CodeStorm is open to all students currently enrolled in any recognized educational institution.",
    },
    {
      question: "What's the team size?",
      answer: "Teams can consist of 3 to 4 members. Solo participation is not allowed.",
    },
    {
      question: "Is there a registration fee?",
      answer: "Yes, there is a very minimal registration fee of ₹1550 per team.",
    },
    {
      question: "What's included in the registration fee?",
      answer: "We will be providing accommodation and meals for participants, ensuring a hassle-free experience! And full access to the Spandan 2K25 Event. for more information about Spandan 2k25 visit https://meu.edu.in/chancellor-brigade/",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, charger, and any other devices you might need. Don't forget your student ID and any necessary documentation.",
    },
    {
      question: "Are there any hardware limitations?",
      answer: "Yes, each team is allowed a maximum of 2 laptops during the hackathon.",
    },
  ]

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto p-8 rounded-2xl shadow-lg">
          <AccordionDemo items={faqs} />
        </div>
      </div>
    </section>
  )
}
