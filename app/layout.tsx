import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import MobileMenu from './components/MobileMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '빅토리아영어학원 - 상계동 영어교육의 명가',
  description: '상계동에서 20년 이상의 전통을 자랑하는 빅토리아 영어학원입니다. 유아부터 고등까지 체계적인 영어 교육을 제공합니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-2xl font-bold text-yellow-500">
                빅토리아영어학원
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/programs" className="text-gray-600 hover:text-blue-600 transition-colors">
                  교육과정
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  학원소개
                </Link>
                <Link href="/teachers" className="text-gray-600 hover:text-blue-600 transition-colors">
                  강사소개
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  문의하기
                </Link>
              </div>
              <MobileMenu />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-16">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">빅토리아영어학원</h3>
                <p className="text-gray-400">
                  영어교육 경력 10년 이상의 원장이 직접 가르치는 상계동 최고의 영어학원
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">바로가기</h4>
                <ul className="space-y-2">
                  <li><Link href="/programs" className="text-gray-400 hover:text-white transition-colors">교육과정</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">학원소개</Link></li>
                  <li><Link href="/teachers" className="text-gray-400 hover:text-white transition-colors">강사소개</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">문의하기</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">연락처</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>📞 010-2962-5841</li>
                  <li>📱 http://pf.kakao.com/_jxlxaIG</li>
                  <li>✉️ https://blog.naver.com/victoriaenglish</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">위치</h4>
                <p className="text-gray-400">
                서울 노원구 덕릉로 738 정진145빌딩 7층<br />
                  4호선 상계역 1번 출구 도보 5분
                </p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} 빅토리아영어학원. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 