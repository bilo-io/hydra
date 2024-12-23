/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

interface SelectProps {
    options: { value: string; label: string }[] | undefined,
    placeholder?: string,
    value: string | number,
    // props: any
}

export const Select: React.FC<SelectProps> = ({ options, placeholder, value, ...props }) => {
    const { theme } = useTheme();

    return (
        // @ts-ignore
        <select id={props.name}>
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