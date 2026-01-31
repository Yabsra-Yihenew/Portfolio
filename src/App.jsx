import React, { useState, useEffect, useRef } from 'react';
import { 
  Rocket, 
  ChevronRight, 
  Mail, 
  Linkedin, 
  Phone, 
  Github,
  MessageSquare, 
  Cpu, 
  Layers, 
  BarChart3, 
  Globe, 
  Palette, 
  FileText, 
  Briefcase, 
  ArrowUpRight,
  GraduationCap,
  Award,
  Code,
  LineChart,
  X,
  ArrowUp,
  Image as ImageIcon
} from 'lucide-react';

import EwnetSolutionLogo from '/Images/EwnetSolutionLogo.png';
import EwnetS1 from '/Images/EwnetS1.png';
import EwnetS2 from '/Images/EwnetS2.png';
import EwnetS3 from '/Images/EwnetS3.png';
import Bens from '/Images/Bens.png';
import Bensp from '/Images/BensP.png';
import Telemedicine from '/Images/Telemedicine.png';
import Yesi from '/Images/YesI.png';
import Y from '/Images/Y.png';
import Tech1 from '/Images/Tech1.png';
import Tech2 from '/Images/Tech2.png';
import Tech3 from '/Images/Tech3.png';
import Tech4 from '/Images/Tech4.png';
import ui1 from '/Images/UI1.png';
import ui2 from '/Images/UI2.png';
import Alemhabesha from '/Images/Alemhabesha.png';
import Img3 from '/Images/3.png';
import Img4 from '/Images/4.png';
import cover from '/Images/cover.png';
import nova from '/Images/Nova.png';

// --- Animation Hook ---
const useScrollReveal = () => {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, revealed];
};

// --- Components ---

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
      scrolled ? 'bg-[#0a0a0b]/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-center items-center relative">
        <div className="flex items-center space-x-6 md:space-x-14 text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-gray-400">
          {['About', 'Focus', 'Portfolio', 'Vision'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-all duration-300 cursor-pointer relative group py-1">
              <span className="relative z-10">{item}</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </a>
          ))}
        </div>
        
        <div className="absolute right-6 hidden lg:block">
          <a href="#contact" className="bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, centered = false }) => {
  const [ref, revealed] = useScrollReveal();
  return (
    <div 
      ref={ref}
      className={`mb-16 transition-all duration-1000 transform ${
        revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-xs font-black tracking-[0.5em] uppercase text-blue-500 mb-4">{subtitle}</h2>
      <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-tight">{title}</h3>
    </div>
  );
};

const FocusCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const [ref, revealed] = useScrollReveal();
  return (
    <div 
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-700 group transform ${
        revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
        <Icon className="text-blue-400 group-hover:text-white" size={28} />
      </div>
      <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{title}</h4>
      <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </div>
  );
};

const Modal = ({ isOpen, onClose, project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = project ? [
    project.modalImage || project.image,
    ...(project.detailImages || [])
  ].filter(Boolean) : [];

  useEffect(() => {
    if (isOpen) setCurrentSlide(0);
  }, [isOpen, project]);

  useEffect(() => {
    if (!isOpen || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isOpen, slides.length]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-5xl bg-[#0d0d0f] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl transform transition-all animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-10 p-3 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors border border-white/10 backdrop-blur-md"
        >
          <X size={24} />
        </button>
        
        <div className="p-6 md:p-16">
          <div className="max-w-4xl mx-auto">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">{project.type}</span>
              </div>
              
              <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">{project.name}</h2>
              
              <div className="space-y-8">
                <p className="text-base md:text-xl text-gray-400 leading-relaxed font-medium">
                  {project.longDesc || project.desc}
                </p>
                
                {/* Project Image Section */}
                <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3] md:aspect-video relative group mt-8">
                    {slides.map((slide, index) => (
                      <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                          index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      >
                        <img 
                            src={slide} 
                            alt={`${project.name} slide ${index + 1}`} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                    ))}
                    
                    {/* Slider Indicators */}
                    {slides.length > 1 && (
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                        {slides.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              idx === currentSlide ? 'bg-blue-500 w-8' : 'bg-white/30 w-2 hover:bg-white'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                </div>
              </div>
            </div>
            
            {project.link && (
              <div className="mt-10">
                <a 
                  href={project.link} 
                  target="_blank" 
                  className="inline-flex items-center space-x-4 px-10 py-5 bg-white text-black font-black rounded-[24px] transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/10 group"
                >
                  <span className="uppercase tracking-widest text-xs">Launch Site</span>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-3 bg-white/5 backdrop-blur-md border border-blue-500/50 text-white rounded-full shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
};

// --- Main App ---

export default function App() {
  const [heroRevealed, setHeroRevealed] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => setHeroRevealed(true), []);

  useEffect(() => {
    // Set browser tab icon
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = Y;
  }, []);

  const projects = [
    { 
      name: "Ewnet Solutions", 
      type: "Venture Foundation", 
      desc: "The central hub for our technology-driven ecosystem, focusing on agile delivery and client scaling.",
      longDesc: "Ewnet Solutions serves as the primary gateway for digital transformation. This platform integrates complex client requirements with streamlined development workflows, ensuring that every solution delivered is both technically sound and business-aligned.",
      link: "https://ewnetsolutions.netlify.app",
      image: EwnetSolutionLogo,
      modalImage: EwnetS1,
      detailImages: [EwnetS2, EwnetS3],
      tech: ["Next.js", "Tailwind CSS", "Cloud Architecture", "CI/CD"],
      impactTitle: "Global Scalability",
      impactDesc: "Infrastructure engineered for high-availability and zero-downtime deployment cycles.",
      impactStat: "99.9% Uptime"
    },
    { 
      name: "Business Documentation", 
      type: "Strategic Services", 
      desc: "Professional business profiles and strategic proposals designed to secure partnerships.",
      longDesc: "We craft high-impact business documentation that communicates value clearly and persuasively. From comprehensive company profiles to detailed project proposals, our documents are designed to align with industry standards and help businesses secure critical opportunities.",
      image: Bens,
      modalImage: Bens,
      detailImages: [Bensp, Telemedicine, Yesi],
      tech: ["Adobe InDesign", "Copywriting", "Strategic Planning", "Branding"],
      impactTitle: "Strategic Growth",
      impactDesc: "Facilitating partnerships through clear, professional communication.",
      impactStat: "High Conversion"
    },
    { 
      name: "Website Development", 
      type: "Web Engineering", 
      desc: "Scalable digital platforms engineered for performance, accessibility, and long-term growth.",
      longDesc: "We don't just build websites; we build digital assets. By combining clean code with strategic design, we create fast, secure, and scalable web platforms that drive user engagement and business growth.",
      image: Tech1,
      modalImage: Tech1,
      detailImages: [Tech2, Tech3, Tech4],
      tech: ["React", "Next.js", "Tailwind", "Node.js"],
      impactTitle: "Digital Impact",
      impactDesc: "Enhanced online visibility and user engagement through performance-first engineering.",
      impactStat: "Fast Load Times"
    },
    { 
      name: "UI Design & Graphics", 
      type: "Creative Design", 
      desc: "Compelling visual narratives and intuitive interfaces that elevate brand presence.",
      longDesc: "Design is the silent ambassador of your brand. We craft pixel-perfect user interfaces and comprehensive graphic assets—from logos to marketing collateral—that ensure your digital presence is not only functional but unforgettable.",
      image: ui1,
      modalImage: ui1,
      detailImages: [ui2, Alemhabesha, Img3, Img4, cover, nova],
      tech: ["Figma", "Photoshop", "Illustrator", "Brand Identity"],
      impactTitle: "Visual Impact",
      impactDesc: "Enhanced user engagement through consistent and accessible design systems.",
      impactStat: "High Retention"
    }
  ];

  const handleOpenProject = (proj) => {
    setSelectedProject(proj);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-gray-300 selection:bg-blue-500 selection:text-white font-sans scroll-smooth">
      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-900 rounded-full blur-[150px]" />
          <div className="absolute top-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-5xl transition-all duration-1000 transform ${heroRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 shadow-xl backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white">Technology Entrepreneur · Product Builder</span>
            </div>
            
            <h1 className="text-5xl md:text-9xl font-black text-white tracking-tighter mb-8 leading-[0.9] md:leading-[0.85] uppercase">
              Yabsra <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600">Yihenew.</span>
            </h1>

            <h2 className="text-xl md:text-4xl font-bold text-gray-200 mb-8 tracking-tight">
              Building Technology for Real Business Impact.
            </h2>
            
            <p className="text-base md:text-xl text-gray-400 mb-10 max-w-3xl leading-relaxed font-medium">
              I am a technology-driven entrepreneur and the founder of <span className="text-white border-b border-blue-500/50 hover:text-blue-400 cursor-pointer transition-colors"><a href="https://ewnetsolutions.netlify.app/" target="_blank" rel="noopener noreferrer">Ewnet Solutions</a> </span>. 
              I design and build digital products that combine engineering excellence with strategic business value.
            </p>

            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-8">
              <a href="#portfolio" className="px-10 py-4 bg-white text-black font-black rounded-2xl hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-2 text-center uppercase tracking-widest text-sm shadow-2xl shadow-white/5">
                View Portfolio
              </a>
              <a href="#contact" className="px-10 py-4 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center space-x-3 uppercase tracking-widest text-sm backdrop-blur-sm">
                <span>Start a Project</span>
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About & Education Section */}
      <section id="about" className="py-32 bg-[#0d0d0f] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:col-span-2 pl-6 md:pl-12 lg:pl-20">
                <br />
              <SectionHeading title="Engineering Excellence & Strategic Vision" subtitle="About Me" />
              <div className="space-y-6 text-base md:text-lg text-gray-400 leading-relaxed font-medium">
                <p>
                  I’m <span className="text-white">Yabsra Yihenew</span>, a curious builder who believes progress comes from understanding many things, not just one.
                </p>
                <p>
                  I’m driven by impact. I enjoy learning how systems work people, businesses, technology, and ideas and connecting them to solve real problems. I don’t limit myself to one field; I think across disciplines, because the best solutions often live between them.
                </p>
                <p>
                  I see problems as opportunities. I like breaking complexity into clarity, turning ideas into action, and helping others see what’s possible. Whether it’s strategy, systems, design, or execution, I focus on creating work that makes sense, lasts, and matters.
                </p>
                <p>
                  My vision is simple: <span className="text-white">build meaningful solutions, inspire others to think bigger, and leave things better than I found them.</span>
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8 pt-8">
                  <div className="p-8 md:p-16 rounded-3xl bg-white/5 border border-white/10 min-h-[300px]">
                    <GraduationCap className="text-blue-500 mb-4" size={24} />
                    <h5 className="text-white font-bold mb-3">Education</h5>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-black uppercase tracking-wider text-gray-500">Science</p>
                        <p className="text-sm text-white">B.Sc. in Computer Science</p>
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-wider text-gray-500">Business</p>
                        <p className="text-sm text-white">B.A. in Management</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:p-16 rounded-3xl bg-white/5 border border-white/10 min-h-[300px]">
                    <Award className="text-blue-500 mb-4" size={24} />
                    <h5 className="text-white font-bold mb-3">Key Experience</h5>
                    <ul className="text-xs text-gray-400 space-y-3">
                      <li className="flex items-start space-x-2">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                        <span>Founder of <strong className="text-gray-200">Ewnet Solutions</strong></span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                        <span>IT Specialist & Systems Developer</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                        <span>Business Development Architect</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                        <span>Graphics, Product Design & UI/UX</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

          {/* Quote card placed under Identity section (full-width) */}
          <div className="mt-10 w-full">
            <div className="container mx-auto px-6">
              <div className="p-10 md:p-14 rounded-[40px] bg-gradient-to-br from-blue-600/10 to-transparent border border-white/5 backdrop-blur-sm relative group overflow-hidden shadow-2xl max-w-4xl mx-auto w-full">
                <div className="absolute top-0 right-0 p-8 text-blue-500 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Cpu size={120} />
                </div>
                <blockquote className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight relative z-10 italic text-center">
                  "I build the bridge between great ideas and the technology that makes them real."
                </blockquote>
              </div>
            </div>
          </div>
      </section>

      {/* Focus Areas */}
      <section id="focus" className="py-32">
        <div className="container mx-auto px-6">
          <SectionHeading title="Core Competencies" subtitle="Focus" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FocusCard 
              icon={Layers} 
              title="Product Engineering" 
              description="Building scalable web platforms using modern tech stacks and resilient cloud architectures." 
              delay={100}
            />
            <FocusCard 
              icon={FileText} 
              title="Business Development" 
              description="Crafting high-impact business proposals, professional company profiles, and strategic growth blueprints." 
              delay={200}
            />
            <FocusCard 
              icon={Palette} 
              title="UI/UX & Graphics" 
              description="Creating high-fidelity, functional experiences and visual brand identities that prioritize clarity and user conversions." 
              delay={300}
            />
            <FocusCard 
              icon={BarChart3} 
              title="Market Strategy" 
              description="Aligning product roadmaps with business objectives and long-term venture scaling." 
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-[#0d0d0f]">
        <div className="container mx-auto px-6">
          <SectionHeading title="Recent Projects" subtitle="Portfolio" />
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((proj, i) => {
              const [ref, revealed] = useScrollReveal();
              return (
                <div 
                  key={i} 
                  ref={ref}
                  onClick={() => handleOpenProject(proj)}
                  className={`group cursor-pointer relative rounded-[40px] overflow-hidden bg-white/5 border border-white/10 transition-all duration-1000 transform hover:scale-[1.02] ${
                    revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                >
                  {/* Background Image Container */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={proj.image} 
                      alt={proj.name} 
                      className="w-full h-full object-cover opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f]/80 to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 p-8 md:p-12 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-16">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 px-4 py-1.5 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-full">{proj.type}</span>
                      <div className="p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                        <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                      </div>
                    </div>
                    
                    <h4 className="text-3xl md:text-4xl font-black text-white mb-6 group-hover:text-blue-400 transition-colors tracking-tighter">{proj.name}</h4>
                    <p className="text-gray-400 text-base md:text-lg mb-12 leading-relaxed max-w-sm line-clamp-2">{proj.desc}</p>
                    
                    <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                      <div className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 group-hover:text-white transition-colors">
                        Explore
                      </div>
                      <div className="flex -space-x-3">
                         {proj.tech.slice(0, 3).map((_, idx) => (
                             <div key={idx} className="w-8 h-8 rounded-full bg-white/5 border border-[#0d0d0f] flex items-center justify-center backdrop-blur-sm">
                                <ImageIcon size={12} className="text-gray-600"/>
                             </div>
                         ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-32 relative overflow-hidden text-center">
        <div className="container mx-auto px-6">
          <Rocket className="text-blue-500 mx-auto mb-8 animate-bounce" size={48} />
          <SectionHeading title="The Long Game" subtitle="Vision" centered />
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed italic">
              "My ambition is to build with purpose and think beyond one discipline, creating clarity today while shaping long-term impact for people, businesses, and communities."
            </p>
            <div className="flex justify-center items-center space-x-6">
              <div className="h-px flex-1 bg-white/10" />
              <div className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Build · Scale · Impact</div>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-32 border-t border-white/5 bg-gradient-to-b from-transparent to-blue-500/10">
        <div className="container mx-auto px-6 text-center">
          <SectionHeading title="Let's Build Something" subtitle="Contact" centered />
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
            Open to strategic partnerships, global collaborations, and ambitious ventures.
          </p>
          
          <div className="flex flex-col items-center space-y-10 mb-24">
            <a 
              href="mailto:yabsrayabsra2222@gmail.com" 
              className="group flex items-center space-x-4 px-12 py-5 bg-white text-black font-black rounded-3xl hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-2 shadow-2xl shadow-blue-500/20 uppercase tracking-[0.2em] text-sm"
            >
              <Mail size={24} />
              <span>Email Me</span>
            </a>

            <div className="flex items-center space-x-10">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/yabsra-yihenew-07ab96174/" },
                { icon: Github, label: "GitHub", href: "https://github.com/Yabsra-Yihenew" },
                { icon: Phone, label: "Call", href: "tel:0911365411" },
                { icon: MessageSquare, label: "WhatsApp", href: "https://wa.me/qr/MQTNL2XXYSYNC1" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  target={item.label === "Call" ? undefined : "_blank"}
                  rel={item.label === "Call" ? undefined : "noopener noreferrer"}
                  className="text-gray-500 hover:text-blue-500 transition-all transform hover:scale-125" 
                  title={item.label}
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/5">
            <div className="flex flex-col items-center space-y-4 text-gray-400 font-medium pb-6">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-500" />
                <span>yabsrayabsra2222@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-500" />
                <span>0911365411</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin size={18} className="text-blue-500" />
                <span>Yabsra Yihenew</span>
              </div>
            </div>
            <div className="text-[11px] uppercase tracking-[0.5em] text-gray-500 font-black">
              &copy; 2026 
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold">
              Developed by <a href="https://ewnetsolutions.netlify.app" target="_blank" className="text-blue-500 hover:text-white transition-colors border-b border-blue-500/30">Ewnet Solutions</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Overlay */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject} 
      />
      
      <ScrollToTop />
    </div>
  );
}
