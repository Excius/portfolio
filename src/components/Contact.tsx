import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { personal, social } = portfolioData;

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personal.location,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: social.github.url,
      username: social.github.username,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: social.linkedin.url,
      username: social.linkedin.username,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to discuss new opportunities, innovative
                projects, or just chat about technology. Feel free to reach out
                through any of the channels below or use the contact form.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors duration-300"
                >
                  <div className="p-2 rounded-full bg-primary/10">
                    <method.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {method.label}
                    </p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-foreground font-medium hover:text-primary transition-colors duration-300"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">
                        {method.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4 text-center">
              <h4 className="text-lg font-semibold text-foreground">
                Follow Me
              </h4>
              <div className="flex gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-secondary/20 hover:bg-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <social.icon className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {social.label}
                      </p>
                      <p className="text-foreground font-medium">
                        {social.username}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
