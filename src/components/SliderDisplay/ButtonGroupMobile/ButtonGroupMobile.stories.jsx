import React from 'react';
import ButtonGroupMobile from './ButtonGroupMobile';

export default {
    title: 'Slider Display/ButtonGroupMobile',
    component: ButtonGroupMobile
}

export const Default = () => <ButtonGroupMobile />
export const EditableValue = (args) => <ButtonGroupMobile {...args} />