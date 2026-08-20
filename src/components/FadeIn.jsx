import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const directionMap = {
  up: { y: 48, x: 0 },
  right: { y: 0, x: -48 },
  left: { y: 0, x: 48 },
};

export default function FadeIn({ children, direction = "up", delay = 0, className = "", id }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { x, y } = directionMap[direction] || directionMap.up;

    gsap.fromTo(
      el,
      { opacity: 0, x, y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        delay: delay / 1000,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [direction, delay]);

  return (
    <div id={id} ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
