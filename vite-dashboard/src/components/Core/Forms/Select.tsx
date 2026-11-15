/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

export interface ISelectOption {
    label: string;
    value: string | number;
}

interface SelectProps {
    options: ISelectOption[] | undefined,
    onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined,
    placeholder?: string,
    value: string | number,
}

export const Select: React.FC<SelectProps> = ({ options, placeholder, value, onChange, ...props }) => {
    const { theme } = useTheme();

    return (
        // @ts-ignore
        <select id={props.name} onChange={onChange}>
            <option value={value} disabled>
                {placeholder || 'select an option'}
            </option>
            {options?.map((option) => (
                <option key={option.value} value={option.value} color={theme.text}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;