import { Radio, RadioGroup } from "@headlessui/react";
import type { Dispatch, SetStateAction } from "react";
import { frequencies, type Frequency } from "../data/frequencies";

export function FrequencySwitch({
  value,
  onChange,
}: {
  value: Frequency;
  onChange: Dispatch<SetStateAction<Frequency>>;
}) {
  return (
    <fieldset aria-label="Payment frequency">
      <RadioGroup
        value={value}
        onChange={onChange}
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
  );
}
