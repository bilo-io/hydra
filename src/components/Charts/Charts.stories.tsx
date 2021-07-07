import React from 'react'
import LineChart from './LineChart'
import PieChart from './PieChart'

export default {
    title: 'Core/Charts',
    components: [
        LineChart,
        PieChart
    ]
}

export function AsyncStories () {
    const lineData = [15, 21, 33, 25, 12, 43, 56, 58, 64, 45, 34, 22, 43, 28, 21, 11, 23]
    return (
        <>
            <div>
                {/* @ts-ignore */}
                <LineChart data={lineData} title="LineChart Story" isLoading={false} series={{ name: 'Sample', data: lineData }} period={{ label: 'W', days: 7 }}/>
            </div>
            <div>
                <PieChart data={[]} title="PieChart Story" isLoading={ false } selector="value"/>
            </div>
        </>
    )
}
