// import Navbar from './components/ui/Navbar';
// import Hero from './components/sections/Hero';
// import About from './components/sections/About';
// import Skills from './components/sections/Skills';
// import Projects from './components/sections/Projects';
// import Experience from './components/sections/Experience';
// import Contact from './components/sections/Contact';
// import Footer from './components/ui/Footer';
// import GithubSection from './components/sections/GithubSection';

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <GithubSection />
//       <Projects />
//       <Experience />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }

// src/app/page.tsx
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import GithubSection from './components/sections/GithubSection';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';
import SocialFloat from './components/ui/SocialFloat';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <GithubSection />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <SocialFloat /> 
    </main>
  );
}