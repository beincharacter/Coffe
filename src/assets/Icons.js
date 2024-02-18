import React from 'react';
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/Search.svg';
import LogoIcon from '../assets/icons/logo.png';

const IconComponents = {
    cart: CartIcon,
    search: SearchIcon,
    logo: () => <img src={LogoIcon} />,
};

export const Icon = ({ iconName }) => {
    const IconComponent = IconComponents[iconName];

    if (!IconComponent) {
        console.error(`Icon component not found for iconName: ${iconName}`);
        return null;
    }

    return <IconComponent alt={ iconName } style={{ width: '32px', cursor: 'pointer' }} />;
};
