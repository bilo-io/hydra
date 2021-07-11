import React from 'react'
import News from '.'

export default {
    title: 'Features/News',
    component: News
}

export const NewsStories = () => {
    return (
        <div>
            <News />
        </div>
    )
}
