import { plans } from "./data";

export default function PricingPlans() {
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
          <div className="isolate grid grid-cols-1 gap-8 max-xl:mx-auto max-lg:max-w-md md:grid-cols-2 md:max-lg:max-w-2xl lg:max-xl:max-w-4xl xl:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-3xl p-8 ring-1 ring-gray-200"
              >
                <h3 className="text-lg/8 font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 text-sm/6 text-gray-600">
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight text-gray-900">
                    {plan.price.monthly}
                  </span>
                  <span className="text-sm/6 font-semibold text-gray-600">
                    /month
                  </span>
                </p>
                <a
                  href={plan.href}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md px-3 py-2 text-sm/6 font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Buy plan
                </a>
                <ul className="mt-8 grid gap-3 text-sm/6 text-gray-600">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
