"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, KeyboardEvent } from 'react';

const MainPage = () => {
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleEnter = () => {
    if (password === "1234") {
      console.log("password", password)
      router.push("/desktop")
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleEnter();
    }
  }

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <div className="flex w-full h-[100vh] justify-center items-center z-500 relative">
      <div className="absolute inset-0 z-0">
        <Image 
          alt="배경화면"
          src="/images/desktop.jpg"
          // style={{ width: "auto", height: "auto" }}
          layout="fill"
          objectFit="cover"
          quality={100}
          // width={32}
          // height={32}
        />
      </div>
      
      <div className="flex flex-col relative z-10 w-full h-full justify-center items-center">
        <div className="flex w-[120px] h-[120px] rounded-full bg-red shadow-lg">
          <Image
            alt="로그인 이미지"
            src="/images/profile.jpg"
            style={{ width: "auto", height: "auto" }}
            width={100}
            height={100}
          />
        </div>
        <div className="flex mt-5 mb-3">
          <span>최규철 포트폴리오</span>
        </div>
        <div className="text-black">
          <input 
            type="password" 
            placeholder="1234 ENTER" 
            className="outline-none rounded-lg p-2" 
            value={password}
            onChange={handleValueChange}
            onKeyDown={handleKeyDown}/>
        </div>
      </div>
      
    </div>
  )
}

export default MainPage