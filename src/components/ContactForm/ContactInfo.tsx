import { MapPin, Phone, Mail } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="text-white">
      <h3 className="text-[#00DC82] uppercase mb-4">CONTACT WITH US</h3>
      <h2 className="text-5xl font-bold mb-6">LET'S WORK TOGETHER?</h2>
      <p className="text-gray-400 mb-12">
        I have world-class, flexible support via live chat, email and phone. I guarantee that you'll
        be able to have any issue resolved within 24 hours.
      </p>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <MapPin className="text-[#00DC82] mt-1" />
          <div>
            <p>168/170, Avenue 01, Old York</p>
            <p>Drive Rich Mirpur DOHS, Bangladesh</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="text-[#00DC82] mt-1" />
          <div>
            <p>+880 566 1111 985</p>
            <p>+880 657 1111 576</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="text-[#00DC82] mt-1" />
          <div>
            <p>info@example.com</p>
            <p>info@support.com</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-semibold mb-4">Follow Us</h3>
        <p className="text-gray-400 mb-4">Follow us on Social Network</p>
        <div className="flex gap-4">
          {["facebook", "twitter", "instagram", "pinterest"].map((social) => (
            <a
              key={social}
              href={`https://${social}.com`}
              className="w-10 h-10 border border-[#2A2F34] rounded-sm flex items-center justify-center hover:border-[#00DC82] transition-colors"
            >
              <span className="sr-only">{social}</span>
              <i className={`fab fa-${social}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};