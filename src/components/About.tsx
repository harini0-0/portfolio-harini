
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate software engineer with over 5 years of experience in developing 
              web applications and solving complex technical challenges. My journey in technology 
              started during my computer science studies, where I discovered my love for creating 
              digital solutions that make a real impact.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or mentoring aspiring developers. I believe in continuous 
              learning and staying updated with the latest industry trends.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Experience</h4>
                <p className="text-gray-600">5+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Availability</h4>
                <p className="text-gray-600">Open to Opportunities</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Focus</h4>
                <p className="text-gray-600">Full Stack Development</p>
              </div>
            </div>
          </div>
          
          <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Frontend Development</h4>
                    <p className="text-gray-600">Creating responsive and interactive user interfaces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Backend Development</h4>
                    <p className="text-gray-600">Building scalable server-side applications and APIs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Database Design</h4>
                    <p className="text-gray-600">Designing efficient and optimized database structures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Cloud Architecture</h4>
                    <p className="text-gray-600">Deploying and maintaining cloud-based solutions</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
