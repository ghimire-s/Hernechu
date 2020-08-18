import React from 'react';
import MyButton from './Button'



export default {
    title: 'Styling/Button',
    component: MyButton,
    argTypes: {
        color: {
            defaultValue: ["#7986cb"],
            description: "Colors used in the Theme",
            control: {
                type: 'select',
                options: [
                    "#000",
                    "#fff",
                    "#fafafa",
                    "#7986cb",
                    "rgba(74, 144, 226, 1)",
                    "rgba(29, 29, 32, 1)",
                    "#ff4081",
                    "rgba(80, 227, 194, 1)",
                    "#c51162",
                    "#e57373",
                    "#f44336",
                    "#d32f2f",
                    "rgba(0, 0, 0, 0.38)",
                    "rgba(0, 0, 0, 0.54)",
                    "rgba(0, 0, 0, 1)",],
            }
        }
    }
}

export const DefaultColorMyButton = (args) => <MyButton {...args} />