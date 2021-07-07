import React from 'react'
import { Navbar } from '.'

export default {
    title: 'App/Navbar',
    component: Navbar
}
export function NavbarStories () {
    return (
        <div>
            <Navbar onToggle={() => { }} />
        </div>
    )
}
