'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('문의 전송에 실패했습니다.')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    전화번호
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    문의내용
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? '전송 중...' : '문의하기'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">문의가 성공적으로 전송되었습니다.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center">문의 전송 중 오류가 발생했습니다. 다시 시도해 주세요.</p>
                )}
              </form>
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