
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, TrendingUp, MessageCircle, Phone, Clock, Users } from "lucide-react";

export const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi! I want to join the FREE Real Estate Training", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+919876543210", "_self");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsApp}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full w-16 h-16 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
          size="lg"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Free Badge */}
            <Badge className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold px-6 py-3 rounded-full animate-pulse">
              🎉 100% FREE 2-HOUR TRAINING 🎉
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Become a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 block">
                Real Estate CHAMPION
              </span>
              <span className="text-3xl md:text-4xl text-green-400 font-extrabold">
                FOR FREE!
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Master the art of real estate sales in just <span className="font-bold text-yellow-400">2 HOURS</span> with Team Rajeshwari's proven strategies
            </p>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWhatsApp}
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  JOIN VIA WHATSAPP NOW
                </Button>
                <Button 
                  onClick={handleCall}
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold px-8 py-4 text-lg rounded-full transition-all duration-300"
                >
                  <Phone className="mr-2 h-6 w-6" />
                  CALL: +91-98765-43210
                </Button>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-white font-semibold">10,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-white font-semibold">4.9/5 Rating</span>
              </div>
            </div>

            {/* Urgency Timer */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-600/30">
              <p className="text-red-400 font-bold text-lg mb-4">⏰ Session starts in:</p>
              <div className="flex justify-center gap-4 text-white font-bold text-2xl">
                <div className="bg-red-600 px-4 py-2 rounded-lg">02H</div>
                <div className="bg-red-600 px-4 py-2 rounded-lg">31M</div>
                <div className="bg-red-600 px-4 py-2 rounded-lg">18S</div>
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/10">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/PcUn17lzy9o?start=311&autoplay=0"
                  title="Real Estate Training Preview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full font-bold">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-black p-3 rounded-full font-bold text-sm">
                100% FREE
              </div>
            </div>

            {/* Video CTA */}
            <div className="mt-6 text-center">
              <p className="text-white font-bold text-lg mb-4">👆 Watch this success story and join FREE!</p>
              <Button 
                onClick={handleWhatsApp}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                REGISTER FOR FREE NOW
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
