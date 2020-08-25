import React from 'react';
import MyCard from './Card';

export default {
    title: 'Section/Card',
    component: MyCard
}

export const Default = () => <MyCard />
export const TryDifferentImage = (args) => <MyCard {...args} />
export const MobileView = () => <MyCard />
export const IpadView = () => <MyCard />
export const largeScreen = () => <MyCard />

MobileView.parameters = {
    viewport: {
        defaultViewport: 'xs'
    },
}

IpadView.parameters = {
    viewport: {
        defaultViewport: 'sm'
    },
}

largeScreen.parameters = {
    viewport: {
        defaultViewport: 'xl'
    },
}