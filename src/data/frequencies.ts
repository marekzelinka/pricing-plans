export type FrequencyValue = "monthly" | "annually";

export interface Frequency {
  value: FrequencyValue;
  label: string;
  priceSuffix: string;
}

export const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
] satisfies Frequency[];
