// "use client";

// import { ContactForm } from "./ContactForm";
// import { ContactInfo } from "./ContactInfo";

// export const ContactSection = () => {
//   return (
//     <section className="bg-black min-h-screen py-20">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           <ContactInfo />
//           <ContactForm />
//         </div>
//       </div>
//     </section>
//   );
// };
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Github } from "lucide-react";
import { toast } from "sonner";
// import { Facebook, Twitter, Instagram,  } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Github, href: "https://github.com" }
];

 const SocialLinks = () => {
  return (
    <div className="space-y-4 py-[30px]">
      <h5 className="text-xl font-bold text-white">Follow Us</h5>
      <p className="text-gray-400">Follow us on Social Network</p>
      <div className="flex gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-gray-700 rounded flex items-center justify-center text-white hover:bg-[#06D889] hover:border-[#06D889] transition-colors"
          >
            <link.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  );
}
const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <span className="text-primary uppercase tracking-wider text-sm font-medium">
                CONTACT WITH US
              </span>
              <h2 className="text-4xl md:text-[42px] font-bold mt-2 mb-1 text-white leading-tight">
                LET'S WORK TOGETHER?
              </h2>
              <p className="text-[#b5b5b5] text-[15px] leading-[30px] font-light">
                I have world-class, flexible support via live chat, email and phone. I guarantee that you'll
                be able to have any issue resolved within 24 hours.
              </p>

              <div className="pt-[50px] space-y-[30px]">
                {/* Address */}
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full border border-primary flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div className="text-[#b5b5b5]">
                    <p>168/170, Avenue 01, Old York</p>
                    <p>Drive Rich Mirpur DOHS, Bangladesh</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full border border-primary flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div className="space-y-1">
                    <a href="tel:+880566111985" className="block text-[#b4b4b4] hover:text-primary transition-colors">
                      +880 566 1111 985
                    </a>
                    <a href="tel:+880657111576" className="block text-[#b4b4b4] hover:text-primary transition-colors">
                      +880 657 1111 576
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full border border-primary flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div className="space-y-1">
                    <a href="mailto:info@example.com" className="block text-[#b4b4b4] hover:text-primary transition-colors">
                      info@example.com
                    </a>
                    <a href="mailto:info@support.com" className="block text-[#b4b4b4] hover:text-primary transition-colors">
                      info@support.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Follow Us */}
              {/* <div className="py-[30px]">
                <h5 className="text-[22px] font-bold text-white mb-0">Follow Us</h5>
                <p className="text-[#b5b5b5] mb-2.5">Follow us on Social Network</p>
                <div className="flex gap-4 pt-2.5">
                  <a href="#" className="w-9 h-9 border border-[#ddd] rounded flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-9 h-9 border border-[#ddd] rounded flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-9 h-9 border border-[#ddd] rounded flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                    <Instagram size={18} />
                  </a>
                </div>
              </div> */}
              <SocialLinks />
            </div>

            {/* Right Column - Form */}
            <div className="bg-[#161A1E] rounded-[10px] overflow-hidden">
              <div className="py-6 px-6 border-b border-white/5">
                <h5 className="text-[22px] font-medium text-white text-center m-0">
                  Make a Free Consulting
                </h5>
              </div>
              
              <form onSubmit={handleSubmit} className="p-10 lg:p-[45px]">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm text-white capitalize">First Name</label>
                    <input
                      type="text"
                      className="w-full h-[41px] bg-white/[0.04] border border-white/[0.05] rounded-[5px] px-4 text-[#dedada] text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white capitalize">Last Name</label>
                    <input
                      type="text"
                      className="w-full h-[41px] bg-white/[0.04] border border-white/[0.05] rounded-[5px] px-4 text-[#dedada] text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 mt-5">
                  <label className="text-sm text-white capitalize">Company/Organization</label>
                  <input
                    type="text"
                    className="w-full h-[41px] bg-white/[0.04] border border-white/[0.05] rounded-[5px] px-4 text-[#dedada] text-sm"
                    required
                  />
                </div>

                <div className="space-y-2 mt-5">
                  <label className="text-sm text-white capitalize">Email</label>
                  <input
                    type="email"
                    className="w-full h-[41px] bg-white/[0.04] border border-white/[0.05] rounded-[5px] px-4 text-[#dedada] text-sm"
                    required
                  />
                </div>

                <div className="space-y-2 mt-5">
                  <label className="text-sm text-white capitalize">Phone</label>
                  <input
                    type="tel"
                    className="w-full h-[41px] bg-white/[0.04] border border-white/[0.05] rounded-[5px] px-4 text-[#dedada] text-sm"
                    required
                  />
                </div>

                <div className="space-y-2 mt-5">
                  <label className="text-sm text-white capitalize">Message</label>
                  <textarea
                    className="w-full h-[140px] bg-white/[0.04] border border-white/[0.05] rounded-[5px] px-4 py-2 text-[#dedada] text-sm resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-10 bg-primary text-white font-bold text-[17px] px-[62px] py-3 rounded-[5px] hover:bg-primary/90 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;