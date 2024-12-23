import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from '../components/Core'

type LandingProps = object

export const Portfolio: React.FC<LandingProps> = () => {
    const { t } = useTranslation();

    return (
        <View className='w-full'>
            <Text className='text-xl font-semibold'>{t('portfolio')}</Text>
        </View>
    );
};

export default Portfolio;