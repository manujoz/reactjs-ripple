# Ripple reactjs

Component for react that creates a ripple effect similar to Material-ui.

## Properties

- color?: string
- duration?: number

## Use

```javascript
import React from "react";
import Ripple from "reactjs-ripple";

export default function MyComponent( props ) {
    return (
        <>
            <div>
                Test component
                <Ripple />
            </div>
            <style jsx>{`
                div {
                    position: relative;
                    padding: 15px;
                    display: inline-block;
                    color: #333;
                    transition: color .5s;
                }
                div:hover {
                    color: red;
                }
            `}</style>
        </>
    )
}
```