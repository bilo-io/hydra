/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Field from '../../components/Core/Forms/Field'; // Assuming the Field component is in the same folder
import ThemePicker from '../../components/Config/ThemePicker';
import Button from '../../components/Core/Forms/Button';
import LanguagePicker from '../../components/Config/LanguagePicker';
import { fiatCurrencyOptions } from '../../utils/constants';
import { Divider } from '../../components/Core';

// Validation schema with Yup
const schema = Yup.object({
    baseCurrency: Yup.string().oneOf(['usd', 'zar', 'euro'], 'Invalid currency')
        .required('Base currency is required'),
}).required();

type FormData = {
    baseCurrency: 'usd' | 'zar' | 'euro';
};

const MyForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='px-4'>
            <div>
                <Field
                    name="baseCurrency"
                    control={control}
                    type="select"
                    label="Base Currency"
                    options={fiatCurrencyOptions}
                />
            </div>

            <Divider />

            <LanguagePicker />
            
            <Divider />
            
            <ThemePicker />
            
            <Divider />
            
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
