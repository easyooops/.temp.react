import React from 'react';
import BaseLayout from './project/layout/base';
import Home from './project/view/home';
import MSA from './project/view/msa';

const RouteConfig = [
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/msa', element: <MSA /> }
        ]
    }
];

export default RouteConfig;
