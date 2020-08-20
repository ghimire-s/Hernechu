import React from 'react';

import Logo from './Logo';



export default {
    title: 'Header/Logo',
    component: Logo,
};

export const primary = () => <Logo websiteName="Hernucha" />
export const editable = (args) => <Logo websiteName="Hernucha" {...args} />