import { ReactNode } from "react";
import { Button } from "@/components/ui/button";


// FeatureCard Component
const FeatureCard = ({ icon, title, description, features, buttonText, isPopular }) => {
  return (
    <div className={`relative bg-white border rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col ${
      isPopular ? 'ring-2 ring-blue-600 ring-offset-4 scale-105 border-blue-200' : 'border-gray-200 hover:border-blue-300'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="space-y-6 flex-1 flex flex-col">
        {/* Icon */}
        <div className="relative">
          <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            {icon}
          </div>
          <div className="absolute inset-0 w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl opacity-20 group-hover:scale-125 group-hover:opacity-30 transition-all duration-300 blur-xl"></div>
        </div>

        {/* Content */}
        <div className="space-y-3 flex-1">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
            {description}
          </p>
        
          {/* Features List */}
          <ul className="space-y-3 pt-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3 text-sm lg:text-base group/item">
                <div className="w-2 h-2 bg-gradient-to-br from-green-500 to-green-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="text-gray-700 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Button 
          variant={isPopular ? "hero" : "default"}
          className="mt-6 group-hover:scale-105 transition-all"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default FeatureCard;