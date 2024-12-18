import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const Contact = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeAnimation = () => {
      if (!marqueeRef.current) return;
      const marqueeElement = marqueeRef.current;
      let position = 0;
      const speed = 1;

      const animate = () => {
        position -= speed;
        if (position <= -50) position = 0;
        if (marqueeElement) {
          marqueeElement.style.transform = `translateX(${position}px)`;
        }
        requestAnimationFrame(animate);
      };

      animate();
    };

    marqueeAnimation();
  }, []);

  return (
    <div className="relative min-h-[575px] overflow-hidden bg-black z-10"
    style={{
      backgroundImage: "url('/lovable-uploads/contact-bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
    >
      {/* Background Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,15,15,0.22)] to-[#0F0F0F] z-[-1]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,15,15,0.13)] to-[#0F0F0F] z-[-1]"></div>
      
      <div className="contact-wrapper text-center pt-28 relative z-10">
        {/* Marquee Text */}
        <div className="overflow-hidden">
          <h2 
            ref={marqueeRef}
            className="text-[100px] font-semibold uppercase tracking-wider text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.12)",
              whiteSpace: "nowrap"
            }}
          >
            We take care of your IT, So You Can Focus on Your Business.
          </h2>
        </div>

        {/* Contact Button */}
        <div className="flex flex-row justify-center -mt-12">
          <a 
            href="/contact" 
            className="relative w-[210px] h-[210px] rounded-full border border-white/20 flex items-center justify-center text-white text-2xl font-medium transition-all duration-800 hover:border-[#00FF7F] hover:bg-[#00FF7F] hover:text-black group"
          >
           <div className="flex items-center justify-between text-left ml-[29px] gap-4">  
       Contact With Us.
              <ArrowUpRight style={{marginRight:'18px'}} size={56} className="transition-transform duration-500 group-hover:rotate-45" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;