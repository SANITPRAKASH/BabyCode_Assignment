import { Button } from "@/components/ui/button";
import { Star, Award, Users } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 lg:pt-28 pb-20 lg:pb-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.15'%3E%3Ccircle cx='7' cy='7' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 lg:space-y-10 text-center lg:text-left animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100/90 to-blue-50/90 backdrop-blur-sm border border-blue-200/50 text-blue-800 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-default">
                <Award className="mr-2 h-4 w-4" />
                #1 IELTS Institute in India
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Achieve Your
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent block lg:inline animate-gradient"> Dream IELTS </span>
                Band Score
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Master all four IELTS modules with our AI-powered practice platform, expert tutors, and proven success strategies.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left group cursor-default">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">15K+</div>
                <div className="text-sm lg:text-base text-gray-600 font-medium mt-1">Students Trained</div>
              </div>
              <div className="text-center lg:text-left group cursor-default">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">8.5</div>
                <div className="text-sm lg:text-base text-gray-600 font-medium mt-1">Avg. Band Score</div>
              </div>
              <div className="text-center lg:text-left group cursor-default">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">99%</div>
                <div className="text-sm lg:text-base text-gray-600 font-medium mt-1">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 max-w-md mx-auto lg:mx-0">
              <Button className="flex-1 sm:flex-none px-8 lg:px-12 h-12 lg:h-14 text-base lg:text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 rounded-xl">
                Start Free Trial
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none px-8 lg:px-12 h-12 lg:h-14 text-base lg:text-lg font-semibold border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-lg active:scale-95 transition-all duration-300 rounded-xl">
                View Success Stories
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 text-sm lg:text-base text-gray-700">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                ))}
              </div>
              <span className="font-semibold">4.9/5 from 2,500+ reviews</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <img 
                src={heroBanner} 
                alt="IELTS Excellence Institute - Students Learning" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Floating Achievement Card */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/30 hover:scale-105 transition-all duration-300 animate-float">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-gray-900">Band 8.5 Achieved!</div>
                    <div className="text-xs text-gray-600">Sarah M. - Canada PR</div>
                  </div>
                </div>
              </div>

              {/* Floating Student Count */}
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/30 hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-gray-900">500+ Active</div>
                    <div className="text-xs text-gray-600">Students This Month</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative blur effect behind image */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-200/30 rounded-3xl blur-3xl"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;