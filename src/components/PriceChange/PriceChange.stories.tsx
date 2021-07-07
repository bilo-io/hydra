import React from 'react'
import PriceChange from 'components/PriceChange'

export default {
    title: 'PriceChange',
    component: PriceChange
}

export const PriceChageStory = () => {
    return (
        <div>
            <PriceChange value={100} percentage={3.4}/>
        </div>
    )
}
