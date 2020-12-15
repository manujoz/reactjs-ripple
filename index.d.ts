import React from 'react';

export interface RippleProps {
    duration: number,
    color: string
}

declare const Ripple: React.SFC<RippleProps>

export default Ripple

