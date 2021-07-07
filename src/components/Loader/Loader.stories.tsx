import React from 'react'
import { Loader, LoaderType } from '.'

export default {
    title: 'Loader',
    component: Loader
}
export function LoaderStories () {
    return (
        <div>
            <Loader type={LoaderType.SPINNER} color={'#00adee'} />
        </div>
    )
}
