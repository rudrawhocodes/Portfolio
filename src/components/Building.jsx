import { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import './Experience.css';
import './Building.css';

const Building = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.building-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isInView]);

  return (
    <section id="building" ref={sectionRef} className="building section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">03 — Startup</span>
          <h2 className="section-title">
            Building <span className="building-gradient-text">My Own</span>
          </h2>
          <p className="section-description">
            Turning a real problem into a product, one deliberate build at a time.
          </p>
        </div>

        <div className="experience-container">
          <div className="experience-timeline">
            <motion.div
              className="timeline-line"
              style={{ height: lineHeight }}
            />
            <div className="timeline-line-bg" />
          </div>

          <div className="experience-cards">
            <motion.article
              className="experience-card building-card"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="exp-timeline-dot">
                <span className="dot-icon">◆</span>
              </div>

              <div className="exp-content">
                <div className="exp-header">
                  <div className="exp-title-group">
                    <h3 className="exp-role">Co-Founder</h3>
                    <div className="exp-company-group">
                      <span className="exp-company">Shivora Capital</span>
                    </div>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">Jan 2025 – Present</span>
                    <span className="exp-type">Startup</span>
                  </div>
                </div>

                <div className="exp-location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Ahmedabad, India</span>
                </div>

                <div className="exp-description">
                  <p>
                    Founded Shivora Capital and spearheaded the vision of making business
                    ownership more accessible through technology.
                  </p>
                  <p>
                    <strong>Built India&apos;s first app featuring a ticket-based co-ownership model for businesses.</strong>
                  </p>
                  <p>
                    Developed an innovative approach to fractional business ownership,
                    enabling users to invest in business opportunities.
                  </p>
                  <p>
                    Led product ideation, business strategy, innovation, and development
                    of a technology-driven financial ecosystem.
                  </p>
                </div>
              </div>

              <div className="exp-decoration">
                <div className="exp-glow" />
              </div>
            </motion.article>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Building;
