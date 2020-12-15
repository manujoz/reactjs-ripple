import styled from "styled-components";

const RippleContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;

    span {
        transform: scale(0);
        border-radius: 100%;
        position: absolute;
        opacity: 0.5;
        background-color: ${(props) => props.color || "currentColor"};
        animation-name: ripple;
        animation-duration: ${(props) => props.duration}ms;
    }

    @keyframes ripple {
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
`;

export default RippleContainer;
