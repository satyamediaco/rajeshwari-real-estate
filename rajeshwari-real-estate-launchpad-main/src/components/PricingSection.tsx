
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap, Clock, Users, Gift, MessageCircle } from "lucide-react";

export const PricingSection = () => {
  const features = [
    "Complete Real Estate Sales Psychology",
    "Property Valuation Techniques Mastery", 
    "Client Relationship & Trust Building",
    "Negotiation Tactics That Close Deals",
    "Digital Marketing for Real Estate",
    "Legal Documentation Essentials",
    "Personal Branding for Agents",
    "Live Q&A with Industry Experts"
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi! I want to join the FREE Real Estate Training", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+919876543210", "_self");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold px-6 py-3 mb-6 rounded-full animate-pulse">
            🎁 COMPLETELY FREE TRAINING 🎁
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Free 2-Hour <span className="text-yellow-400">MASTERCLASS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of successful real estate agents who started with our free training program.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden transition-all duration-500 transform hover:scale-105 border-2 border-yellow-400 shadow-2xl bg-white">
            {/* Urgency Header */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-pink-600 text-white text-center py-3 font-bold text-lg animate-pulse">
              🏆 LIMITED SEATS AVAILABLE - ONLY 47 LEFT!
            </div>
            
            <CardHeader className="text-center pt-16 pb-6">
              <Badge className="bg-green-600 text-white self-center mb-4 text-lg px-4 py-2 rounded-full">
                🎉 FREE MASTERCLASS 🎉
              </Badge>
              <CardTitle className="text-4xl font-bold text-gray-900">2-Hour Power Training</CardTitle>
              <div className="space-y-4">
                <p className="text-7xl font-bold text-green-600">FREE</p>
                <p className="text-xl text-gray-700 flex items-center justify-center gap-2">
                  <Clock className="h-6 w-6 text-orange-500" />
                  2 Hours of Intensive Training
                </p>
                <p className="text-lg text-red-600 font-bold">Worth ₹25,000 - Yours FREE!</p>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bonus Section */}
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-400 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Gift className="h-6 w-6 text-orange-600" />
                  <span className="font-bold text-orange-800 text-xl">EXCLUSIVE BONUS INCLUDED</span>
                </div>
                <p className="text-orange-700 font-medium text-lg">Real Estate Toolkit & Templates (Worth ₹5,000) - FREE!</p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full py-8 text-2xl font-bold rounded-full transition-all duration-300 bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="mr-3 h-8 w-8" />
                  JOIN VIA WHATSAPP - FREE SEAT
                  <Zap className="ml-3 h-8 w-8" />
                </Button>

                <Button 
                  onClick={handleCall}
                  className="w-full py-6 text-xl font-bold rounded-full transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105"
                >
                  CALL NOW: +91-98765-43210
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="text-center space-y-3">
                <p className="text-green-600 font-bold text-lg">✅ No Credit Card Required</p>
                <p className="text-green-600 font-bold text-lg">✅ Instant Confirmation</p>
                <p className="text-green-600 font-bold text-lg">✅ Join from Anywhere</p>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center gap-6 text-gray-700">
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-blue-500" />
                  <span className="font-bold">2,953 Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <span className="font-bold">4.9/5 Rating</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Countdown Timer */}
        <div className="text-center mt-16">
          <p className="text-red-400 font-bold text-xl mb-6">⏰ HURRY! Only 47 seats left for today's session:</p>
          <div className="flex justify-center gap-4 text-white font-bold text-3xl mb-6">
            <div className="bg-red-600 px-6 py-4 rounded-xl">02H</div>
            <div className="bg-red-600 px-6 py-4 rounded-xl">31M</div>
            <div className="bg-red-600 px-6 py-4 rounded-xl">18S</div>
          </div>
          <p className="text-gray-400 text-lg">Next session: Tomorrow 7:00 PM IST</p>
        </div>
      </div>
    </section>
  );
};
