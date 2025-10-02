import { Star, Quote } from "lucide-react";
import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";
import student3 from "@/assets/student3.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rohan Desai",
      score: "8.5",
      country: "Australia",
      image: student1,
      text: "The AI-powered speaking practice was incredible! I went from band 6.5 to 8.5 in just 3 months. The personalized feedback helped me fix my pronunciation issues.",
      goal: "Nursing Registration"
    },
    {
      name: "Ananya Kapoor",
      score: "8.0",
      country: "Canada",
      image: student2,
      text: "Mock tests were exactly like the real exam. The expert tutors helped me with writing techniques that boosted my score from 7.0 to 8.0. Highly recommended!",
      goal: "Software Engineer PR"
    },
    {
      name: "Grace Okonkwo",
      score: "7.5",
      country: "UK",
      image: student3,
      text: "The study plan was perfect for my busy schedule. I could practice anytime and the AI predictions were spot-on. Achieved my target score for university admission!",
      goal: "Masters in Business"
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-20 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 lg:space-y-8 mb-16 lg:mb-24">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-green-100/90 to-green-50/90 backdrop-blur-sm border border-green-200/50 text-green-800 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-default">
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight max-w-4xl mx-auto">
            Real Students, 
            <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent block sm:inline"> Real Results</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful students who achieved their dream IELTS scores and 
            are now living their international dreams.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white border border-gray-200 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm h-full flex flex-col opacity-0 animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-10 w-10 lg:h-12 lg:w-12 text-blue-200 group-hover:text-blue-300 transition-colors" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-8 leading-relaxed text-base lg:text-lg font-medium flex-1">
                "{testimonial.text}"
              </p>

              {/* Student Info */}
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-blue-200 group-hover:border-blue-400 transition-all shadow-lg group-hover:scale-105"
                  />
                  <div className="absolute inset-0 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-3 mb-2 flex-wrap gap-y-2">
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                      Band {testimonial.score}
                    </div>
                  </div>
                  <p className="text-sm lg:text-base text-gray-600 font-medium">{testimonial.goal}</p>
                  <p className="text-sm text-blue-600 font-semibold">Now in {testimonial.country}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center mt-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 lg:h-5 lg:w-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16 lg:mt-24">
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-white shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
              }}></div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative space-y-6 lg:space-y-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Ready to Join Our Success Stories?</h3>
              <p className="text-white/95 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                Start your IELTS journey today with a free trial session and expert guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <button className="bg-white text-blue-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 text-lg shadow-xl">
                  Get Started Free
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 active:scale-95 text-lg">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
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

export default TestimonialsSection;