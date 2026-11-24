import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import './Projects.css';

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Algorithmic Stock Exchange & Order Matching Engine",
      description: "A DSA-based stock exchange and live order book supporting market and limit orders, efficient price-time matching, and real-time execution.",
      category: "DSA",
      number: "01",
      color: "#00ff88",
      tags: ["Order Matching", "Live Order Book", "Market Orders", "Limit Orders"],
    },
    {
      title: "Quant Screener",
      description: "A full-stack quantitative finance engine that applies discrete mathematics and Warshall's algorithm to identify systemic market risk. Groups stocks into equivalence classes via transitive closure of correlation matrices, enabling real-time risk visualization and statistical arbitrage detection.",
      category: "Quant Finance",
      number: "02",
      color: "#00ccff",
      tags: ["TypeScript", "Python", "FastAPI", "Warshall's Algorithm"],
      link: "https://quantscreener.netlify.app",
      linkLabel: "Live Demo",
    },
    {
      title: "Monte Carlo Derivatives Pricer",
      description: "A quantitative finance engine that prices options using Monte Carlo simulation with Geometric Brownian Motion. Features antithetic variates for variance reduction, Black-Scholes comparison, Greeks estimation, and interactive visualizations of stochastic paths and convergence.",
      category: "Quant Finance",
      number: "03",
      color: "#f59e0b",
      tags: ["Next.js", "Python", "FastAPI", "NumPy"],
      link: "https://github.com/rudrawhocodes/Monte-Carlo-Derivatives-Pricer",
      linkLabel: "Source Code",
    },
    {
      title: "Stock Dashboard",
      description: "A stock market dashboard for financial data visualization and technical analysis. Features candlestick and line charts, Bollinger Bands, multi-stock comparison, custom date ranges, and interactive data tables powered by live market data.",
      category: "Fintech",
      number: "04",
      color: "#10b981",
      tags: ["Python", "Streamlit", "Plotly", "yFinance"],
      link: "https://github.com/rudrawhocodes/stock-dashboard",
      linkLabel: "Source Code",
    },
    {
      title: "2D Physics Engine",
      description: "A from-scratch 2D physics simulation engine built in C++. Features rigid body dynamics, collision detection, and physics-based interactions with a CMake build system and dedicated test suite.",
      category: "Systems",
      number: "05",
      color: "#ff6b6b",
      tags: ["C++", "CMake", "Physics", "Simulation"],
      link: "https://github.com/rudrawhocodes/2D_PhysicsEngine",
      linkLabel: "Source Code",
    },
    {
      title: "Portfolio Website",
      description: "A modern, high-performance personal portfolio built with Vite and deployed on Cloudflare. Features smooth scroll animations via GSAP and Lenis, particle backgrounds, and a fully responsive design.",
      category: "Web",
      number: "06",
      color: "#a78bfa",
      tags: ["JavaScript", "CSS", "Vite", "Cloudflare"],
      link: "https://rudrathacker.me",
      linkLabel: "Live Site",
    },
    {
      title: "Invoice Application",
      description: "A modern invoice management application built with Vue 3, Vuex, and Firebase for creating, tracking, and managing invoices.",
      category: "Web",
      number: "07",
      color: "#00ff88",
      tags: ["Vue 3", "Vuex", "Firebase"],
    },
    {
      title: "Voting Application",
      description: "A full-stack MERN voting application for creating polls and securely collecting and displaying user votes.",
      category: "Full Stack",
      number: "08",
      color: "#00ff88",
      tags: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "Multivariate Time Series Forecasting",
      description: "A forecasting project for analyzing and predicting multivariate time-series data using statistical and machine-learning techniques.",
      category: "Machine Learning",
      number: "09",
      color: "#00ff88",
      tags: ["Python", "Time Series", "Forecasting", "Machine Learning"],
    },
    {
      title: "Pollution Level Forecasting",
      description: "A pollution forecasting system that estimates town-level air quality and pollution levels from environmental and atmospheric data.",
      category: "Data Science",
      number: "10",
      color: "#00ff88",
      tags: ["Python", "Air Quality", "Forecasting", "Data Analysis"],
    },
    {
      title: "India Rainfall Analysis",
      description: "A 45-year rainfall data analysis project for India, exploring seasonal patterns, regional trends, and long-term climate behavior.",
      category: "Data Science",
      number: "11",
      color: "#00ff88",
      tags: ["Python", "Pandas", "Visualization", "Climate Data"],
    },
    {
      title: "Credit Card Fraud Detection",
      description: "A machine-learning system for identifying fraudulent credit card transactions while minimizing false positives and handling imbalanced data.",
      category: "Machine Learning",
      number: "12",
      color: "#00ff88",
      tags: ["Python", "Scikit-learn", "Classification", "ML"],
    },
    {
      title: "Collaborative Whiteboard",
      description: "A real-time collaborative drawing application that enables multiple users to draw and interact together using WebSockets.",
      category: "Real-Time",
      number: "13",
      color: "#00ff88",
      tags: ["WebSockets", "JavaScript", "Real-Time", "Canvas"],
    },
    {
      title: "File Compression & Decompression Engine",
      description: "A DSA-based compression tool that accepts file uploads, calculates compression ratios, and visualizes Huffman trees for compression and decompression.",
      category: "DSA",
      number: "14",
      color: "#00ff88",
      tags: ["Huffman Coding", "File Upload", "Compression Ratio", "Tree Visualization"],
    },
  ];

  useEffect(() => {
    if (!isInView) return;

    gsap.fromTo(
      '.project-card',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );
  }, [isInView]);

  return (
    <section id="projects" ref={sectionRef} className="projects section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">02 — Work</span>
          <h2 className="section-title">
            Selected <span className="projects-gradient-text">Projects</span>
          </h2>
          <p className="section-description">
            Systems and tools built with focus on performance, correctness, and elegant design.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="project-card"
              style={{ '--project-color': project.color }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-glow" />

              <div className="project-header">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span>{project.linkLabel}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              ) : (
                <span className="project-link project-link--soon">
                  Deploying Soon
                </span>
              )}
            </motion.article>
          ))}
        </div>

        <div className="projects-cta">
          <motion.a
            href="https://github.com/rudrawhocodes"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-link"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Projects on GitHub</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
