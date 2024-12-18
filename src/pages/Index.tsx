import Navigation from '../components/Navigation';
import SocialSidebar from '../components/SocialSidebar';
import ServicesSection from '../components/ServicesSection';
import { ArrowRight } from 'lucide-react';
import ApproachSection from '@/components/ApproachSection';
import { PricingSection } from '@/components/Pricing/PricingSection';
import { ContactButton } from '@/components/contact/contactButton';
import Contact from '@/components/contact/ContactSection';
import { ServiceDetails } from '@/components/Services/ServiceDetails';
import ContactSection  from '@/components/ContactForm/ContactSection';
import Footer  from '@/components/Footer/Footer';


const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <SocialSidebar />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between py-20">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Grow Your<br />
                Business With<br />
                Innovative Ideas.
              </h1>
              <p className="text-gray-400 text-lg max-w-lg">
                Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero. Donec nec duomoi luctus, pellentesque lacus sed, mollis going leo.
              </p>
              <div className="flex space-x-6">
                <button className="bg-primary text-black px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                  Free Consultancy
                </button>
                <button className="text-white flex items-center space-x-2 group">
                  <span>Explore More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative w-[600px] h-[600px]">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20"></div>
                  <img
                    src="/lovable-uploads/6f26ca37-7b7b-4fa6-b876-805f34550734.png"
                    alt="Team working together"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ServicesSection />
        <ApproachSection />
        <PricingSection />
       <Contact />
       <ServiceDetails />
       <ContactSection />
       <Footer />
      </main>
    </div>
  );
};

export default Index;