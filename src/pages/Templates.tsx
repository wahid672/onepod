import React from 'react';
import { Grid, List, Search, ExternalLink, GitBranch } from 'lucide-react';

const Templates: React.FC = () => {
  const templates = [
    {
      name: "n8n",
      category: "Productivity",
      description: "Workflow automation tool with 200+ integrations. Similar to Zapier",
      price: "Rp 15.000",
      tags: ["Automation", "Integration"],
      icon: "🔧"
    },
    {
      name: "Activepieces",
      category: "Productivity", 
      description: "Open source workflow automation tool with hundreds of integrations. An alternative to Zapier.",
      price: "Rp 85.000",
      tags: ["Automation", "Integration", "Open Source"],
      icon: "⚡"
    },
    {
      name: "WAHA Plus Cloud",
      category: "Communication",
      description: "Self-hosted WhatsApp HTTP API (REST API) for unlimited sessions, multimedia messages, and built-in...",
      price: "Rp 20.000",
      tags: ["WhatsApp API", "Messaging", "Self-hosted"],
      icon: "💬"
    },
    {
      name: "Ghost",
      category: "Business",
      description: "Professional publishing platform for modern journalism and content creators",
      price: "Rp 25.000",
      tags: ["CMS", "Publishing", "Blog"],
      icon: "👻"
    },
    {
      name: "Supabase",
      category: "Business",
      description: "Open source Firebase alternative with PostgreSQL database and real-time subscriptions",
      price: "Rp 30.000",
      tags: ["Database", "Backend", "Real-time"],
      icon: "🗄️"
    },
    {
      name: "Strapi",
      category: "Business",
      description: "Leading open-source headless CMS with customizable API and admin panel",
      price: "Rp 35.000",
      tags: ["CMS", "API", "Headless"],
      icon: "🚀"
    },
    {
      name: "Mattermost",
      category: "Communication",
      description: "Secure collaboration platform for technical and operational teams",
      price: "Rp 40.000",
      tags: ["Chat", "Collaboration", "Team"],
      icon: "💬"
    },
    {
      name: "Nextcloud",
      category: "Productivity",
      description: "Self-hosted productivity platform with file sync, calendar, and collaboration tools",
      price: "Rp 45.000",
      tags: ["File Sync", "Collaboration", "Self-hosted"],
      icon: "☁️"
    },
    {
      name: "Grafana",
      category: "Business",
      description: "Open source analytics and interactive visualization web application",
      price: "Rp 50.000",
      tags: ["Analytics", "Monitoring", "Visualization"],
      icon: "📊"
    }
  ];

  const categories = ["All", "Business", "Productivity", "Communication", "Entertainment"];

  return (
    <main className="min-h-screen bg-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Application Templates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our curated collection of application templates and deploy them in seconds
            </p>
          </div>

          <div className="mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Grid className="h-5 w-5 text-indigo-600" />
              <List className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    category === "All" 
                      ? "bg-indigo-600 text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                      {template.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
                      <span className="text-sm text-gray-500">{template.category}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{template.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {template.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-indigo-100 text-indigo-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-900">
                    {template.price}
                    <span className="text-sm font-normal text-gray-500">/month</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                      <GitBranch className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200">
                  Deploy Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Templates;