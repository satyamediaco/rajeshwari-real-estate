
import { Eye, TrendingDown, Handshake, Brain, Users, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const CurriculumSection = () => {
  const topics = [
    {
      icon: Eye,
      title: "How to Identify a Potential Customer",
      description: "Learn to spot qualified leads and understand buyer psychology to focus your efforts on the right prospects.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingDown,
      title: "Why Customers Visit But Don't Close Deals",
      description: "Discover the common reasons prospects don't convert and proven strategies to overcome objections.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Handshake,
      title: "Proven Sales Techniques",
      description: "Master time-tested sales methodologies that consistently close deals and build lasting relationships.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Brain,
      title: "How to Run Your Real Estate Business Smartly",
      description: "Strategic business planning, market analysis, and operational excellence for sustainable growth.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "How to Build Your Dream Team",
      description: "Recruit, train, and manage a high-performing real estate team that multiplies your success.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: RefreshCw,
      title: "Follow-up Strategies That Work",
      description: "Systematic follow-up processes that nurture leads and convert them into loyal customers.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What You'll Learn in This <span className="text-blue-600">FREE</span> Training
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master these 6 crucial areas that separate successful real estate agents from the rest
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {topics.map((topic, index) => (
            <Card 
              key={index}
              className="bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 shadow-lg overflow-hidden group"
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${topic.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <topic.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                <p className="text-gray-600 leading-relaxed">{topic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">All This Knowledge - Absolutely FREE!</h3>
            <p className="text-xl mb-6">Worth ₹25,000+ in consulting fees, yours at no cost</p>
            <button 
              onClick={() => window.open("https://wa.me/919876543210?text=Hi! I want to join the FREE Real Estate Training", "_blank")}
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              SECURE YOUR FREE SEAT NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
