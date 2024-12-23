/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Field from '../../components/Core/Forms/Field'; // Assuming the Field component is in the same folder
import ThemeSwitcher from '../../context/ThemeSwitcher';
import Button from '../../components/Core/Forms/Button';

// Validation schema with Yup
const schema = Yup.object({
    baseCurrency: Yup.string().oneOf(['usd', 'zar', 'euro'], 'Invalid currency')
        .required('Base currency is required'),
    language: Yup.string().oneOf(['en', 'de', 'fr'], 'Invalid language')
        .required('Language is required'),
    theme: Yup.string().oneOf(['dark', 'light', 'custom'], 'Invalid theme')
        .required('Theme is required'),
    customThemeColor: Yup.string()
    //     .when('theme', {
    //     is: 'custom',
    //     then: Yup.string().required('Custom theme color is required')
    // }),
}).required();

type FormData = {
    baseCurrency: 'usd' | 'zar' | 'euro';
    language: 'en' | 'de' | 'fr';
    theme: 'dark' | 'light' | 'custom';
    customThemeColor?: string;
};

const MyForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Field
                    name="baseCurrency"
                    control={control}
                    type="select"
                    label="Base Currency"
                    options={[
                        { value: 'usd', label: 'USD' },
                        { value: 'zar', label: 'ZAR' },
                        { value: 'euro', label: 'Euro' }
                    ]}
                />
            </div>

            <div>
                <Field
                    name="language"
                    control={control}
                    type="select"
                    label="Language"
                    options={[
                        { value: 'en', label: 'English' },
                        { value: 'de', label: 'German' },
                        { value: 'fr', label: 'French' }
                    ]}
                />
            </div>

            <div>
                <Field
                    name="theme"
                    control={control}
                    type="select"
                    label="Theme"
                    options={[
                        { value: 'dark', label: 'Dark' },
                        { value: 'light', label: 'Light' },
                        { value: 'custom', label: 'Custom' }
                    ]}
                />
            </div>

            <ThemeSwitcher />

            <br />

            {/* @ts-ignore */}
            {errors.theme?.value === 'custom' && (
                <div>
                    <Field
                        name="customThemeColor"
                        control={control}
                        type="text"
                        label="Custom Theme Color"
                        placeholder="Enter custom theme color"
                    />
                </div>
            )}

            <div>
                <Button type="submit">{'Submit'}</Button>
            </div>
        </form>
    );
};

export default MyForm;
