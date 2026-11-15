/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useController, Control } from 'react-hook-form';
import Validation from './Validation';
import Input from './Input';
import Select, { ISelectOption } from './Select';

interface FieldProps {
    name: string;
    control: Control<any>;
    type: 'select' | 'number' | 'text';
    options?: ISelectOption[]; // For select dropdown
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
                return <Select {...field} options={options} placeholder={placeholder} />;
            case 'number':
                return <Input {...field} id={name} type="number" placeholder={placeholder} step="any" />;
            case 'text':
            default:
                return <Input {...field} id={name} type="text" placeholder={placeholder} />;
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
