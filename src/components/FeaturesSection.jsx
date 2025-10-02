import FeatureCard from "./FeatureCard";
import { Mic, FileText, Brain, UserCheck } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Mic className="h-6 w-6 lg:h-7 lg:w-7" />,
      title: "Speaking Practice",
      description: "AI-powered speaking evaluation with real-time feedback and pronunciation analysis.",
      features: [
        "Real-time pronunciation scoring",
        "Common topic practice sessions",
        "Personalized feedback reports",
        "Native speaker comparisons"
      ],
      buttonText: "Try Speaking Test",
      isPopular: false
    },
    {
      icon: <FileText className="h-6 w-6 lg:h-7 lg:w-7" />,
      title: "Mock Tests",
      description: "Complete IELTS mock tests with computer-based testing environment.",
      features: [
        "Full-length practice tests",
        "Computer & paper-based formats",
        "Instant detailed results",
        "Performance tracking over time"
      ],
      buttonText: "Take Mock Test",
      isPopular: true
    },
    {
      icon: <Brain className="h-6 w-6 lg:h-7 lg:w-7" />,
      title: "AI Band Predictor",
      description: "Advanced AI algorithms predict your IELTS band score with 95% accuracy.",
      features: [
        "Precise band prediction",
        "Module-wise analysis",
        "Improvement recommendations",
        "Progress tracking dashboard"
      ],
      buttonText: "Check My Band",
      isPopular: false
    },
    {
      icon: <UserCheck className="h-6 w-6 lg:h-7 lg:w-7" />,
      title: "Expert Tutors",
      description: "One-on-one sessions with certified IELTS trainers and former examiners.",
      features: [
        "Certified IELTS trainers",
        "Former IELTS examiners",
        "Personalized study plans",
        "Flexible scheduling options"
      ],
      buttonText: "Book Session",
      isPopular: false
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 lg:space-y-8 mb-16 lg:mb-24">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100/90 to-blue-50/90 backdrop-blur-sm border border-blue-200/50 text-blue-800 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-default">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight max-w-4xl mx-auto">
            Everything You Need to 
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent block sm:inline"> Succeed in IELTS</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform combines cutting-edge AI technology with expert human guidance 
            to ensure your IELTS success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in-up" 
              style={{ 
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'forwards'
              }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                features={feature.features}
                buttonText={feature.buttonText}
                isPopular={feature.isPopular}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;