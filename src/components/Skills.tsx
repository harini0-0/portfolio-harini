
import { Card, CardContent } from "@/components/ui/card";

export const Skills = () => {
  const skillsTimeline = [
    {
      year: "2018-2019",
      title: "Frontend Foundation",
      skills: [
        { name: "HTML/CSS", level: 95, description: "Semantic markup and responsive design" },
        { name: "JavaScript", level: 88, description: "ES6+ features and DOM manipulation" },
        { name: "React", level: 85, description: "Component-based architecture" }
      ]
    },
    {
      year: "2020-2021", 
      title: "Full Stack Development",
      skills: [
        { name: "Node.js", level: 93, description: "RESTful APIs and server-side logic" },
        { name: "PostgreSQL", level: 85, description: "Database design and optimization" },
        { name: "TypeScript", level: 92, description: "Type-safe development" }
      ]
    },
    {
      year: "2022-2023",
      title: "Advanced Technologies",
      skills: [
        { name: "React/Next.js", level: 95, description: "SSR and advanced patterns" },
        { name: "AWS", level: 87, description: "Cloud infrastructure and deployment" },
        { name: "Docker", level: 90, description: "Containerization and orchestration" }
      ]
    },
    {
      year: "2024",
      title: "Modern Stack",
      skills: [
        { name: "Vue.js", level: 90, description: "Component frameworks and state management" },
        { name: "Kubernetes", level: 75, description: "Container orchestration" },
        { name: "GraphQL", level: 82, description: "Efficient data fetching" }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-orange-500 to-orange-600";
    if (level >= 80) return "from-orange-400 to-orange-500";
    if (level >= 70) return "from-pink-400 to-pink-500";
    return "from-pink-300 to-pink-400";
  };

  return (
    <div className="py-20 px-4" style={{background: 'linear-gradient(to bottom, #fef7f0, #fff7ed)'}}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills Timeline</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto"></div>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            My journey through different technologies and skills over the years
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-300 to-pink-300 rounded-full"></div>
          
          <div className="space-y-12">
            {skillsTimeline.map((period, index) => (
              <div key={index} className={`timeline-item relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row items-center`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mt-8 md:mt-0`}>
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-lg font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                            {period.year}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{period.title}</h3>
                      </div>
                      
                      <div className="space-y-6">
                        {period.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="group">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-800 font-semibold text-lg">{skill.name}</span>
                              <span className="text-orange-600 font-bold">{skill.level}%</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">{skill.description}</p>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                              <div 
                                className={`h-3 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 ease-out shadow-sm`}
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Achievements</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    AWS
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg">AWS Solutions Architect</h4>
                  <p className="text-gray-600">Professional Level</p>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    K8s
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg">Kubernetes Administrator</h4>
                  <p className="text-gray-600">Certified (CKA)</p>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-orange-400 to-pink-500 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    GCP
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg">Google Cloud Engineer</h4>
                  <p className="text-gray-600">Professional Level</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
