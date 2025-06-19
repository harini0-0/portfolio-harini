
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2018 - 2020",
      gpa: "3.9/4.0",
      achievements: [
        "Specialized in Machine Learning and Artificial Intelligence",
        "Graduate Research Assistant in AI Lab",
        "Published 2 papers in top-tier conferences"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2014 - 2018",
      gpa: "3.8/4.0",
      achievements: [
        "Summa Cum Laude graduate",
        "President of Computer Science Club",
        "Dean's List for 6 semesters"
      ]
    }
  ];

  return (
    <div className="py-20 px-4 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                      <p className="text-lg text-gray-700 font-medium">{edu.school}</p>
                      <p className="text-gray-600">{edu.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar size={16} className="mr-2" />
                      {edu.period}
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
