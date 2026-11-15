import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text, View } from '../../components/Core'
import ExampleVictory from '../../components/Core/Charts/victory/Example';
import ExampleRecharts from '../../components/Core/Charts/recharts/Example';
import ExampleChartJS from '../../components/Core/Charts/react-chartjs-2/Example';

type ChartProps = object

export const Charts: React.FC<ChartProps> = () => {
    const { t } = useTranslation();

    return (
        <View isPage className='w-full'>
            <Text className='text-xl font-semibold'>{t('trade')}</Text>
            <View flexRow className=''>
                <ExampleVictory />
                <ExampleRecharts />
                <ExampleChartJS />
            </View>
        </View>
    );
};

export default Charts;