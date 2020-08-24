import React from 'react';
import MyButtonGroup from './ButtonGroup';

export default {
    title: 'Component/ButtonGroup',
    component: MyButtonGroup,
};

export const Default = () => <MyButtonGroup />
export const editableButtonGroup = (args) => <MyButtonGroup {...args} />