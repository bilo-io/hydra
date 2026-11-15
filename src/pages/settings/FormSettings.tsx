import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Field from '../../components/Core/Forms/Field';
import ThemePicker from '../../components/Config/ThemePicker';
import Button from '../../components/Core/Forms/Button';
import LanguagePicker from '../../components/Config/LanguagePicker';
import { fiatCurrencyOptions } from '../../utils/constants';
import { Divider } from '../../components/Core';

const schema = Yup.object({
  baseCurrency: Yup.string()
    .oneOf(['usd', 'zar', 'eur'], 'Invalid currency')
    .required('Base currency is required'),
}).required();

type FormData = {
  baseCurrency: 'usd' | 'zar' | 'eur';
};

const FormSettings: React.FC = () => {
  const [saved, setSaved] = useState(false);
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: { baseCurrency: 'usd' },
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <h2 className="mb-2 text-sm font-semibold text-foreground">Base Display Currency</h2>
        <Field
          name="baseCurrency"
          control={control as any}
          type="select"
          label="Fiat Reference"
          options={fiatCurrencyOptions}
        />
      </div>

      <Divider />

      <div>
        <h2 className="mb-2 text-sm font-semibold text-foreground">Language</h2>
        <LanguagePicker />
      </div>

      <Divider />

      <div>
        <h2 className="mb-2 text-sm font-semibold text-foreground">Theme Preference</h2>
        <ThemePicker />
      </div>

      <Divider />

      <div className="flex items-center gap-3">
        <Button type="submit">Save Preferences</Button>
        {saved && (
          <span className="text-xs font-medium text-emerald-500">Preferences saved!</span>
        )}
      </div>
    </form>
  );
};

export default FormSettings;
