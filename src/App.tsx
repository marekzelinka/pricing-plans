import { useState } from "react";
import { FrequencySwitch } from "./components/FrequencySwitch";
import { PlanCard } from "./components/PlanCard";
import { frequencies } from "./data/frequencies";
import { plans } from "./data/plans";

export default function PricingPlans() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base/7 font-semibold text-indigo-600">
            Pricing plans
          </h1>
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Pricing that grows with you
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-2xl text-center">
          <p className="text-pretty text-lg font-medium text-gray-600 sm:text-xl/8">
            Choose an affordable plan that’s packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
        </div>
        <div className="mt-16 flex justify-center">
          <FrequencySwitch value={frequency} onChange={setFrequency} />
        </div>
        <div className="isolate mt-10 grid grid-cols-1 gap-8 max-xl:mx-auto max-lg:max-w-md md:grid-cols-2 md:max-lg:max-w-2xl lg:max-xl:max-w-4xl xl:grid-cols-4">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} frequency={frequency} />
          ))}
        </div>
      </div>
    </div>
  );
}
