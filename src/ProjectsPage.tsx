"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { portfolioData } from "./data/portfolioData";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import Navbar from "./components/Navbar";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16 sm:pt-20 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mb-6 xs:mb-8 sm:mb-12 lg:mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="mb-3 xs:mb-4 sm:mb-6"
            >
              <Button
                variant="ghost"
                onClick={goBack}
                className="mb-2 sm:mb-4 hover:bg-accent text-xs sm:text-sm px-2.5 py-1.5 sm:px-3 sm:py-2 h-8 sm:h-9 shadow-sm transition-all"
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Back
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 xs:mb-6 sm:mb-8 md:mb-12 leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent px-1 xs:px-2">
                My Projects
              </h1>
              <p className="text-muted-foreground text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-2 xs:px-4">
                A collection of projects I've worked on, showcasing different
                technologies and solving various challenges. From full-stack
                applications to AI-powered tools, each project represents a
                journey of learning and innovation.
              </p>
            </motion.div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8 xs:mb-12 sm:mb-16 lg:mb-20"
          >
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-full"
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border hover:border-primary/30 hover:scale-[1.01] hover:bg-secondary/40 flex flex-col max-w-md mx-auto sm:max-w-none w-full">
                  {/* Project Image */}
                  <div className="relative h-36 xs:h-44 sm:h-48 md:h-52 lg:h-56 xl:h-64 mb-2 xs:mb-3 sm:mb-4 mx-2 xs:mx-3 sm:mx-4 md:mx-6 mt-2 xs:mt-3 sm:mt-4 md:mt-6 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    {project.image ? (
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          const target = e.target as HTMLElement;
                          target.style.display = "none";
                          const fallback =
                            target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                    ) : null}
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ display: project.image ? "none" : "flex" }}
                    >
                      <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-primary/30">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="flex-shrink-0 px-2 xs:px-3 sm:px-4 md:px-6 pb-1 xs:pb-2 sm:pb-3 md:pb-4">
                    <CardTitle className="text-base xs:text-lg sm:text-xl md:text-2xl group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow flex flex-col px-2 xs:px-3 sm:px-4 md:px-6 pt-0">
                    {/* Technologies */}
                    <div className="mb-3 xs:mb-4 sm:mb-6 flex-grow">
                      <h4 className="text-2xs xs:text-xs sm:text-sm font-medium mb-1 xs:mb-2 sm:mb-3 text-muted-foreground">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 text-2xs xs:text-xs sm:text-sm rounded-full bg-secondary/80 text-secondary-foreground font-medium hover:bg-primary/10 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links - Fixed at bottom */}
                    <div className="flex flex-row gap-2 sm:gap-3 mt-auto justify-start">
                      {project.github && (
                        <Button
                          variant="outline"
                          className="text-xs sm:text-sm font-medium h-9 sm:h-10 px-3 sm:px-4 shadow-sm hover:bg-secondary/80 border-primary/30 hover:border-primary"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          View Code
                        </Button>
                      )}
                      {project.live && (
                        <Button
                          className="text-xs sm:text-sm font-medium h-9 sm:h-10 px-3 sm:px-4 shadow-sm hover:bg-primary/90"
                          onClick={() => window.open(project.live, "_blank")}
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 border-t border-border/50"
          >
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 xs:mb-3 sm:mb-4 md:mb-6 px-2 xs:px-4">
              Interested in Working Together?
            </h3>
            <p className="text-muted-foreground text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-3 xs:mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-2 xs:px-4 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center px-4 max-w-xs sm:max-w-md md:max-w-none mx-auto">
              <Button
                onClick={() =>
                  window.open(portfolioData.social.github.url, "_blank")
                }
                variant="outline"
                className="w-full sm:w-auto text-sm md:text-base h-10 md:h-12 px-4 md:px-6 shadow-sm border-primary/30 hover:border-primary hover:bg-secondary/80 font-medium"
              >
                View All My Work
              </Button>
              <Button
                onClick={() =>
                  (window.location.href = `mailto:${portfolioData.personal.email}`)
                }
                className="w-full sm:w-auto text-sm md:text-base h-10 md:h-12 px-4 md:px-6 shadow-sm hover:bg-primary/90 font-medium"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
