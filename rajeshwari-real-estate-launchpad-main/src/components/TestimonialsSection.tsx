
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Real Estate Agent, Mumbai",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "From ₹2L to ₹50L in just 8 months! Team Rajeshwari's training completely transformed my approach to real estate. The techniques are pure gold!",
      income: "₹2L → ₹50L"
    },
    {
      name: "Arjun Patel",
      role: "Property Consultant, Delhi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "I was struggling for 3 years until I found this program. Now I'm closing deals worth crores every month. This training is a game-changer!",
      income: "₹5L → ₹80L"
    },
    {
      name: "Sneha Reddy",
      role: "Independent Agent, Bangalore",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "The psychology techniques taught here are incredible. I now understand my clients better and close deals 3x faster than before!",
      income: "₹3L → ₹45L"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories That Will <span className="text-green-600">INSPIRE</span> You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real people, real results, real transformations. See what's possible when you have the right training.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{testimonial.content}</p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {testimonial.income}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold text-black mb-4">Will You Be Our Next Success Story?</h3>
          <p className="text-xl text-black mb-6">Join thousands who've already transformed their lives.</p>
          <button 
            onClick={() => window.open("https://wa.me/919876543210?text=Hi! I want to join the FREE Real Estate Training", "_blank")}
            className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300"
          >
            YES, I WANT TO SUCCEED!
          </button>
        </div>
      </div>
    </section>
  );
};
