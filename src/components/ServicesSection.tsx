import { Code, Cloud, Shield, Database, MonitorPlay, MessageSquareMore } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Web Development",
      description: "Web development is the process of creating websites and web applications for the internet or intranet."
    },
    {
      icon: <Cloud className="w-12 h-12 text-primary" />,
      title: "Cloud Solutions",
      description: "Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Cyber Security",
      description: "Cybersecurity refers to the protection of computer systems, networks, and data from theft, damage, or unauthorized access."
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "Data Analytic",
      description: "Data analytics refers to the process of examining and interpreting large datasets to extract insights and draw conclusions."
    },
    {
      icon: <MonitorPlay className="w-12 h-12 text-primary" />,
      title: "Software Development",
      description: "Software development is the process of creating computer software programs that perform specific functions or tasks."
    },
    {
      icon: <MessageSquareMore className="w-12 h-12 text-primary" />,
      title: "Digital Marketing",
      description: "Digital marketing refers to the use of digital channels and technologies to promote products, services, or brands."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-colors duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                <button className="mt-4 px-6 py-2 bg-secondary text-white rounded hover:bg-secondary/80 transition-colors inline-flex items-center space-x-2">
                  LEARN MORE
                  <span className="ml-2">→</span>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;