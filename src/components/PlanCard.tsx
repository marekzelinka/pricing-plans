import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import type { Frequency } from "../data/frequencies";
import type { Plan } from "../data/plans";

export function PlanCard({
  plan,
  frequency,
}: {
  plan: Plan;
  frequency: Frequency;
}) {
  return (
    <div
      key={plan.id}
      className={clsx(
        "rounded-3xl p-8",
        plan.mostPopular ? "ring-2 ring-indigo-500" : "ring-1 ring-gray-200",
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <h3
          id={plan.id}
          className={clsx(
            "text-lg/8 font-semibold",
            plan.mostPopular ? "text-indigo-600" : "text-gray-900",
          )}
        >
          {plan.name}
        </h3>
        {plan.mostPopular ? (
          <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600">
            Most popular
          </p>
        ) : null}
      </div>
      <p className="mt-4 text-sm/6 text-gray-600">{plan.description}</p>
      <p className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-semibold tracking-tight text-gray-900">
          {plan.price[frequency.value]}
        </span>
        <span className="text-sm/6 font-semibold text-gray-600">/month</span>
      </p>
      <div className="mt-6 grid">
        <a
          href={plan.href}
          className={clsx(
            "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            plan.mostPopular
              ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
              : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
          )}
          aria-describedby={plan.id}
        >
          Buy plan
        </a>
      </div>
      <ul role="list" className="mt-8 grid gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm/6 text-gray-600">
            <CheckIcon className="size-5 flex-none text-indigo-600" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
