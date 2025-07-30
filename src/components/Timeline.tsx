import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  title: string;
  organization: string;
  duration: string;
  description: string;
  tech?: string[];
}

interface TimelineProps {
  title: string;
  items: TimelineItem[];
}

const TimelineItem = ({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={
        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex ${
        isLeft ? "justify-start" : "justify-end"
      } mb-12`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/30 z-10" />

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className={`w-5/12 ${isLeft ? "pr-8" : "pl-8"}`}
      >
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:shadow-lg hover:shadow-primary/20 hover:bg-gradient-to-br hover:from-accent/10 hover:to-primary/10 hover:border-primary/30 transition-all duration-300">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {item.title}
          </h3>
          <h4 className="text-lg text-primary mb-2">{item.organization}</h4>
          <p className="text-sm text-muted-foreground mb-3 font-medium">
            {item.duration}
          </p>
          <p className="text-foreground/80 mb-4 leading-relaxed">
            {item.description}
          </p>

          {item.tech && (
            <div className="flex flex-wrap gap-2">
              {item.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const MobileTimelineItem = ({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-6"
    >
      <motion.div whileHover={{ scale: 1.02, y: -5 }} className="w-full">
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:shadow-lg hover:shadow-primary/20 hover:bg-gradient-to-br hover:from-accent/10 hover:to-primary/10 hover:border-primary/30 transition-all duration-300">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {item.title}
          </h3>
          <h4 className="text-lg text-primary mb-2">{item.organization}</h4>
          <p className="text-sm text-muted-foreground mb-3 font-medium">
            {item.duration}
          </p>
          <p className="text-foreground/80 mb-4 leading-relaxed">
            {item.description}
          </p>

          {item.tech && (
            <div className="flex flex-wrap gap-2">
              {item.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Timeline = ({ title, items }: TimelineProps) => {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const isDesktopInView = useInView(desktopRef, {
    once: true,
    margin: "-100px",
  });
  const isMobileInView = useInView(mobileRef, { once: true, margin: "-100px" });

  // Use either desktop or mobile view state for the heading
  const isInView = isDesktopInView || isMobileInView;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          {title}
        </motion.h2>

        {/* Desktop Timeline Layout - Hidden on mobile */}
        <div ref={desktopRef} className="relative hidden sm:block">
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isDesktopInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary/80 to-transparent"
          />

          {/* Desktop Timeline Items */}
          {items.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>

        {/* Mobile Layout - Visible only on mobile */}
        <div ref={mobileRef} className="block sm:hidden space-y-6">
          {items.map((item, index) => (
            <MobileTimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
