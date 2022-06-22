import React, { forwardRef } from 'react';

const Page = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            {...props}
        >
            <title>Easy Devops</title>
            {props.children}
        </div>
    );
});

export default Page;
