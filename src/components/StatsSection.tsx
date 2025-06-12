
import { TrendingUp, Users, Award, Clock } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Successful Agents Trained",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average Income Increase",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      value: "₹50L+",
      label: "Average Annual Income",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Clock,
      value: "90 Days",
      label: "To First Big Sale",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Results That Speak <span className="text-blue-600">VOLUMES</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our training program delivers consistently.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-6`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Join the Success Stories?</h3>
          <p className="text-xl mb-6">Your transformation starts with a single decision.</p>
          <button 
            onClick={() => window.open("https://wa.me/919876543210?text=Hi! I want to join the FREE Real Estate Training", "_blank")}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300"
          >
            CLAIM YOUR SPOT NOW
          </button>
        </div>
      </div>
    </section>
  );
};
