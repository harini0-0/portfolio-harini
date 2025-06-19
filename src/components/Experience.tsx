
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      position: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Lead developer for enterprise web applications serving 100k+ users. Architected and implemented microservices infrastructure that improved system reliability by 40%.",
      achievements: [
        "Led a team of 5 developers in building a real-time analytics dashboard",
        "Reduced application load time by 60% through performance optimization",
        "Implemented CI/CD pipeline that decreased deployment time by 75%",
        "Mentored junior developers and conducted technical interviews"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "TypeScript"]
    },
    {
      position: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Palo Alto, CA",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Full-stack developer in a fast-paced startup environment. Built the entire customer-facing web application from scratch and helped scale the platform to support rapid user growth.",
      achievements: [
        "Developed and launched 3 major product features that increased user engagement by 45%",
        "Built RESTful APIs serving 50k+ daily requests",
        "Implemented automated testing suite with 90% code coverage",
        "Collaborated with product team to define technical requirements"
      ],
      technologies: ["Vue.js", "Python", "Django", "MySQL", "Redis", "GCP"]
    },
    {
      position: "Software Engineering Intern",
      company: "Google",
      location: "Mountain View, CA",
      period: "Summer 2019",
      type: "Internship",
      description: "Worked on the Chrome team to improve browser performance and user experience. Contributed to open-source projects and gained experience with large-scale software development.",
      achievements: [
        "Implemented performance improvements that reduced memory usage by 15%",
        "Contributed to Chromium open-source project",
        "Presented findings to senior engineering team",
        "Collaborated with cross-functional teams across multiple time zones"
      ],
      technologies: ["C++", "JavaScript", "Chromium", "Performance Analysis"]
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.position}</h3>
                      <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 mt-2">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.type}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
