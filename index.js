import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import RippleContainer from "./src/RippleContainer";

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
    useLayoutEffect(() => {
        let bounce = null;
        if (rippleCount > 0) {
            clearTimeout(bounce);

            bounce = setTimeout(() => {
                cleanUpFunction();
                clearTimeout(bounce);
            }, duration * 4);
        }

        return () => clearTimeout(bounce);
    }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple = ({ duration = 850, color }) => {
    const [rippleArray, setRippleArray] = useState([]);
    const [radius, setRadius] = useState("none");
    const containerRef = useRef(null);

    useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
        setRippleArray([]);
    });

    useEffect(() => {
        const container = containerRef.current.parentElement;
        const computed = document.defaultView.getComputedStyle(container, "");
        setRadius(computed.borderRadius);
    });

    const addRipple = (event) => {
        const rippleContainer = event.currentTarget.getBoundingClientRect();
        const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;
        const x = event.pageX - rippleContainer.x - size / 2;
        const y = event.pageY - rippleContainer.y - size / 2;
        const newRipple = {
            x,
            y,
            size,
        };

        setRippleArray([...rippleArray, newRipple]);
    };

    return (
        <RippleContainer ref={containerRef} duration={duration} color={color} radius={radius} onMouseDown={addRipple}>
            {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => {
                    return (
                        <span
                            key={"span" + index}
                            style={{
                                top: ripple.y,
                                left: ripple.x,
                                width: ripple.size,
                                height: ripple.size,
                            }}
                        />
                    );
                })}
        </RippleContainer>
    );
};

export default Ripple;
