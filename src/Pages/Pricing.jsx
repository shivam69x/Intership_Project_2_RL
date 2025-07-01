import { useState } from "react";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingData = [
    {
      id: "basic",
      name: "Basic",
      description: "Perfect for getting started",
      monthlyPrice: 9,
      yearlyPrice: 90,
      popular: false,
      features: [
        "Up to 3 projects",
        "5GB storage",
        "Email support",
        "Basic analytics",
        "Mobile app access",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      description: "Most popular for growing teams",
      monthlyPrice: 29,
      yearlyPrice: 290,
      popular: true,
      features: [
        "Unlimited projects",
        "50GB storage",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "API access",
        "Custom integrations",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Advanced features for large organizations",
      monthlyPrice: 99,
      yearlyPrice: 990,
      popular: false,
      features: [
        "Everything in Pro",
        "Unlimited storage",
        "24/7 phone support",
        "Custom reporting",
        "SSO integration",
        "Advanced security",
        "Dedicated account manager",
        "Custom onboarding",
      ],
    },
  ];

  const formatPrice = (monthly, yearly) => (isYearly ? yearly : monthly);

  const calculateSavings = (monthly, yearly) => {
    const monthlyCost = monthly * 12;
    const savings = monthlyCost - yearly;
    return Math.round((savings / monthlyCost) * 100);
  };

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
    <>
      <div className="bg-[#07282C] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg sm:text-xl text-[#71D6CE] mb-8 max-w-2xl mx-auto">
              Select the perfect plan for your needs. All plans include our core
              features with varying levels of usage and support.
            </p>

            {/* Unique Billing Toggle */}
            <div className="inline-flex items-center justify-center bg-[#0A3A40] p-1 rounded-full border border-[#71D6CE] shadow-inner">
              <button
                className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                  !isYearly
                    ? "bg-[#71D6CE] text-[#07282C] shadow"
                    : "text-white"
                }`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                  isYearly ? "bg-[#71D6CE] text-[#07282C] shadow" : "text-white"
                }`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
              </button>
            </div>

            {isYearly && (
              <div className="mt-3 text-sm text-[#71D6CE] font-medium">
                Save up to 17% with yearly billing
              </div>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {pricingData.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-[#0A3A40] rounded-lg p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? "border-2 border-[#71D6CE] shadow-xl ring-4 ring-[#71D6CE]/20"
                    : "border border-gray-600 hover:border-[#71D6CE]/50"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#71D6CE] to-[#4DBEB8] text-[#07282C] text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Top Content */}
                <div>
                  <div className="text-center mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-[#71D6CE] text-sm mb-6">
                      {plan.description}
                    </p>

                    <div className="mb-6">
                      <span className="text-4xl sm:text-5xl font-bold text-white">
                        ${formatPrice(plan.monthlyPrice, plan.yearlyPrice)}
                      </span>
                      <span className="text-[#71D6CE] text-lg ml-2">
                        /{isYearly ? "year" : "month"}
                      </span>
                      {isYearly && (
                        <div className="text-sm text-[#71D6CE] mt-2">
                          Save{" "}
                          {calculateSavings(
                            plan.monthlyPrice,
                            plan.yearlyPrice
                          )}
                          % vs monthly
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-[#71D6CE] mt-0.5" />
                        <span className="text-white text-sm leading-6">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button (Always Aligned Bottom) */}
                <div className="mt-auto">
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-[#07282C] ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#71D6CE] to-[#4DBEB8] text-[#07282C] hover:shadow-lg focus:ring-[#71D6CE]"
                        : "bg-white text-[#07282C] hover:bg-[#71D6CE] hover:text-[#07282C] focus:ring-white"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Management and Operations Section */}
      <section className="px-4 py-12 sm:px-6 md:px-12 lg:px-32 mt-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12">
            {/* Text Content */}
            <div className="flex-1 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#71D6CE] leading-snug">
                Management and Operations Capabilities to Analyze Cloud Cost
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg mt-4 sm:mt-6 leading-relaxed">
                Take control of your cloud spending with advanced analytics and
                real-time cost monitoring. Our comprehensive dashboard provides
                actionable insights into resource utilization, helping you
                optimize performance while reducing unnecessary expenses.
              </p>
              <p className="text-white text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
                Track usage patterns, set budget alerts, and implement automated
                cost-saving measures that align with your business objectives
                and operational requirements.
              </p>
            </div>

            {/* Chart Box */}
            <div className="flex-1 w-full max-w-md">
              <div className="bg-[#093D42] rounded-xl p-5 sm:p-6 hover:shadow-[0_0_20px_#71D6CE] transition-all duration-300">
                <h3 className="text-[#71D6CE] text-base sm:text-lg font-semibold mb-4">
                  Unit Cost Analysis
                </h3>
                <div className="relative h-64 mb-4">
                  <div className="absolute inset-0 flex items-end justify-between px-1 sm:px-2">
                    {costData.map((data, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className="bg-gradient-to-t from-[#71D6CE] to-[#4FB3A8] rounded-t-sm transition-all duration-1000 hover:brightness-110"
                          style={{
                            height: `${(data.cost / maxCost) * 180}px`,
                            width: "16px",
                            transitionDelay: `${index * 100}ms`,
                          }}
                        />
                        <span className="text-[10px] sm:text-xs text-white mt-2">
                          {data.month}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#71D6CE] text-[#07282C] px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg text-xs sm:text-sm font-semibold">
                    200 April
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[#71D6CE] font-semibold text-sm">
                    Cost Trend
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
