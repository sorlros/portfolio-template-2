import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainPage from '@/main-page/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <MainPage />
    </main>
  )
}
