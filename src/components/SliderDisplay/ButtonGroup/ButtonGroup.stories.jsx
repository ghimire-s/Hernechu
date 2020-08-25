import React from 'react';
import MyButtonGroup from './ButtonGroup';

export default {
    title: 'Slider Display/ButtonGroup',
    component: MyButtonGroup,
};

export const Default = () => <MyButtonGroup />
export const editableButtonGroup = (args) => <MyButtonGroup {...args} />