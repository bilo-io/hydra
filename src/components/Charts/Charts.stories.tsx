import React from 'react';
import LineChart from './LineChart';
import PieChart from './PieChart';

export default {
  title: 'Charts',
  components: [
    LineChart,
    PieChart
  ],
}

export function AsyncStories() {
  return (
    <div>
      <PieChart data={[]} title="PieChart_Story" isLoading={ false } selector="value"/>
    </div>
  );
}
