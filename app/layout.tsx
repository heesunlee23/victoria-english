import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './components/ClientLayout'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: '빅토리아영어학원 - 상계동 최고의 영어학원원',
  description: '유아부터 성인까지 체계적인 영어 교육을 제공합니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={inter.className}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
} 