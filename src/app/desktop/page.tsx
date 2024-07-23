"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



const initialIcons = [
  { id: 'icon-1', title: 'Internet Browser', type: 'browser' },
  // 다른 아이콘들을 추가할 수 있습니다.
];

const Desktop = () => {
  const [icons, setIcons] = useState(initialIcons);
  const [openBrowser, setOpenBrowser] = useState(false);

  const handleIconDoubleClick = (type: string) => {
    if (type === 'browser') {
      setOpenBrowser(true);
    }
  };

  return (
    <div className="relative w-full h-[100vh]">
      <Image 
        alt="배경화면"
        src="/images/desktop.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 flex flex-wrap p-4">
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="w-20 h-20 m-4 p-2 flex flex-col items-center cursor-pointer bg-white bg-opacity-50 rounded"
            onDoubleClick={() => handleIconDoubleClick(icon.type)}
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded mb-2"></div>
            <span className="text-sm text-center">{icon.title}</span>
          </div>
        ))}
      </div>
      {openBrowser && <BrowserWindow onClose={() => setOpenBrowser(false)} />}
    </div>
  );
};


const BrowserWindow = ({ onClose }: { onClose: () => void }) => {
  const [url, setUrl] = useState("https://");
  const [iframeUrl, setIframeUrl] = useState("");

  const handleGoClick = () => {
    const validUrl = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
    setIframeUrl(validUrl);
  };

  return (
    <div className="absolute top-10 left-10 w-[80vw] h-[80vh] bg-white shadow-lg">
      <div className="flex justify-between items-center p-2 bg-gray-200">
        <input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          className="w-full p-2 border rounded text-black"
        />
        <button onClick={handleGoClick} className="p-2 bg-blue-500 text-white rounded ml-2">Go</button>
        <button onClick={onClose} className="p-2 bg-red-500 text-white rounded ml-2">Close</button>
      </div>
      <iframe src={iframeUrl} className="w-full h-full" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>
    </div>
  );
};

export default Desktop;
