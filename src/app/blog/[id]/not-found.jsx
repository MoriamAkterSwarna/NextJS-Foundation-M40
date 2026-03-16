import Link from 'next/link';
import React from 'react';

const IdNotFoundPage = () => {
    return (
        <div>
            <h1>Blog Post Not Found</h1>
            <p>The blog post you are looking for does not exist.</p>
            <Link href="/blog">Go back to Blog</Link>
        </div>
    );
};

export default IdNotFoundPage;