'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <main className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              문의하기
            </h1>
            <p className="text-xl text-gray-800">
              궁금한 점이 있으시다면 언제든지 문의해 주세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">문의하기</h2>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScQw1ViHHAmMAwZnISL0YS7PEhVzKbrAE8zVMQKVMMIUo-ScA/viewform?usp=dialog"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg shadow-lg"
              >
                로딩 중...
              </iframe>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8">연락처</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <PhoneIcon className="w-6 h-6 text-yellow-500" />
                    <span className="text-gray-600">010-2962-5841</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <EnvelopeIcon className="w-6 h-6 text-yellow-500" />
                    <span className="text-gray-600">http://pf.kakao.com/_jxlxaIG</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <ClockIcon className="w-6 h-6 text-yellow-500" />
                    <span className="text-gray-600">평일 14:00 - 22:00</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">오시는 길</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    서울 노원구 덕릉로 738 정진145빌딩 7층 
                  </p>
                  <p className="text-gray-600">
                    • 지하철: 4호선 상계역 1번 출구에서 도보 5분<br />
                    • 버스: 1139번, 1138번 상계불암대림아파트 정류장 하차 
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 