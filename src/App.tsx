import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code, 
  Cpu, 
  Award, 
  BookOpen, 
  User, 
  Camera, 
  Video, 
  Palette,
  ChevronRight,
  Menu,
  X,
  Terminal,
  MessageSquare,
  Sparkles,
  GraduationCap,
  Star,
  Database,
  Server
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  EDUCATION, 
  TECHNICAL_SKILLS, 
  CERTIFICATIONS, 
  PROJECTS, 
  SOFT_SKILLS, 
  HOBBIES 
} from './constants';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certs' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-slate-100' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, 'top')} 
          className="text-2xl font-black tracking-tighter text-blue-600 hover:scale-105 transition-transform flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">TK</div>
          <span>Tharun<span className="text-slate-400">.</span></span>
        </a>
        
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors rounded-xl hover:bg-blue-50"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-xl transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  className="px-4 py-4 text-lg font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 rounded-2xl transition-all"
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const SectionHeader: React.FC<{ title: string; subtitle?: string; icon: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="mb-16"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-100">
        {icon}
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{title}</h2>
    </div>
    {subtitle && <p className="text-slate-500 max-w-2xl text-lg font-medium ml-1 mr-auto">{subtitle}</p>}
  </motion.div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Nav />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100/30 blur-[100px] rounded-full -z-10"
        ></motion.div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-blue-100"
              >
                <Sparkles size={14} className="animate-pulse" />
                Available for Opportunities
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 leading-[1] tracking-tighter">
                Engineering <span className="text-blue-600 block sm:inline">Future</span> Solutions.
              </h1>
              
              <p className="text-lg md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-medium mx-auto lg:mx-0">
                Hi, I'm <span className="text-slate-900 font-bold underline decoration-blue-500 decoration-4 underline-offset-4">{PERSONAL_INFO.name}</span>. I build intelligent web applications and IoT systems that solve real-world problems.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(59 130 246 / 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] font-bold transition-all flex items-center gap-3 group"
                >
                  Explore My Work 
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <div className="flex items-center gap-3">
                  {[
                    { icon: <Github size={22} />, link: PERSONAL_INFO.github, label: 'GitHub' },
                    { icon: <Linkedin size={22} />, link: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
                    { icon: <Code size={22} />, link: PERSONAL_INFO.leetcode, label: 'LeetCode' },
                    { icon: <Terminal size={22} />, link: PERSONAL_INFO.geeksforgeeks, label: 'GeeksForGeeks' },
                  ].map((social, i) => (
                    <motion.a 
                      key={i} 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      whileHover={{ y: -8, scale: 1.1 }}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all text-slate-500 hover:text-blue-600 hover:bg-blue-50"
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-2/5 order-1 lg:order-2 flex justify-center"
            >
              <div className="relative group max-w-[400px] w-full px-4 lg:px-0">
                <div className="absolute -inset-8 bg-blue-500/20 rounded-[4rem] blur-[50px] -z-10 group-hover:bg-blue-500/30 transition-colors"></div>
                
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full aspect-[3/4] bg-slate-100 rounded-[3rem] shadow-2xl relative overflow-hidden transition-all duration-700 border-[8px] border-white ring-1 ring-slate-100"
                >
                  <img 
                    src={PERSONAL_INFO.profileImage} 
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-110 transition-transform duration-1000"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                </motion.div>

                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 -left-4 bg-white p-5 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 hover:scale-110 transition-transform z-10"
                >
                  <div className="p-3 bg-blue-600 text-white rounded-xl shadow-lg">
                    <Terminal size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Passionate About</p>
                    <p className="text-base font-black text-slate-900 leading-none">Innovation</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="About Me" 
            subtitle="My journey in the world of technology."
            icon={<User size={28} />}
          />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square max-w-[440px] mx-auto lg:block hidden">
                <div className="absolute inset-0 bg-blue-600 rounded-[3.5rem] rotate-6 scale-95 opacity-5"></div>
                <div className="absolute inset-0 bg-blue-600 rounded-[3.5rem] -rotate-3 scale-95 opacity-5"></div>
                <img 
                  src={PERSONAL_INFO.profileImage} 
                  alt="Tharunkumar Portrait"
                  className="relative z-10 w-full h-full object-cover object-top rounded-[3.5rem] shadow-2xl border-[6px] border-white"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop';
                  }}
                />
              </div>
              <div className="lg:hidden">
                <img 
                  src={PERSONAL_INFO.profileImage} 
                  alt="Tharunkumar Portrait"
                  className="w-full max-w-sm mx-auto rounded-[2rem] shadow-2xl border-[6px] border-white"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop';
                  }}
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100"
            >
              <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
                {PERSONAL_INFO.profileSummary}
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-blue-300 transition-all">
                  <MapPin size={24} className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-lg font-black text-slate-900">{PERSONAL_INFO.location}</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-blue-300 transition-all">
                  <Mail size={24} className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Contact</h4>
                  <p className="text-lg font-black text-slate-900 truncate">{PERSONAL_INFO.email}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Technical Arsenal" 
            subtitle="The tools and languages I use to bring ideas to life."
            icon={<Cpu size={28} />}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TECHNICAL_SKILLS.map((cat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:bg-white hover:border-blue-400 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-1000"></div>
                <h3 className="text-blue-600 font-black mb-8 uppercase tracking-widest text-xs flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping"></div>
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.span 
                      key={sIdx} 
                      whileHover={{ scale: 1.1, color: '#2563eb' }}
                      className="px-5 py-2.5 bg-white rounded-xl text-sm font-black text-slate-700 border border-slate-200 group-hover:border-blue-100 shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-24"
          >
            <SectionHeader 
              title="Soft Skills" 
              subtitle="What makes me exceptional beyond code."
              icon={<Sparkles size={28} />}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SOFT_SKILLS.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 hover:border-blue-300 hover:bg-white transition-all shadow-sm hover:shadow-xl text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star size={32} className="text-blue-600 group-hover:rotate-12 transition-transform" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{skill.name}</h4>
                  <p className="text-slate-600 leading-relaxed">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Education" 
            subtitle="Academic foundation that shaped my technical journey."
            icon={<GraduationCap size={28} />}
          />
          <div className="max-w-4xl mx-auto space-y-12">
            {EDUCATION.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group flex gap-8 p-10 bg-white rounded-[3rem] border border-slate-100 hover:border-blue-400 hover:shadow-2xl transition-all"
              >
                <div className="w-2 h-full bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full group-hover:scale-[1.1] transition-transform"></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{edu.degree}</h3>
                    <span className="px-4 py-1 bg-blue-600 text-white text-sm font-bold rounded-xl">{edu.year}</span>
                  </div>
                  <p className="text-slate-600 text-lg mb-4 font-medium">{edu.institution}</p>
                  <div className="flex flex-wrap gap-3">
                    {edu.gpa && (
                      <span className="px-4 py-2 bg-slate-50 text-slate-700 font-black text-sm rounded-xl border border-slate-200">
                        GPA: {edu.gpa}
                      </span>
                    )}
                    {edu.field && (
                      <span className="px-4 py-2 bg-blue-50 text-blue-700 font-black text-sm rounded-xl border border-blue-200">
                        {edu.field}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Projects" 
            subtitle="Real-world applications built with cutting-edge tech."
            icon={<Code size={28} />}
          />
          <div className="grid lg:grid-cols-2 gap-12">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[3.5rem] overflow-hidden flex flex-col border border-slate-100 hover:border-blue-400 transition-all hover:shadow-3xl"
              >
                <div className="p-12 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tighter">
                      {project.title}
                    </h3>
                    {project.link && project.link !== '#' && (
                      <motion.a 
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-5 bg-slate-50 rounded-2xl shadow-sm text-slate-400 hover:text-blue-600 transition-all border border-slate-100"
                      >
                        <ExternalLink size={24} />
                      </motion.a>
                    )}
                  </div>
                  <p className="text-slate-600 leading-relaxed text-xl mb-12 font-medium">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-5 py-2.5 bg-slate-50 text-sm font-black text-slate-500 rounded-xl border border-slate-200 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certs" className="py-32 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Certifications" 
            subtitle="Validated skills from industry leaders."
            icon={<Award size={28} />}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-10 bg-white rounded-[3rem] border border-slate-100 hover:border-blue-400 hover:shadow-2xl hover:scale-[1.02] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 group-hover:from-blue-600/10 group-hover:to-indigo-600/10 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-all">
                    <Award size={28} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4 text-center tracking-tight group-hover:text-blue-600 transition-colors">{cert.title}</h4>
                  <p className="text-slate-600 mb-6 text-center font-medium">{cert.issuer}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                    <span>{cert.date}</span>
                    {cert.link && (
                      <motion.a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-blue-600 hover:text-blue-700 font-bold"
                      >
                        View
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Beyond Code" 
            subtitle="What keeps me energized and inspired."
            icon={<Palette size={28} />}
          />
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {HOBBIES.map((hobby, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl border border-slate-100 hover:border-blue-300 hover:shadow-2xl transition-all overflow-hidden h-48 flex flex-col justify-end"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-white group-hover:shadow-xl transition-all">
                    <div className="text-2xl group-hover:scale-110 transition-transform">{hobby.icon}</div>
                  </div>
                  <h4 className="font-black text-lg text-slate-900 mb-2 tracking-tight">{hobby.name}</h4>
                  <p className="text-sm text-slate-600 font-medium">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Let's Connect" 
            subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."
            icon={<MessageSquare size={28} />}
          />
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 space-y-6">
              <motion.a 
                whileHover={{ scale: 1.03, y: -5 }}
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="block p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-blue-600 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-all shadow-lg">
                  <Mail size={32} />
                </div>
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Drop me a message</h4>
                <p className="text-xl font-black text-slate-900 break-all">{PERSONAL_INFO.email}</p>
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.03, y: -5 }}
                href={`tel:${PERSONAL_INFO.phone}`} 
                className="block p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-blue-600 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-all shadow-lg">
                  <Phone size={32} />
                </div>
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Give me a call</h4>
                <p className="text-xl font-black text-slate-900">{PERSONAL_INFO.phone}</p>
              </motion.a>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {[
                { name: 'GitHub', link: PERSONAL_INFO.github, icon: <Github size={36} />, color: 'group-hover:text-black group-hover:border-black' },
                { name: 'LinkedIn', link: PERSONAL_INFO.linkedin, icon: <Linkedin size={36} />, color: 'group-hover:text-blue-700 group-hover:border-blue-700' },
                { name: 'LeetCode', link: PERSONAL_INFO.leetcode, icon: <Code size={36} />, color: 'group-hover:text-yellow-600 group-hover:border-yellow-600' },
                { name: 'GeeksForGeeks', link: PERSONAL_INFO.geeksforgeeks, icon: <Terminal size={36} />, color: 'group-hover:text-green-700 group-hover:border-green-700' }
              ].map((item, idx) => (
                <motion.a 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-10 rounded-[3.5rem] bg-white border border-slate-100 transition-all group shadow-sm hover:shadow-2xl ${item.color}`}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-5 bg-gradient-to-br from-slate-50 to-slate-100 rounded-[2rem] group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:shadow-md group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-all text-slate-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 tracking-tighter text-slate-900 group-hover:text-white transition-colors">{item.name}</h3>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 bg-gradient-to-r from-slate-50 to-blue-50 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-blue-600 font-black text-xl">TK</div>
            </div>
            <p className="text-slate-500 font-bold text-sm tracking-widest uppercase mb-2">
              © {new Date().getFullYear()} THARUNKUMAR K • ALL RIGHTS RESERVED
            </p>
            <p className="text-slate-400 text-xs">Crafted with ❤️ using React & Framer Motion</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default App;

