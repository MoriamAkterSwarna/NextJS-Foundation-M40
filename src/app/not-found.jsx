import Link from 'next/link';
import React from 'react';

const NOtFoundPage = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <Link href="/">Go back to Home</Link>
        </div>
    );
};

export default NOtFoundPage;