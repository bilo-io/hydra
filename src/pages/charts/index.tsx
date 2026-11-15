import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from '../../components/Core';
import ExampleVictory from '../../components/Core/Charts/victory/Example';
import ExampleRecharts from '../../components/Core/Charts/recharts/Example';
import ExampleChartJS from '../../components/Core/Charts/react-chartjs-2/Example';

export const Charts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View isPage className="w-full space-y-6 p-6">
      <div>
        <span className="chip mb-2">Multi-Engine Visualization Lab</span>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          <Text className="text-2xl font-bold">{t('charts')}</Text>
        </h1>
        <p className="text-sm text-muted-foreground">
          Side-by-side quantitative chart engines (Recharts, Victory, Chart.js) comparing portfolio
          metrics, volume, and factor exposure.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="surface space-y-3 p-5">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <h2 className="text-sm font-semibold text-foreground">Recharts Suite</h2>
            <span className="chip">SVG</span>
          </div>
          <div className="overflow-x-auto">
            <ExampleRecharts />
          </div>
        </div>

        <div className="surface space-y-3 p-5">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <h2 className="text-sm font-semibold text-foreground">Victory Suite</h2>
            <span className="chip">D3 / SVG</span>
          </div>
          <div className="overflow-x-auto">
            <ExampleVictory />
          </div>
        </div>

        <div className="surface space-y-3 p-5">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <h2 className="text-sm font-semibold text-foreground">Chart.js Suite</h2>
            <span className="chip">Canvas</span>
          </div>
          <div className="overflow-x-auto">
            <ExampleChartJS />
          </div>
        </div>
      </div>
    </View>
  );
};

export default Charts;
