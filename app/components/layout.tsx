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
  { name: '갤러리', href: '/gallery' },
  { name: '공지사항', href: '/blog' },
  { name: '문의하기', href: '/contact' }
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">빅토리아영어학원</h3>
              <p className="text-gray-600">
                체계적인 커리큘럼과 풍부한 경험을 가진 원어민 강사진이 함께하는
                최고의 영어 교육을 제공합니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">연락처</h3>
              <p className="text-gray-600">전화: 02-123-4567</p>
              <p className="text-gray-600">이메일: info@victoria-english.com</p>
              <p className="text-gray-600">주소: 서울특별시 노원구 상계동 123-45</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">운영시간</h3>
              <p className="text-gray-600">평일: 09:00 - 20:00</p>
              <p className="text-gray-600">토요일: 09:00 - 15:00</p>
              <p className="text-gray-600">일요일 및 공휴일: 휴무</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>&copy; 2024 빅토리아영어학원. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 