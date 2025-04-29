
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Code, 
  Zap, 
  Palette, 
  Github, 
  Twitter, 
  ArrowRight, 
  Menu, 
  X,
  Terminal,
  Layers,
  Cpu,
  ChevronRight,
  Star,
  Check,
  ArrowUpRight
} from 'lucide-react';
import { Button } from './components/ui/button';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef(null);
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Code Generation",
      description: "Generate high-quality code for your projects with a simple prompt."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Get results in seconds, not minutes. Blink is optimized for speed."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Beautiful UI",
      description: "Create stunning user interfaces with modern design principles."
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Full Stack",
      description: "From frontend to backend, Blink handles your entire development stack."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Customizable",
      description: "Tailor your projects with flexible options and configurations."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI Powered",
      description: "Leveraging cutting-edge AI to understand and implement your vision."
    }
  ];

  const testimonials = [
    {
      quote: "Blink has completely transformed how I build web applications. What used to take days now takes minutes.",
      author: "Sarah Johnson",
      role: "Frontend Developer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "The code quality is impressive. I was skeptical at first, but Blink produces clean, maintainable code that follows best practices.",
      author: "Michael Chen",
      role: "Senior Software Engineer",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "As a designer who doesn't code, Blink has been a game-changer. I can now bring my designs to life without depending on developers.",
      author: "Emma Rodriguez",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Describe Your Idea",
      description: "Tell Blink what you want to build using natural language.",
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      step: "02",
      title: "Review & Refine",
      description: "Blink generates code and UI. Review and request changes as needed.",
      icon: <Code className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Deploy & Share",
      description: "Deploy your finished project with one click and share it with the world.",
      icon: <ArrowUpRight className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 blur-sm opacity-50 rounded-full"></div>
                <img src="/favicon.svg" alt="Blink Logo" className="h-8 w-8 relative" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Blink
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-blue-500 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-slate-600 hover:text-blue-500 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="text-slate-600 hover:text-blue-500 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                Testimonials
              </a>
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white shadow-md hover:shadow-lg transition-all">
                Get Started
              </Button>
            </nav>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-slate-600 dark:text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-slate-900 shadow-lg overflow-hidden"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                <a 
                  href="#features" 
                  className="block py-2 px-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className="block py-2 px-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </a>
                <a 
                  href="#testimonials" 
                  className="block py-2 px-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </a>
                <div className="pt-2">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white shadow-md">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                Build <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">beautiful</span> apps in a blink
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                The world's #1 AI fullstack engineer. Create stunning websites, web apps, and mobile apps with just a few prompts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-6 h-auto text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  Start Building <ArrowRight className="ml-2" />
                </Button>
                <Button variant="outline" className="border-slate-300 dark:border-slate-700 px-8 py-6 h-auto text-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                  View Examples
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-16 relative"
            >
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-400/20 absolute inset-0 rounded-xl blur-xl"></div>
              <div className="relative bg-white dark:bg-slate-800 shadow-xl rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="bg-slate-100 dark:bg-slate-900 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-3 rounded-full shadow-md">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">Prompt</p>
                      <p className="text-slate-900 dark:text-white font-medium">Create a landing page for my new SaaS product with a modern design.</p>
                    </div>
                  </div>
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">Blink is generating...</p>
                    <div className="h-40 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-150"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-slate-900 relative">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/20 bg-[length:20px_20px] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Everything you need to build amazing applications quickly and efficiently.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 shadow-md group-hover:shadow-lg transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-400/10 dark:bg-cyan-600/5 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                How Blink Works
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                A simple three-step process to bring your ideas to life.
              </p>
            </motion.div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="absolute top-24 left-[calc(16.67%-8px)] right-[calc(16.67%-8px)] h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <span className="text-2xl font-bold text-white">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 text-center">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-center">
                      {item.description}
                    </p>
                    <div className="mt-4 flex justify-center">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden md:block">
                      <ChevronRight className="w-8 h-8 text-blue-500" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent dark:from-slate-900 dark:to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent dark:from-slate-900 dark:to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                What People Are Saying
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Developers and designers love using Blink for their projects.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-xl blur-xl"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <div className="relative h-32 sm:h-24">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <p className="text-slate-600 dark:text-slate-300 text-lg text-center italic">
                        "{testimonials[activeTestimonial].quote}"
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                <div className="flex items-center justify-center mt-8">
                  <div className="flex -space-x-2 mr-4">
                    {testimonials.map((testimonial, i) => (
                      <div 
                        key={i} 
                        className={`relative rounded-full border-2 transition-all duration-300 ${i === activeTestimonial ? 'border-blue-500 scale-110 z-10' : 'border-white dark:border-slate-800 scale-100 z-0'}`}
                        onClick={() => setActiveTestimonial(i)}
                      >
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="w-10 h-10 rounded-full cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-left">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTestimonial}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="font-medium text-slate-900 dark:text-white">
                          {testimonials[activeTestimonial].author}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {testimonials[activeTestimonial].role}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
                
                <div className="flex justify-center mt-6">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className={`w-2 h-2 mx-1 rounded-full transition-all ${i === activeTestimonial ? 'bg-blue-500 w-6' : 'bg-slate-300 dark:bg-slate-600'}`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1920&q=60')] opacity-10 bg-cover bg-center"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to build something amazing?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of developers and designers who are already using Blink to create beautiful applications.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-6 h-auto text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                Get Started for Free
              </Button>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5" /> No credit card required
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5" /> Free tier available
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5" /> Cancel anytime
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 blur-sm opacity-70 rounded-full"></div>
                  <img src="/favicon.svg" alt="Blink Logo" className="h-8 w-8 relative" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Blink
                </span>
              </div>
              <p className="text-slate-400 mb-4">
                The world's #1 AI fullstack engineer.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform">
                  <Github size={20} />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Features</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Pricing</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Examples</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block">About</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Terms</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Privacy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Cookies</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Licenses</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} Blink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;