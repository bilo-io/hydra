import React from 'react';

export interface ISelectOption {
  label: string;
  value: string | number;
}

interface SelectProps {
  options: ISelectOption[] | undefined;
  onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  placeholder?: string;
  value: string | number;
  name?: string;
}

export const Select: React.FC<SelectProps> = ({ options, placeholder, value, onChange, ...props }) => {
  return (
    <select
      id={props.name}
      value={value ?? ''}
      onChange={onChange}
      className="rounded-lg border border-input bg-background px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <option value="" disabled>
        {placeholder || 'Select an option'}
      </option>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
