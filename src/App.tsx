import { Radio, RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
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
          <fieldset aria-label="Payment frequency">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-1 rounded-full p-1 ring-1 ring-inset ring-gray-200"
            >
              {frequencies.map((option) => (
                <Radio
                  key={option.value}
                  value={option}
                  className="cursor-pointer rounded-full px-2.5 py-1 text-center text-xs/5 font-semibold text-gray-500 data-[checked]:bg-indigo-600 data-[checked]:text-white"
                >
                  {option.label}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>
        <div className="isolate mt-10 grid grid-cols-1 gap-8 max-xl:mx-auto max-lg:max-w-md md:grid-cols-2 md:max-lg:max-w-2xl lg:max-xl:max-w-4xl xl:grid-cols-4">
          {plans.map((plan) => (
            <div key={plan.id} className="rounded-3xl p-8 ring-1 ring-gray-200">
              <h3
                id={plan.id}
                className="text-lg/8 font-semibold text-gray-900"
              >
                {plan.name}
              </h3>
              <p className="mt-4 text-sm/6 text-gray-600">{plan.description}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  {plan.price[frequency.value]}
                </span>
                <span className="text-sm/6 font-semibold text-gray-600">
                  /month
                </span>
              </p>
              <div className="mt-6 grid">
                <a
                  href={plan.href}
                  className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm/6 font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  aria-describedby={plan.id}
                >
                  Buy plan
                </a>
              </div>
              <ul role="list" className="mt-8 grid gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm/6 text-gray-600"
                  >
                    <CheckIcon className="size-5 flex-none text-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
