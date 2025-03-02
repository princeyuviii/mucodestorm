import { motion } from "framer-motion";
import { Mail, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Footer() {
  const contacts = [
    { name: "Head Cordinator", role: "Yuvi Singh Rathore", phone: "+91 62323 94854" },
    { name: "Coordinators", role: "Mradul Maheshwari", phone: "+91 62657 78138" },
    { role: "Kavy Porwal", phone: "+91 96916 72623" }
  ];

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800 z-50 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <motion.div
            className="bg-gradient-to-r from-indigo-500 to-sky-500 p-1 rounded-lg h-[100px] mt-[60px]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <LinkPreview url="https://meu.edu.in/chancellor-brigade/">
              <div className="bg-black rounded-lg p-4">
                <h3 className="text-2xl text-white font-bold mb-2">MU CodeStorm</h3>
                <p className="text-sm text-gray-300">Organized by Chancellor's Brigade</p>
              </div>
            </LinkPreview>
          </motion.div>

          {/* Location Section */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <MapPin className="mr-2" /> Our Location
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5075.202236069083!2d75.02566910937945!3d24.074685116536966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39642b7932843209%3A0x402b2fd68551b0b2!2sMandsaur%20University%20Campus!5e1!3m2!1sen!2sin!4v1739180483092!5m2!1sen!2sin"
              width="200"
              height="150"
              className="rounded-lg shadow-lg"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="flex flex-col items-center md:items-start mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Phone className="mr-2" /> Contact Us
            </h3>
            <div className="space-y-3">
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  className="text-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <p className="font-semibold text-indigo-400">{contact.name}</p>
                  <p className="text-gray-400">{contact.role}</p>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                    className="text-gray-300 hover:text-indigo-400 transition duration-300"
                  >
                    {contact.phone}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Icons */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <SocialIcon
                icon={<Mail />}
                link="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJGGqkPCSdkLhkvLpxBGqFTGjKdQzmTsZcCklkQtjHLVVwwzFbhdSXwVXmmKgnsNGdcgV"
              />
              <SocialIcon
                icon={<Instagram />}
                link="https://www.instagram.com/chancellorbrigadeofficial"
              />
              <SocialIcon
                icon={<Youtube />}
                link="https://www.youtube.com/@mandsauruniversityofficial7771"
              />
            </div>
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; 2025 MU CodeStorm. All rights reserved.
        </div>
{/*         <div className="mt-4 text-center text-sm text-gray-400">
          Made with ❤️ by{" "}
          <LinkPreview url="https://github.com/iamkavy47" className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Kavy Porwal
          </LinkPreview>{" "}
            <LinkPreview url="https://github.com/tanveer188" className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text hover:underline">
            <span className=" text-gray-400">and</span> Tanveer Hussain
            </LinkPreview>{" "}
        </div> */}
      </div>
    </footer>
  );
}

const SocialIcon = ({ icon, link }: { icon: JSX.Element; link: string }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-indigo-400 transition duration-300"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);
