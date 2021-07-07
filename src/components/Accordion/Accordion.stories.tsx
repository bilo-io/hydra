import React from 'react'
import Accordion from 'components/Accordion'

export default {
    title: 'Core/Accordion',
    component: Accordion
}

export const AccordionStory = () => {
    return (
        <div>
            <Accordion title="Accordion 1" />

            <Accordion title="Accordion 2">

            </Accordion>

            <Accordion title="Accordion 3">
                <div>Peek-A-Boo</div>
            </Accordion>

            <Accordion title="Accordion 4">
                <div>Peek-A-Boo</div>
            </Accordion>

            <Accordion title="Accordion 5">
                <div>Peek-A-Boo</div>
            </Accordion>
        </div>
    )
}
