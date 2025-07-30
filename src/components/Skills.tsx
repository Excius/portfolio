import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { portfolioData } from "@/data/portfolioData";

interface Skill {
  name: string;
  category: string;
  level?: string;
}

const SkillPill = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-4 py-2 bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-full text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
    >
      {skill.name}
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [mobileActiveCategory, setMobileActiveCategory] = useState("all");
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const isDesktopInView = useInView(desktopRef, {
    once: true,
    margin: "-100px",
  });
  const isMobileInView = useInView(mobileRef, { once: true, margin: "-100px" });

  // Use either desktop or mobile view state for the heading
  const isInView = isDesktopInView || isMobileInView;

  // Flatten all skills from different categories
  const allSkills: Skill[] = [
    ...portfolioData.skills.languages,
    ...portfolioData.skills.frontend,
    ...portfolioData.skills.backend,
    ...portfolioData.skills.databases,
    ...portfolioData.skills.devops,
    ...portfolioData.skills.tools,
  ];

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  const mobileFilteredSkills =
    mobileActiveCategory === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.category === mobileActiveCategory);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        {/* Desktop Layout - Hidden on mobile */}
        <div ref={desktopRef} className="max-w-6xl mx-auto hidden sm:block">
          <Tabs
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isDesktopInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-12"
            >
              <TabsList className="bg-secondary/30 backdrop-blur-sm border border-border/50 p-1 rounded-lg">
                {portfolioData.skillCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/30"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

            {portfolioData.skillCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0"
              >
                <motion.div
                  layout
                  className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center"
                >
                  {filteredSkills.map((skill, index) => (
                    <SkillPill
                      key={`${skill.name}-${activeCategory}`}
                      skill={skill}
                      index={index}
                    />
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Mobile Layout - Visible only on mobile */}
        <div ref={mobileRef} className="max-w-4xl mx-auto block sm:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isMobileInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            {/* Mobile Category Selector - Scrollable horizontal list */}
            <div className="flex overflow-x-auto pb-4 gap-3 scrollbar-hide">
              {portfolioData.skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setMobileActiveCategory(category.id)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                    ${
                      mobileActiveCategory === category.id
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                        : "bg-secondary/30 text-foreground hover:bg-primary/10 hover:text-primary"
                    }
                  `}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Mobile Skills Grid */}
          <motion.div
            key={mobileActiveCategory}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-3"
          >
            {mobileFilteredSkills.map((skill, index) => (
              <SkillPill
                key={`mobile-${skill.name}-${mobileActiveCategory}`}
                skill={skill}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
