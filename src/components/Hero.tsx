
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            JD
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
          John <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">Doe</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in">
          Full Stack Developer & Software Engineer
        </p>
        
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Passionate about creating innovative solutions and building scalable applications. 
          I specialize in modern web technologies and love turning complex problems into simple, elegant designs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button size="lg" className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 border-orange-300 text-orange-700 hover:bg-orange-50">
            Download CV
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-600 hover:text-orange-600 transition-colors duration-200"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </div>
  );
};
