import React, { useState } from 'react';
import { Cloud, ArrowUpDown, Cog, Shield, Zap, BarChart3, Users, Server } from 'lucide-react';
import ImageSlider from './ImageSP';
// import SingleImg from "../assets/post1.png"

const SinglePost = () => {
  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: '',
    website: ''
  });
  const [emailSignup, setEmailSignup] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      comment: '',
      name: '',
      email: '',
      website: ''
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Email signup:', emailSignup);
    setEmailSignup('');
  };

  return (
    <div className="min-h-screen bg-[#07282C] text-[#71D6CE]">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Achieving Scalability and Resilience with Cloud Management Strategies
            </h1>
            <p className="text-sm sm:text-base text-[#71D6CE] max-w-3xl mx-auto leading-relaxed">
              Transform your infrastructure with intelligent cloud solutions that adapt, scale, and protect your business operations in real-time.
            </p>
          </div>
          
          {/* Cloud Infrastructure Visualization */}
          <div className="relative max-w-4xl mx-auto mb-6">
            <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/20 rounded-3xl p-8 sm:p-12 border border-teal-700/30 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 bg-teal-800/30 p-4 rounded-lg">
                    <Cog className="w-8 h-8 text-[#71D6CE]" />
                    <div>
                      <h4 className="font-semibold text-white">Automation</h4>
                      <p className="text-sm text-[#71D6CE]">Smart provisioning</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-teal-800/30 p-4 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-[#71D6CE]" />
                    <div>
                      <h4 className="font-semibold text-white">Analytics</h4>
                      <p className="text-sm text-[#71D6CE]">Real-time insights</p>
                    </div>
                  </div>
                </div>

                
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-300 rounded-full flex items-center justify-center animate-pulse">
                      <Cloud className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                      <ArrowUpDown className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4">Cloud Core</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 bg-teal-800/30 p-4 rounded-lg">
                    <Shield className="w-8 h-8 text-[#71D6CE]" />
                    <div>
                      <h4 className="font-semibold text-white">Security</h4>
                      <p className="text-sm text-[#71D6CE]">Multi-layer protection</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-teal-800/30 p-4 rounded-lg">
                    <Server className="w-8 h-8 text-[#71D6CE]" />
                    <div>
                      <h4 className="font-semibold text-white">Infrastructure</h4>
                      <p className="text-sm text-[#71D6CE]">Elastic scaling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ImageSlider/>

      {/* Main Content Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 mt-5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Cloud to Achieve Scalability and Resilience
            </h2>
            <div className="prose prose-lg text-[#71D6CE] leading-relaxed space-y-6">
              <p>
                Modern enterprises face unprecedented challenges in managing digital infrastructure that must scale dynamically while maintaining rock-solid reliability. Cloud management strategies have evolved beyond simple virtualization to encompass intelligent orchestration, predictive scaling, and automated resilience mechanisms that ensure business continuity under any circumstances.
              </p>
              <p>
                Advanced cloud architectures leverage distributed computing principles, microservices design patterns, and container orchestration to create systems that automatically adapt to changing workloads. These platforms integrate seamlessly with existing enterprise systems while providing the flexibility to scale from startup operations to global enterprise deployments without requiring fundamental architectural changes.
              </p>
              <p>
                Strategic implementation of cloud-native technologies enables organizations to reduce operational overhead while simultaneously improving system reliability and performance. Through intelligent resource allocation, automated failover mechanisms, and real-time monitoring systems, businesses can achieve unprecedented levels of operational efficiency and service availability.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-8">
              Elasticity Allows Organizations to Handle Peak Workloads Efficiently
            </h3>
            <div className="prose prose-lg text-[#71D6CE] leading-relaxed mb-8">
              <p>
                Enterprise-grade elasticity represents a fundamental shift in how organizations approach capacity planning and resource management. Rather than over-provisioning infrastructure to handle peak loads, intelligent scaling systems automatically adjust resources based on real-time demand patterns, ensuring optimal performance while minimizing operational costs.
              </p>
            </div>
            
            <div className="grid gap-4 sm:gap-6">
              <div className="flex items-start space-x-4 bg-teal-900/20 p-4 sm:p-6 rounded-lg border border-teal-700/30">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-[#71D6CE]">
                  <span className="font-semibold text-white">Optimizing resource utilization</span> to achieve cost-effectiveness and scalability through intelligent workload distribution and predictive capacity planning.
                </p>
              </div>
              
              <div className="flex items-start space-x-4 bg-teal-900/20 p-4 sm:p-6 rounded-lg border border-teal-700/30">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-[#71D6CE]">
                  <span className="font-semibold text-white">Elasticity allows organizations</span> to handle peak workloads efficiently by automatically scaling infrastructure components based on real-time demand metrics.
                </p>
              </div>
              
              <div className="flex items-start space-x-4 bg-teal-900/20 p-4 sm:p-6 rounded-lg border border-teal-700/30">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-[#71D6CE]">
                  <span className="font-semibold text-white">Automation tools enable organizations</span> to automate resource provisioning, deployment pipelines, and infrastructure management processes.
                </p>
              </div>
              
              <div className="flex items-start space-x-4 bg-teal-900/20 p-4 sm:p-6 rounded-lg border border-teal-700/30">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-[#71D6CE]">
                  <span className="font-semibold text-white">Load balancing distributes</span> incoming network traffic across multiple servers, ensuring high availability and optimal performance during traffic spikes.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-8">
              Importance of Automation to Achieve Scalability and Resilience
            </h3>
            <div className="prose prose-lg text-[#71D6CE] leading-relaxed space-y-6">
              <p>
                Automation serves as the cornerstone of modern cloud operations, enabling organizations to manage complex, distributed systems with unprecedented efficiency and reliability. Through sophisticated orchestration platforms and intelligent monitoring systems, businesses can achieve levels of operational consistency and rapid response times that would be impossible through manual processes.
              </p>
              <p>
                Strategic automation implementation encompasses infrastructure provisioning, application deployment, security compliance, and incident response workflows. These integrated systems work continuously to maintain optimal performance, automatically detect and resolve issues, and scale resources in response to changing business demands without human intervention.
              </p>
              <p>
                Advanced automation frameworks integrate machine learning algorithms that continuously improve system performance by analyzing historical patterns, predicting future resource requirements, and optimizing configurations based on real-world usage data. This creates self-healing infrastructure that becomes more resilient and efficient over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-teal-900/10">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8">Leave a Reply</h3>
          <p className="text-[#71D6CE] mb-8">
            Your email address will not be published. Required fields are marked <span className="text-red-400">*</span>
          </p>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="comment" className="block text-white font-medium mb-2">
                Comment <span className="text-red-400">*</span>
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 bg-teal-900/20 border border-teal-700/50 rounded-lg text-white placeholder-teal-300/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent resize-vertical"
                placeholder="Share your thoughts on cloud management strategies..."
              />
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-teal-900/20 border border-teal-700/50 rounded-lg text-white placeholder-teal-300/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-teal-900/20 border border-teal-700/50 rounded-lg text-white placeholder-teal-300/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="website" className="block text-white font-medium mb-2">
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-teal-900/20 border border-teal-700/50 rounded-lg text-white placeholder-teal-300/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                placeholder="https://yourwebsite.com"
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="save-info"
                className="w-4 h-4 text-teal-400 bg-teal-900/20 border-teal-700/50 rounded focus:ring-teal-400 focus:ring-2"
              />
              <label htmlFor="save-info" className="text-[#71D6CE] text-sm">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>
            
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-sky-200 to-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-cyan-300 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#07282C] whitespace-nowrap"
            >
              Post Comment
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile First Responsive */}
<section className="px-5 py-12 sm:py-16 md:px-6 lg:px-8 lg:py-20">
  <div className="max-w-4xl mx-auto">
    <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/20 rounded-3xl p-6 sm:p-10 md:p-12 border border-teal-700/30 backdrop-blur-sm text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
        Get Started with Our Powerful Cloud Management Service Today
      </h2>
      <p className="text-cyan-200 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
        Transform your infrastructure with enterprise-grade cloud solutions designed for scalability, resilience, and optimal performance.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto">
        <input
          type="email"
          value={emailSignup}
          onChange={(e) => setEmailSignup(e.target.value)}
          placeholder="Enter your email..."
          className="flex-1 px-4 py-3 sm:px-5 sm:py-4 bg-white/90 text-gray-800 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-all duration-200 text-sm sm:text-base"
        />
        <button
          onClick={handleSignup}
          className="bg-gradient-to-r from-sky-200 to-blue-600 text-white font-medium sm:font-semibold px-5 py-3 sm:px-8 sm:py-4 rounded-lg hover:from-cyan-300 hover:to-blue-600 transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#07282C] whitespace-nowrap text-sm sm:text-base"
        >
          Start Free Trial
        </button>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-6 sm:mt-8 text-cyan-200">
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm">10K+ Users</span>
        </div>
        <div className="flex items-center space-x-2">
          <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm">99.9% Uptime</span>
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm">Enterprise Security</span>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default SinglePost;