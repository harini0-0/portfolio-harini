
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built to handle high traffic and scale horizontally.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
      features: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Admin analytics dashboard",
        "Mobile-responsive design"
      ]
    },
    {
      title: "AI Task Manager",
      description: "An intelligent task management application that uses machine learning to prioritize tasks, suggest optimal schedules, and provide productivity insights.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Python", "TensorFlow", "FastAPI", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
      features: [
        "AI-powered task prioritization",
        "Smart scheduling suggestions",
        "Productivity analytics",
        "Team collaboration tools"
      ]
    },
    {
      title: "Real-time Chat Application",
      description: "A scalable real-time messaging platform with video calling, file sharing, and group chat functionality. Supports thousands of concurrent users.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Socket.io", "Node.js", "Redis", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2022",
      features: [
        "Real-time messaging",
        "Video/audio calling",
        "File sharing",
        "Group chat management"
      ]
    }
  ];

  return (
    <div className="py-20 px-4 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {project.date}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
