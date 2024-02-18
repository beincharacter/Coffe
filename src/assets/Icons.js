import React from 'react';
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/Search.svg';
import { ReactComponent as ArrowIcon } from '../assets/icons/cursor.svg';
import { ReactComponent as RightArrowIcon } from '../assets/icons/arrow-right.svg';
import LogoIcon from '../assets/icons/logo.png';
import CupIcon from '../assets/icons/cup.png';
import HotCupIcon from '../assets/icons/hotcup.png';
import BeansIcon from '../assets/icons/beans.png';
import LongCupIcon from '../assets/icons/longcup.png';
import coffeeStripIcon from '../assets/icons/coffeestrip.png';

const IconComponents = {
    cart: CartIcon,
    search: SearchIcon,
    arrow: ArrowIcon,
    rightarrow: RightArrowIcon,
    logo: LogoIcon,
    cup: CupIcon,
    beans: BeansIcon,
    hotcup: HotCupIcon,
    longcup: LongCupIcon,
    coffeeStrip: coffeeStripIcon
};

export const Icon = ({ iconName, styles, className }) => {
    const IconComponent = IconComponents[iconName];

    if (!IconComponent) {
        console.error(`Icon component not found for iconName: ${iconName}`);
        return null;
    }

    // Check if IconComponent is an SVG icon
    if (typeof IconComponent !== 'string') {
        const MergedStyles = {
            cursor: 'pointer',
            ...styles,
        };

        return <IconComponent className={className} alt={iconName} style={MergedStyles} />;
    }

    // For PNG images
    return <img className={className} src={IconComponent} alt={iconName} style={styles} />;
};
