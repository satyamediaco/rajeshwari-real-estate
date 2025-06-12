
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, MessageCircle, Phone } from "lucide-react";

export const CTASection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi! I want to join the FREE Real Estate Training", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+919876543210", "_self");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Your Real Estate Empire
            <br />
            Starts <span className="underline text-yellow-400">TODAY</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-medium">
            Stop dreaming about financial freedom. Stop watching others succeed while you struggle. 
            <strong className="text-yellow-400"> The time is NOW.</strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              onClick={handleWhatsApp}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-12 py-8 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="mr-3 h-8 w-8" />
              JOIN FREE VIA WHATSAPP
              <ArrowRight className="ml-3 h-8 w-8" />
            </Button>
            <Button 
              onClick={handleCall}
              variant="outline"
              size="lg"
              className="border-4 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-12 py-8 text-xl rounded-full transition-all duration-300"
            >
              <Phone className="mr-3 h-8 w-8" />
              CALL: +91-98765-43210
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-4 border border-white/20">
              <Shield className="h-6 w-6 text-white" />
              <span className="font-bold text-white">100% Money Back Guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-4 border border-white/20">
              <Award className="h-6 w-6 text-white" />
              <span className="font-bold text-white">Certified Training Program</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-4 border border-white/20">
              <ArrowRight className="h-6 w-6 text-white" />
              <span className="font-bold text-white">Instant Access - FREE</span>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-white font-bold text-xl mb-4">
              "The difference between successful people and unsuccessful people is that successful people take action."
            </p>
            <p className="text-white font-medium text-lg">
              - Team Rajeshwari
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
