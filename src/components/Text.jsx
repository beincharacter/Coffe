// Text.jsx

import React from "react";

export const Text = ({ text, className, styles }) => {
    return (
        <p className={className} style={styles}>
            {text}
        </p>
    );
};
