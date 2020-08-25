import React from 'react';
import Footer from './Footer';

export default {
    title: 'Section/Footer',
    component: Footer,
}

export const Default = () => <Footer />
export const MobileView = () => <Footer />
export const IpadView = () => <Footer />
export const largeScreen = () => <Footer />

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