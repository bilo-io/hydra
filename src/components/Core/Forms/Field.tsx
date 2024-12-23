/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useController, Control } from 'react-hook-form';
import Validation from './Validation';

interface FieldProps {
    name: string;
    control: Control<any>;
    type: 'select' | 'number' | 'text';
    options?: { value: string; label: string }[]; // For select dropdown
    placeholder?: string;
    label?: string;
}

export const Field: React.FC<FieldProps> = ({ name, control, type, options, placeholder, label }) => {
    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
    });

    const renderField = (() => {
        switch (type) {
            case 'select':
                return (
                    <select {...field} id={name}>
                        <option value="" disabled>
                            Select an option
                        </option>
                        {options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                );
            case 'number':
                return <input {...field} id={name} type="number" placeholder={placeholder} step="any" />;
            case 'text':
            default:
                return <input {...field} id={name} type="text" placeholder={placeholder} />;
        }
    })();

    return (
        <div>
            {label && <label htmlFor={name} style={{ fontSize: '0.7rem'}}>{label}</label>}
            <div>
                {renderField}
            </div>
            <Validation error={error} />
        </div>
    );
};

export default Field;
