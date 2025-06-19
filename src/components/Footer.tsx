
import { Heart, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">John Doe</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating innovative solutions 
              and building scalable applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">About</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Projects</a></li>
              <li><a href="#publications" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Publications</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <p className="text-gray-400 mb-2">john.doe@email.com</p>
            <p className="text-gray-400 mb-2">+1 (555) 123-4567</p>
            <p className="text-gray-400">San Francisco, CA</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="mx-2 text-orange-500" /> by John Doe © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};
