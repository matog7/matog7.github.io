import { useState, useEffect } from "react";
import { Atom, Code, Smartphone } from "lucide-react";
import { motion } from "motion/react";
import "./App.css";

function App() {
  const [currentLogo, setCurrentLogo] = useState(0);
  const logos = ["react", "typescript", "react-native"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [logos.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextLogo = () => {
    setCurrentLogo((prev) => (prev + 1) % logos.length);
  };

  const prevLogo = () => {
    setCurrentLogo((prev) => (prev - 1 + logos.length) % logos.length);
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <motion.nav
        className="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-links">
          <motion.a
            href="#about"
            onClick={() => scrollToSection("about")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            About
          </motion.a>
          <motion.a
            href="#works"
            onClick={() => scrollToSection("works")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Works
          </motion.a>
          <motion.a
            href="#gallery"
            onClick={() => scrollToSection("gallery")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Projets
          </motion.a>
          <motion.a
            href="#contact"
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <motion.div
          className="hero-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="hero-title-container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">CODE MASTER</h1>
          <h1 className="hero-title-bis">CODE MASTER</h1>
          <h1 className="hero-title-ter">CODE MASTER</h1>
        </motion.div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="hero-text-box left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>
              Ce qui rend mon développement unique est la combinaison
              d'expertise technique et d'une approche personnalisée
            </p>
            <div className="social-icons">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-circle"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                💻
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-circle"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                🔗
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-circle"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                🐦
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="hero-text-box right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p>
              Plongez dans un monde où chaque ligne de code raconte une
              histoire, capturant la beauté de solutions élégantes et
              performantes
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="photographer-placeholder"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="camera-icon">💻</div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="about-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">à propos</h2>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            En savoir plus <span className="arrow">→</span>
          </motion.button>
        </motion.div>
        <motion.p
          className="section-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Bienvenue dans mon univers de développement. Je suis un développeur
          français passionné, dédié à la création de solutions innovantes et
          performantes. Avec un œil attentif aux détails et une passion pour
          l'excellence technique.
        </motion.p>
        <motion.div
          className="gear-circle"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="gear-content">
            <div className="logo-carousel">
              <motion.div
                key={currentLogo}
                className={`logo-slide ${logos[currentLogo]}`}
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              >
                {currentLogo === 0 && (
                  <Atom
                    className="tech-logo react-logo"
                    size={120}
                    color="#61DAFB"
                    strokeWidth={1.5}
                  />
                )}
                {currentLogo === 1 && (
                  <Code
                    className="tech-logo typescript-logo"
                    size={120}
                    color="#3178C6"
                    strokeWidth={1.5}
                  />
                )}
                {currentLogo === 2 && (
                  <Smartphone
                    className="tech-logo react-native-logo"
                    size={120}
                    color="#61DAFB"
                    strokeWidth={1.5}
                  />
                )}
              </motion.div>
            </div>
            <svg className="gear-text-svg" viewBox="0 0 400 400">
              <defs>
                <path
                  id="circle-path"
                  d="M 200,200 m -180,0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0"
                />
              </defs>
              <text className="gear-text">
                <textPath href="#circle-path" startOffset="0%">
                  MY STACK MY STACK MY STACK MY STACK MY STACK MY STACK MY STACK
                  MY STACK MY STACK MY STACK MY STACK MY STACK
                </textPath>
              </text>
            </svg>
          </div>
          <motion.button
            className="nav-arrow left"
            onClick={prevLogo}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </motion.button>
          <motion.button
            className="nav-arrow right"
            onClick={nextLogo}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Power Section */}
      <motion.section
        className="power-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="power-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -10 }}
        >
          <h3>Innovation</h3>
          <p>
            La puissance du code pour résoudre des problèmes complexes et créer
            des solutions élégantes est une forme d'art technique
          </p>
          <motion.button
            className="btn-discover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir <span className="arrow">→</span>
          </motion.button>
        </motion.div>
        <motion.div
          className="power-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -10 }}
        >
          <h3>Expertise</h3>
          <p>
            Une vision unique et une perspective technique qui donnent vie à
            chaque projet, permettant de voir le monde à travers un nouveau
            prisme technologique
          </p>
          <motion.button
            className="btn-discover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir <span className="arrow">→</span>
          </motion.button>
        </motion.div>
        <motion.div
          className="power-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -10 }}
        >
          <p>
            Acquérez une compréhension approfondie des défis techniques et des
            choix architecturaux qui donnent vie aux applications modernes
          </p>
          <motion.button
            className="btn-discover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir <span className="arrow">→</span>
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="gallery"
        className="gallery-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">projets</h2>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir tout <span className="arrow">→</span>
          </motion.button>
        </motion.div>
        <motion.p
          className="section-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Une collection soignée de projets qui démontrent mes compétences, ma
          créativité et mon expertise technique. Des applications web modernes
          aux solutions innovantes.
        </motion.p>
        <motion.div
          className="gallery-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <div className="gallery-image water-scene"></div>
          </motion.div>
          <motion.div
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <div className="gallery-image placeholder"></div>
          </motion.div>
          <motion.div
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <div className="gallery-image placeholder"></div>
          </motion.div>
          <motion.div
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <div className="gallery-image placeholder"></div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Works Section */}
      <motion.section
        id="works"
        className="works-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          réalisations
        </motion.h2>
        <motion.div
          className="works-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="work-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="work-image"></div>
            <h3>Applications Web</h3>
            <p>Développement d'applications web modernes et performantes</p>
          </motion.div>
          <motion.div
            className="work-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="work-image"></div>
            <h3>APIs & Backend</h3>
            <p>Architecture de services robustes et scalables</p>
          </motion.div>
          <motion.div
            className="work-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10 }}
          >
            <div className="work-image"></div>
            <h3>Interfaces Utilisateur</h3>
            <p>Design d'expériences utilisateur intuitives et élégantes</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="contact-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          contact
        </motion.h2>
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>Créons ensemble quelque chose d'extraordinaire</p>
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.input
              type="text"
              placeholder="Votre nom"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              placeholder="Votre email"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              placeholder="Votre message"
              rows={5}
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Envoyer <span className="arrow">→</span>
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default App;
