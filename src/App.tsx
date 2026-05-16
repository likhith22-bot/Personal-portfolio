import { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ChevronRight, 
  ExternalLink,
  Code2,
  Database,
  Layout,
  Server,
  Award,
  GraduationCap,
  Briefcase,
  Terminal,
  User,
  Coffee,
  Globe,
  ArrowUpRight,
  X
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  SKILLS, 
  PROJECTS, 
  EDUCATION, 
  EXPERIENCE,
  CERTIFICATIONS
} from './constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const isPdfFile = (url: string) => url.toLowerCase().endsWith('.pdf');

export default function App() {
  const [selectedCert, setSelectedCert] = useState<null | typeof CERTIFICATIONS[0]>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-6 py-3 border-white/5 bg-slate-900/40">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold font-display"
          >
            Likhith<span className="text-blue-500">.</span>
          </motion.div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['About', 'Skills', 'Projects', 'Experience', 'Certifications'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Github size={20} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section id="hero" className="section-container flex flex-col items-center justify-center min-h-[85vh] text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20" />
            <div className="relative glass-card p-4 rounded-full border-blue-500/30 overflow-hidden">
               <User className="w-24 h-24 text-blue-400" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-display"
          >
            I'm <span className="text-gradient">{PERSONAL_INFO.name}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            {PERSONAL_INFO.objective}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a 
              href="#projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-blue-600/20"
            >
              View Projects 
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="glass-card glass-card-hover px-8 py-3 rounded-full font-semibold flex items-center gap-2"
            >
              Contact Me
            </a>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-container">
          <div className="section-heading">
            <span className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
              <Terminal size={24} />
            </span>
            <h2>Technical Skills</h2>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SKILLS.map((skill) => (
              <motion.div key={skill.category} variants={itemVariants} className="glass-card p-6 glass-card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="text-blue-500 w-5 h-5" />
                  <h3 className="font-semibold text-lg">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span 
                      key={item} 
                      className="text-sm px-3 py-1 bg-white/5 border border-white/10 rounded-md text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-container">
          <div className="section-heading">
            <span className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
              <Globe size={24} />
            </span>
            <h2>Featured Projects</h2>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PROJECTS.map((project) => (
              <motion.div key={project.title} variants={itemVariants} className="glass-card glass-card-hover flex flex-col group h-full">
                <div className="p-1">
                  <div className="h-48 w-full bg-slate-800 rounded-xl mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-slate-900 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600 rounded-full hover:scale-110 transition-transform shadow-xl"
                      >
                        <ArrowUpRight size={24} />
                      </a>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-xs font-bold rounded-lg uppercase tracking-wider">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors flex items-center justify-between">
                    {project.title}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white">
                       <Github size={18} />
                    </a>
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase font-bold tracking-widest text-blue-400 px-2 py-0.5 bg-blue-500/5 border border-blue-500/20 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Experience Card */}
            <div>
              <div className="section-heading mb-8">
                <span className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                  <Briefcase size={24} />
                </span>
                <h2>Experience</h2>
              </div>
              <div className="space-y-8 relative before:absolute before:left-8 before:top-4 before:bottom-0 before:w-px before:bg-slate-800">
                {EXPERIENCE.map((exp, index) => (
                  <motion.div 
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-20 group"
                  >
                    <div className="absolute left-[26px] top-6 w-3 h-3 bg-blue-500 rounded-full border-4 border-slate-950 z-10 group-hover:scale-125 transition-transform" />
                    <div className="glass-card p-6 glass-card-hover">
                      <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block mb-2">{exp.duration}</span>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-slate-400 font-medium mb-4">{exp.company}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div>
              <div className="section-heading mb-8">
                <span className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                  <GraduationCap size={24} />
                </span>
                <h2>Education</h2>
              </div>
              <div className="space-y-6">
                {EDUCATION.map((edu, index) => (
                  <motion.div 
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 glass-card-hover border-l-4 border-l-blue-600"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <p className="text-sm text-slate-400 font-medium">{edu.major}</p>
                      </div>
                      <span className="text-xs font-bold bg-white/5 px-3 py-1 rounded-full uppercase tracking-widest">{edu.duration}</span>
                    </div>
                    <p className="text-slate-300 mb-2">{edu.school}</p>
                    <p className="text-sm text-blue-400 font-semibold">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section-container border-t border-white/5">
          <div className="section-heading">
            <span className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
              <Award size={24} />
            </span>
            <h2>Certifications & Awards</h2>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CERTIFICATIONS.map((cert) => (
              <motion.div 
                key={cert.title} 
                variants={itemVariants} 
                className="glass-card p-6 glass-card-hover flex flex-col items-center text-center cursor-pointer group"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <cert.icon className="text-blue-400 w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2 group-hover:text-blue-400 transition-colors uppercase text-sm tracking-tight">{cert.title}</h3>
                <p className="text-slate-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-xs text-blue-500 font-semibold">{cert.date}</p>
                <div className="mt-4 text-[10px] uppercase font-bold tracking-widest text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to view
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact CTA */}
        <section className="section-container mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card bg-gradient-to-br from-blue-600/20 to-slate-900 border-white/5 p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6 font-display">Ready to build something <span className="text-gradient">amazing?</span></h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              I'm always open to new opportunities and interesting projects. Feel free to reach out for collaboration or a quick chat!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 glass-card px-6 py-3 glass-card-hover">
                <Mail className="text-blue-500" />
                <span className="font-medium">{PERSONAL_INFO.email}</span>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-3 glass-card px-6 py-3 glass-card-hover">
                <Phone className="text-blue-500" />
                <span className="font-medium">{PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950 py-12 relative z-10">
        <div className="section-container py-0 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold font-display mb-2">Likhith<span className="text-blue-500">.</span></div>
            <p className="text-slate-500 text-sm">© 2024 Built by Tadikonda Likhith Naga Sai. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href={PERSONAL_INFO.github} className="text-slate-400 hover:text-white transition-colors"><Github size={24} /></a>
            <a href={PERSONAL_INFO.linkedin} className="text-slate-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white transition-colors"><Mail size={24} /></a>
          </div>
        </div>
      </footer>
      {/* Certification Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
              onClick={() => setSelectedCert(null)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative glass-card border-white/10 max-w-5xl w-full overflow-hidden bg-slate-900 shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <div>
                  <h3 className="text-xl font-bold font-display">{selectedCert.title}</h3>
                  <p className="text-sm text-slate-400">{selectedCert.issuer} • {selectedCert.date}</p>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-1 bg-slate-800">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                  {isPdfFile(selectedCert.asset) ? (
                    <object
                      data={selectedCert.asset}
                      type="application/pdf"
                      className="w-full h-full"
                    >
                      <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center text-slate-300">
                        <p>Unable to display this PDF in the modal.</p>
                        <a
                          href={selectedCert.asset}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition-colors"
                        >
                          Open PDF in a new tab
                        </a>
                      </div>
                    </object>
                  ) : (
                    <img 
                      src={selectedCert.asset} 
                      alt={selectedCert.title}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
                <a
                  href={selectedCert.asset}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
                >
                  Open directly
                </a>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-full font-semibold transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
