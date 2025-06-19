
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and interesting projects. 
            Let's connect and discuss how we can work together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">john.doe@email.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Location</p>
                      <p className="text-gray-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-lg transition-colors duration-200">
                      <Github className="text-gray-700 hover:text-blue-600" size={20} />
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-lg transition-colors duration-200">
                      <Linkedin className="text-gray-700 hover:text-blue-600" size={20} />
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-lg transition-colors duration-200">
                      <Twitter className="text-gray-700 hover:text-blue-600" size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="text-green-600 font-medium">Available for new projects</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response time:</span>
                    <span className="text-gray-800 font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Preferred contact:</span>
                    <span className="text-gray-800 font-medium">Email first</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input placeholder="Your name" className="bg-white/70" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="bg-white/70" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input placeholder="Project inquiry" className="bg-white/70" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="bg-white/70"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
