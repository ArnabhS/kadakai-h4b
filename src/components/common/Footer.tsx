import { motion } from "framer-motion"
import { Github, Twitter } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <div>
        <footer className="bg-cyber-dark border-t border-cyber-accent/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-4 md:mb-0"
            >
               <Image src={'/logo.webp'} width={100} height={100} className="h-10 w-10 rounded-full" alt="logo" />
              <span className="text-lg font-bold glow-text">Kavach.AI</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <a href="#" className="text-gray-400 hover:text-cyber-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          <div className="mt-8 pt-8  text-center text-gray-400 text-sm">
            <p>&copy; 2024 Kavach.AI. Decentralized AI-Powered Cyber Defense.</p>
          </div>
        </div>
      </footer>        
    </div>
  )
}

export default Footer