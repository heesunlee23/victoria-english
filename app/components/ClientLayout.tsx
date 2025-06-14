'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: '홈', href: '/' },
  { name: '학원소개', href: '/about' },
  { name: '프로그램', href: '/programs' },
  { name: '강사소개', href: '/teachers' },
  { name: '공지사항', href: '/blog' }
]

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-yellow-400">빅토리아영어학원</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-600 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href ? 'text-yellow-400' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                문의하기
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="text-gray-600 hover:text-yellow-400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? 'text-yellow-400 bg-yellow-50'
                      : 'text-gray-600 hover:text-yellow-400 hover:bg-yellow-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block w-full text-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                문의하기
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

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
        </div>
      </footer>
    </div>
  )
} 