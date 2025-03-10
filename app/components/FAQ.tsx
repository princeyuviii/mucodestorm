import { AccordionDemo } from "./ui/accordion"

export default function FAQ() {
  const faqs = [
    {
  question: "How to Register for MU CodeStorm?",
  answer: (
    <>
      <p>Follow these steps to register:</p>
      <ol className="list-decimal pl-5">
        <li>
          <span> Click </span>
          <a
            className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
            href="#reg"
          >
            "Register Now"
          </a>
          <span> Start your registration.</span>
        </li>
        <li> Fill Out the Form – Enter your details and team info.</li>
        <li> Submit a Problem Statement – Upload a PDF or PPT showcasing any idea from any domain.</li>
      </ol>
      <p><strong>Note:</strong></p>
      <ul className="list-disc pl-5">
        <li>The problem statement is required but won't be graded or used for elimination.</li>
        <li>The official hackathon problem statement will be provided on the event day.</li>
        <li>Your submission helps organizers understand key themes for the event.</li>
      </ul>
    </>
  ),
},

    {
      question: "Rules and Regulations",
      answer: (
        <>
          <p><strong>Team Formation:</strong></p>
          <ul className="list-disc pl-5">
            <li>Teams can consist of members from different branches within the same college.</li>
            <li>Each team must have 3 to 4 members, including a team leader.</li>
          </ul>
          <p><strong>Mode of Event:</strong></p>
          <ul className="list-disc pl-5">
            <li>The first stage (domain selection & presentation submission) will be online (non-elimination round).</li>
            <li>The finale will be conducted in person at Mandsaur University.</li>
          </ul>
          <p><strong>Travel & Accommodation:</strong></p>
          <ul className="list-disc pl-5">
            <li>Participants must bear their own travel expenses.</li>
            <li>Free accommodation is available from March 20 (5 PM) to March 23 (11 AM) for outstation participants.</li>
            <li>Food will be provided free of cost on March 21 & 22.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Is there a registration fee?",
      answer: "Yes, there is a very minimal registration fee of ₹1550 per team.",
    },
    {
      question: "What's included in the registration fee?",
      answer: "We will be providing accommodation and meals for participants, ensuring a hassle-free experience! And full access to the Spandan 2K25 Event. For more information about Spandan 2k25, visit [Spandan 2K25](https://meu.edu.in/chancellor-brigade/).",
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, and any other devices you might need. Don't forget your student ID and any necessary documentation.",
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
