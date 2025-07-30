import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const Hero = () => {
  const { personal, social } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 mt-8 sm:mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            {personal.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
          >
            {personal.title}
          </motion.p>

          {/* About Me */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {personal.description}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center gap-6 mb-12"
          >
            <motion.a
              href={social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={`mailto:${social.email}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="default"
              size="lg"
              className="text-lg px-8 py-3"
              onClick={() => {
                const element = document.getElementById("experience");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Experience
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-primary/30 hover:border-primary hover:bg-secondary/80"
              onClick={() => {
                const googleDriveLink =
                  "https://drive.google.com/file/d/1CmnhA1jBXdzU_FR39JajDLjqyrQjypw_/view?usp=sharing";
                window.open(googleDriveLink, "_blank");
              }}
            >
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
