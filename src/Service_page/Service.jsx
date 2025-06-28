import React, { useState, useEffect } from "react";

// import {
//   Shield,
//   BarChart3,
//   Network,
//   Headphones,
//   DollarSign,
//   Settings
// } from 'lucide-react';
import cost from "../assets/dollar.png";
import security from "../assets/secure.png";
import operation from "../assets/encrypt.png";
import performance from "../assets/valocity.png";
import scalability from "../assets/data.png";
import support from "../assets/server.png";

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <img src={cost} alt="Cost Optimization" className="w-10 " />,
      title: "Cost Optimization",
      description:
        "Reduce infrastructure costs by up to 40% with intelligent resource allocation and automated scaling based on real-time demand patterns.",
    },
    {
      icon: <img src={security} alt="Cost Optimization" className="w-10" />,
      title: "Enhanced Security",
      description:
        "Enterprise-grade security with multi-layer protection, encrypted data transmission, and compliance with industry standards like SOC 2 and ISO 27001.",
    },
    {
      icon: <img src={operation} alt="Cost Optimization" className="w-10" />,
      title: "Streamlined Operations",
      description:
        "Automate routine tasks and simplify complex workflows with our intuitive management dashboard and API-first architecture.",
    },
    {
      icon: <img src={performance} alt="Cost Optimization" className="w-11 " />,
      title: "Performance and Reliability",
      description:
        "Achieve 99.9% uptime with global CDN distribution, automatic failover systems, and performance monitoring across all endpoints.",
    },
    {
      icon: <img src={scalability} alt="Cost Optimization" className="w-11 " />,
      title: "Scalability and Flexibility",
      description:
        "Scale seamlessly from startup to enterprise with elastic infrastructure that grows with your business needs and traffic demands.",
    },
    {
      icon: <img src={support} alt="Cost Optimization" className="w-10" />,
      title: "Monitoring and Support",
      description:
        "24/7 expert support with proactive monitoring, real-time alerts, and dedicated account management for enterprise clients.",
    },
  ];

  const costData = [
    { month: "Jan", cost: 320 },
    { month: "Feb", cost: 280 },
    { month: "Mar", cost: 450 },
    { month: "Apr", cost: 380 },
    { month: "May", cost: 520 },
    { month: "Jun", cost: 200 },
    { month: "Jul", cost: 340 },
    { month: "Aug", cost: 480 },
    { month: "Sep", cost: 420 },
  ];

  const maxCost = Math.max(...costData.map((d) => d.cost));

  return (
    <div className="bg-[#07282C] min-h-screen">
      {/* Hero Section */}
      <section
        className={`px-6 py-24 md:px-12 lg:px-32 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[65px] font-semibold text-[#71D6CE] leading-tight">
            Powerful Cloud Solutions for Enhanced
            <span className="text-[#b9fff9]"> Efficiency and Scalability</span>
          </h1>
          <p className="mt-10 text-sm md:text-base font-normal text-white max-w-3xl mx-auto leading-relaxed">
            Unlock smarter infrastructure, seamless operations, and future-proof
            growth with <br />
            <span>
              {" "}
              our cutting-edge cloud services designed for modern businesses.
            </span>
          </p>
          <button className="mt-8 px-8 py-4 bg-[#71D6CE] text-[#07282C] font-semibold rounded-lg hover:brightness-110 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_#71D6CE]">
            Explore Solutions
          </button>
        </div>
      </section>

      {/* Enhanced Features Grid Section */}
      <section className="px-6 py-5 md:px-12 lg:px-20">
        <div className="w-[1300px]  mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl p-8 bg-gradient-to-br from-[#093D42] to-[#0A4147] text-white
            border border-[#1A5C63] backdrop-blur-lg
            hover:border-[#71D6CE] hover:shadow-[0_0_30px_rgba(113,214,206,0.3),0_0_60px_rgba(113,214,206,0.1)]
            transition-all duration-500 ease-out
            hover:scale-[1.05] hover:-translate-y-2
            cursor-pointer overflow-hidden
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
          `}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  minHeight: "320px",
                }}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#71D6CE]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#71D6CE]/20 via-transparent to-[#71D6CE]/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-sm"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon and Title */}
                  <div className="flex items-start mb-6 group-hover:transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-[#71D6CE] mr-4 text-2xl group-hover:drop-shadow-[0_0_8px_rgba(113,214,206,0.8)] transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl lg:text-xl font-semibold text-[#71D6CE] leading-tight group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="flex-grow">
                    <p className="text-gray-200 text-xs lg:text-sm font-normal leading-relaxed group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management and Operations Section */}
      <section className="px-6 py-16 md:px-12 lg:px-32 mt-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#71D6CE] leading-tight">
                Management and Operations Capabilities to Analyze Cloud Cost
              </h2>
              <p className="text-white text-base md:text-lg mt-6 leading-relaxed">
                Take control of your cloud spending with advanced analytics and
                real-time cost monitoring. Our comprehensive dashboard provides
                actionable insights into resource utilization, helping you
                optimize performance while reducing unnecessary expenses.
              </p>
              <p className="text-white text-base md:text-lg mt-4 leading-relaxed">
                Track usage patterns, set budget alerts, and implement automated
                cost-saving measures that align with your business objectives
                and operational requirements.
              </p>
            </div>
            <div className="flex-1 max-w-md">
              <div className="bg-[#093D42] rounded-xl p-6 hover:shadow-[0_0_20px_#71D6CE] transition-all duration-300">
                <h3 className="text-[#71D6CE] text-lg font-semibold mb-4">
                  Unit Cost Analysis
                </h3>
                <div className="relative h-64 mb-4">
                  <div className="absolute inset-0 flex items-end justify-between px-2">
                    {costData.map((data, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className="bg-gradient-to-t from-[#71D6CE] to-[#4FB3A8] rounded-t-sm transition-all duration-1000 hover:brightness-110"
                          style={{
                            height: `${(data.cost / maxCost) * 180}px`,
                            width: "20px",
                            transitionDelay: `${index * 100}ms`,
                          }}
                        />
                        <span className="text-xs text-white mt-2">
                          {data.month}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#71D6CE] text-[#07282C] px-3 py-1 rounded-lg text-sm font-semibold">
                    200 April
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[#71D6CE] font-semibold">
                    Cost Trend
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* inovation section */}

      <section className="px-6 py-16 md:px-12 lg:px-4 ">
        <div className="w-[1200px] mx-auto">
          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row items-start gap-20">
            {/* Right Cards Grid */}
            <div className="w-full lg:w-auto lg:min-w-[500px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:max-w-[400px]">
                {/* Resource Consumption Card */}
                <div className="w-[550px] group bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-[#71D6CE]/30 hover:shadow-[0_0_30px_rgba(113,214,206,0.2)] transition-all duration-500 hover:scale-[1.03] h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-[#71D6CE]/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#71D6CE]/30 transition-all duration-300">
                      <span className="text-[#71D6CE] text-sm">📊</span>
                    </div>
                    <h3 className="text-[#71D6CE] text-lg font-semibold">
                      Real Time Resource Consumption
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>Storage: 60 TB used</span>
                        <span>45 TB - 96TB</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#71D6CE] to-[#4fd1c7] h-2 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_8px_#71D6CE]"
                          style={{ width: "62%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>Compute: 75 cores used</span>
                        <span>55 cores - 578 cores</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#71D6CE] to-[#4fd1c7] h-2 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_8px_#71D6CE]"
                          style={{ width: "13%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>Memory: 1000 MB used</span>
                        <span>656B - 10.4TB</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#71D6CE] to-[#4fd1c7] h-2 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_8px_#71D6CE]"
                          style={{ width: "8%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Network Coverage Card */}
                <div className="flex flex-wrap gap-6">
                  <div className=" group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#71D6CE]/30 hover:shadow-[0_0_30px_rgba(113,214,206,0.2)] transition-all duration-500 hover:scale-[1.03] h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-[#71D6CE]/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#71D6CE]/30 transition-all duration-300">
                        <span className="text-[#71D6CE] text-sm">🌐</span>
                      </div>
                      <h3 className="text-[#71D6CE] text-lg font-semibold">
                        Network Coverage
                      </h3>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="relative w-32 h-32 mb-4">
                        <svg
                          className="w-full h-full transform -rotate-90 group-hover:scale-110 transition-transform duration-500"
                          viewBox="0 0 100 100"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="8"
                            fill="none"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="url(#gradient)"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray="251.2"
                            strokeDashoffset="62.8"
                            className="transition-all duration-1000 drop-shadow-[0_0_6px_#71D6CE]"
                          />
                          <defs>
                            <linearGradient
                              id="gradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#71D6CE" />
                              <stop offset="100%" stopColor="#4fd" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-3xl font-bold text-[#71D6CE] group-hover:scale-110 transition-transform duration-300">
                            78%
                          </span>
                          <span className="text-xs text-gray-300">
                            Monitored
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 w-full">
                        <span>0%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Total Resource Card */}
                <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#71D6CE]/30 hover:shadow-[0_0_30px_rgba(113,214,206,0.2)] transition-all duration-500 hover:scale-[1.03] h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-[#71D6CE]/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#71D6CE]/30 transition-all duration-300">
                      <span className="text-[#71D6CE] text-sm">⚡</span>
                    </div>
                    <h3 className="text-gray-400 text-sm">Total Resource</h3>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-white group-hover:text-[#71D6CE] transition-colors duration-300">
                      29.21k
                    </span>
                    <div className="flex items-center text-[#71D6CE] text-sm bg-[#71D6CE]/10 px-2 py-1 rounded-full">
                      <span className="mr-1">↗</span>
                      <span>+13%</span>
                    </div>
                  </div>
                  <div className="h-16 flex items-end overflow-hidden">
                    <svg
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                      viewBox="0 0 100 40"
                    >
                      <defs>
                        <linearGradient
                          id="lineGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#71D6CE" />
                          <stop offset="100%" stopColor="#4fd1c7" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,35 Q25,25 50,30 T100,20"
                        stroke="url(#lineGradient)"
                        strokeWidth="3"
                        fill="none"
                        className="drop-shadow-[0_0_4px_#71D6CE] group-hover:drop-shadow-[0_0_8px_#71D6CE] transition-all duration-500"
                      />
                      <path
                        d="M0,35 Q25,25 50,30 T100,20 L100,40 L0,40 Z"
                        fill="url(#areaGradient)"
                        opacity="0.1"
                      />
                      <defs>
                        <linearGradient
                          id="areaGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#71D6CE" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="flex-1 lg:max-w-2xl">
              <h3 className="text-lg md:text-3xl font-bold text-[#71D6CE] leading-tight mb-8">
                Innovative Cloud Solutions Tailored to Company Needs
              </h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-[#71D6CE] text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#71D6CE] mb-2">
                      Deliver innovative cloud solutions
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Custom-built architectures that leverage cutting-edge
                      technologies like containerization, microservices, and
                      serverless computing to maximize efficiency and
                      performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 ">
                    <span className="text-[#71D6CE] text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#71D6CE] mb-2">
                      Effective ways to solve complex challenges
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Strategic problem-solving approach that combines industry
                      best practices with innovative solutions to address your
                      unique business challenges and technical requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 ">
                    <span className="text-[#71D6CE] text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#71D6CE] mb-2">
                      Cloud solutions align with vision and goals
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Collaborative approach that ensures every technical
                      decision supports your long-term business objectives and
                      scales with your growth trajectory.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-[#71D6CE] text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#71D6CE] mb-2">
                      Align with Your Vision and Goals
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Through a collaborative engagement model, we ensure every
                      cloud decision aligns with your company’s long-term goals,
                      enabling sustainable growth and seamless scalability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
