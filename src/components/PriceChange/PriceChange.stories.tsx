import React from 'react'
import PriceChange from 'components/PriceChange'

export default {
    title: 'Fintech/PriceChange',
    component: PriceChange
}

export const PriceChageStory = () => {
    return (
        <div>
            <div style={{ width: '10rem' }}>
                <PriceChange value={100} percentage={3.4}/>
            </div>
        </div>
    )
}
