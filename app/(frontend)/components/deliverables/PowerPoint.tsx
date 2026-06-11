'use client';

import { useEffect, useState } from 'react';

export default function PowerPoint({ fileName }: { fileName: string }) {
    const [isLocalhost, setIsLocalhost] = useState(true);
    const [deployedUrl, setDeployedUrl] = useState('');

    const localFilePath = `/presentations/${fileName}`;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
            setIsLocalhost(isLocal);
            setDeployedUrl(`${window.location.origin}${localFilePath}`);
        }
    }, [localFilePath]);

    const officeViewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(deployedUrl)}`;

    return (
        <div className="w-full max-w-4xl mx-auto my-4 aspect-video border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-gray-50 flex flex-col justify-center items-center">
            {isLocalhost ? (
                <div className="text-center p-6">
                    <p className="text-gray-600 mb-4 font-medium">
                        Doesn't work on localhost!
                    </p>
                    <a 
                        href={localFilePath} 
                        download
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
                    >
                        Download & Preview Local PPTX
                    </a>
                    <p className="text-xs text-gray-400 mt-2">
                        The embedded slideshow will work once deployed to production.
                    </p>
                </div>
            ) : (
                <iframe
                    src={officeViewerUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="PowerPoint Presentation"
                    allowFullScreen
                >
                    This browser does not support inline presentations. 
                    <a href={localFilePath}>Click here to download it.</a>
                </iframe>
            )}
        </div>
    );
}
