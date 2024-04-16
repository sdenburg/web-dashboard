'use client'

import * as React from 'react';
import { setupApiMockServer } from '@/api/server';


export default function ClientSetup() {
    React.useEffect(() => {
        setupApiMockServer()
        if (typeof window !== 'undefined') {
            if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
                require("mocks/browser");
            }
        }
    })

    return (
        <React.Fragment>
        </React.Fragment>
    );
}
