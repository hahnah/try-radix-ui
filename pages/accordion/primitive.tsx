import React from 'react'
import type { NextPage } from 'next'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

const Accordion: NextPage = () => {
    return (
        <AccordionPrimitive.Root type="single" defaultValue="item-1" collapsible>
            <AccordionPrimitive.Item value="item-1">
                <AccordionPrimitive.Trigger>Is it accessible?</AccordionPrimitive.Trigger>
                <AccordionPrimitive.Content>Yes. It adheres to the WAI-ARIA design pattern.</AccordionPrimitive.Content>
            </AccordionPrimitive.Item>

            <AccordionPrimitive.Item value="item-2">
                <AccordionPrimitive.Trigger>Is it unstyled?</AccordionPrimitive.Trigger>
                <AccordionPrimitive.Content>
                    Yes. It's unstyled by default, giving you freedom over the look and feel.
                </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>

            <AccordionPrimitive.Item value="item-3">
                <AccordionPrimitive.Trigger>Can it be animated?</AccordionPrimitive.Trigger>
                <AccordionPrimitive.Content>
                    Yes! You can animate the Accordion with CSS or JavaScript.
                </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
        </AccordionPrimitive.Root>
    )
}
export default Accordion
