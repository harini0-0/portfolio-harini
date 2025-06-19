
import { FileText, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Publications = () => {
  const publications = [
    {
      title: "Machine Learning Approaches for Real-time Web Application Performance Optimization",
      authors: "John Doe, Dr. Sarah Johnson, Prof. Michael Chen",
      venue: "International Conference on Web Engineering (ICWE 2023)",
      date: "June 2023",
      type: "Conference Paper",
      abstract: "This paper presents a novel approach to optimizing web application performance using machine learning algorithms to predict and prevent performance bottlenecks in real-time systems.",
      citations: 23,
      link: "#",
      tags: ["Machine Learning", "Web Performance", "Real-time Systems"]
    },
    {
      title: "Scalable Microservices Architecture for E-commerce Platforms",
      authors: "John Doe, Dr. Emily Rodriguez",
      venue: "IEEE International Conference on Software Architecture (ICSA 2022)",
      date: "March 2022",
      type: "Conference Paper",
      abstract: "An in-depth analysis of microservices patterns and their implementation in high-traffic e-commerce environments, with case studies showing 40% improvement in system reliability.",
      citations: 45,
      link: "#",
      tags: ["Microservices", "E-commerce", "Software Architecture"]
    },
    {
      title: "Security Considerations in Modern JavaScript Frameworks",
      authors: "John Doe, Dr. Alex Thompson",
      venue: "Journal of Web Security",
      date: "September 2021",
      type: "Journal Article",
      abstract: "A comprehensive review of security vulnerabilities in popular JavaScript frameworks and best practices for secure development in modern web applications.",
      citations: 67,
      link: "#",
      tags: ["Web Security", "JavaScript", "Frontend Development"]
    },
    {
      title: "Cross-Platform Mobile Development: Performance Analysis",
      authors: "John Doe, Dr. Lisa Wang, Dr. Mark Brown",
      venue: "Mobile Computing Conference (MCC 2021)",
      date: "August 2021",
      type: "Conference Paper",
      abstract: "Comparative analysis of performance metrics across different cross-platform mobile development frameworks, including React Native, Flutter, and Xamarin.",
      citations: 34,
      link: "#",
      tags: ["Mobile Development", "Performance Analysis", "Cross-Platform"]
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Publications & Research</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0 flex-1">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg">
                      <FileText className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">{pub.title}</h3>
                      <p className="text-gray-700 mb-2">{pub.authors}</p>
                      <p className="text-gray-600 font-medium">{pub.venue}</p>
                      <div className="flex items-center space-x-4 text-gray-600 mt-2">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {pub.date}
                        </div>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                          {pub.citations} citations
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start lg:items-end space-y-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {pub.type}
                    </span>
                    <Button variant="outline" size="sm">
                      <ExternalLink size={16} className="mr-2" />
                      View Paper
                    </Button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Abstract:</h4>
                  <p className="text-gray-600 leading-relaxed">{pub.abstract}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Keywords:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tag}
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
