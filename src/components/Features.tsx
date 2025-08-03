import React from 'react';
import { Package, Database, Zap, Shield, Globe, Rocket } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Rocket,
      title: "Lightning Fast Deployment",
      description: "Deploy your applications in seconds with our optimized infrastructure and automated deployment pipeline.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Package,
      title: "50+ Ready Templates",
      description: "Choose from our curated collection of application templates including databases, APIs, and full-stack applications.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Built-in security features including SSL certificates, DDoS protection, and automated security updates.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Deliver your applications worldwide with our global content delivery network for optimal performance.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "Managed Databases",
      description: "Fully managed PostgreSQL, MySQL, and MongoDB databases with automatic backups and scaling.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Auto Scaling",
      description: "Automatically scale your applications based on traffic with intelligent resource management.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-600 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to deploy
            <span className="block text-indigo-600">and scale your apps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            EasyDeploy provides a complete platform for modern application deployment with enterprise-grade features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;