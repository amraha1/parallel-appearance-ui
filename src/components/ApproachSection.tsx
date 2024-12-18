import React from 'react';
import { Check } from "lucide-react";
const ApproachSection = () => {
  
      return (
        <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-12">
              <h2 className="text-5xl font-bold text-white mb-6">Our Approach</h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budget.
              </p>
            </div>
    
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
              {/* Left Image */}
              <div className="relative">
                <img
                  src="/lovable-uploads/office.jpeg"
                  alt="Team collaboration"
                  className="rounded-lg w-full"
                />
              </div>
    
              {/* Right Content */}
              <div className="space-y-8">
                <h3 className="text-4xl font-bold text-white leading-tight">
                  Unlock The Potential<br />Of Your Business.
                </h3>
                <p className="text-gray-400 text-lg">
                  We believe in delivering tailored solutions that are designed to address your unique requirements. We take the time to understand your business and provide personalized services that align with your goals.
                </p>
    
                {/* Features with Line */}
                <div className="relative pt-8">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-0.5 bg-gray-400 w-full">
                    <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-4 h-4 bg-[#00FF7F] rounded-full"></div>
                    <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-4 h-4 bg-[#00FF7F] rounded-full"></div>
                  </div>
    
                  <div className="grid grid-cols-2 gap-8 pt-8">
                    <div className="text-center">
                      <h4 className="text-white text-xl font-semibold mb-4">Customized Solutions</h4>
                      <p className="text-gray-400">Services are professional w offerings provided.</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-white text-xl font-semibold mb-4">Quality Reliability</h4>
                      <p className="text-gray-400">Services are professional w offerings provided.</p>
                    </div>
                  </div>
                </div>
    
                {/* Years Badge */}
                <div className="absolute right-0 bottom-0 lg:right-[-100px] lg:bottom-[-50px]">
                  <div className="relative w-32 h-32 rounded-full bg-softgreen flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-black">10</div>
                      <div className="text-black font-medium">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Small Image */}
            <div className="absolute right-20 top-40">
              <img
                src="/lovable-uploads/f125e02d-965b-48b8-8f93-5556029ccbec.png"
                alt="Additional team view"
                className="w-64 h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      );
    };
    
    export default ApproachSection;