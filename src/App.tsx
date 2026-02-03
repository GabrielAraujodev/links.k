
import perfil from './assets/perfil.jpg'
import { FaInstagram, FaGithub, FaLinkedinIn, FaXTwitter, FaGlobe } from "react-icons/fa6";
import './App.css'

function App() {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gabriel-augusto-alves-de-araujo-98b89b23a/",
      icon: <FaLinkedinIn />,
      color: "hover:text-blue-400",
      borderColor: "border-blue-500/50",
      glow: "shadow-blue-500/20"
    },
    {
      name: "GitHub",
      url: "https://github.com/GabrielAraujodev",
      icon: <FaGithub />,
      color: "hover:text-white",
      borderColor: "border-slate-500/50",
      glow: "shadow-slate-500/20"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/gabrielalves_16/",
      icon: <FaInstagram />,
      color: "hover:text-pink-400",
      borderColor: "border-pink-500/50",
      glow: "shadow-pink-500/20"
    },
    {
      name: "X",
      url: "https://x.com/gabitus_",
      icon: <FaXTwitter />,
      color: "hover:text-white",
      borderColor: "border-slate-500/50",
      glow: "shadow-slate-500/20"
    },
    {
      name: "Portfólio",
      url: "https://gabriel-augusto-alves-de-araujo.vercel.app/",
      icon: <FaGlobe />,
      color: "hover:text-emerald-400",
      borderColor: "border-emerald-500/50",
      glow: "shadow-emerald-500/20"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-12">
      {/* Main Container */}
      <div className="w-full max-w-md space-y-12 animate-fade-in-up">

        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img
              className="relative rounded-full h-40 w-40 sm:h-48 sm:w-48 object-cover border-4 border-slate-900 shadow-2xl animate-float"
              src={perfil}
              alt="Gabriel Alves"
            />
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              Gabriel Alves
            </h1>
            <p className="text-indigo-400 font-medium tracking-wide flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              @Gabrielalves_16
            </p>
          </div>
        </div>

        {/* Social Icons Bar */}
        <div className="flex justify-center gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl text-slate-400 ${link.color} transition-all duration-300 hover:scale-125`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Links List */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-4 p-4 w-full bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl transition-all duration-500 hover:bg-slate-800/60 hover:border-white/20 overflow-hidden ${link.glow} hover:shadow-2xl`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Shine Effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-sweep pointer-events-none" />

              <span className={`text-2xl ${link.color} transition-colors duration-300`}>
                {link.icon}
              </span>
              <span className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
                {link.name}
              </span>

              <div className="ml-auto w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/5 group-hover:border-white/10 transition-all duration-300">
                <svg className="w-4 h-4 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center pt-8">
          <p className="text-slate-500 text-sm font-light">
            &copy; {new Date().getFullYear()} Gabriel &bull; 
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App

