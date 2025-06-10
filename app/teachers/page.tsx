'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const teachers = [
  {
    name: 'Victoria',
    role: '원장',
    description: '영어 교육 10년 이상 경력의 전문가로, 체계적인 커리큘럼 설계와 학생 지도에 탁월한 능력을 보유하고 있습니다.',
    image: '/images/teachers/victoria.jpg',
    specialties: ['영어 교육 커리큘럼 설계', '학생 맞춤형 지도', '영어 듣기 교육']
  },
  {
    name: 'Bella',
    role: '전임 강사',
    description: '영어교육 관련 자격증 다수 보유한 미국 유학 경험자로, 재미있고 효과적인 영어 교육을 제공합니다.',
    image: '/images/teachers/bella.jpg',
    specialties: ['영어 원서 교육육', '영어 작문 교육', '영어 말하기 교육']
  },
  {
    name: 'Kevin',
    role: '전임 강사',
    description: '다년간의 영어교육 경험을 보유한 전문 강사로, 학생들의 영어 실력 향상을 위한 체계적인 지도를 제공합니다.',
    image: '/images/teachers/kevin.png',
    specialties: ['영어 문법 교육', '영어 독해 교육', '파닉스']
  },
  {
    name: 'Chloe',
    role: '전임 강사',
    description: '대형 어학원에서 다년간 근무한 베테랑 강사로, 학생들의 부족한 부분을 집중적으로 지도합니다.',
    image: '/images/teachers/jenny.png',
    specialties: ['중고등 내신지도', '영어 독해 교육', '영어 작문 교육']
  }
]

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-yellow-400">
        <div className="absolute inset-0">
          {/* <Image
            src="/images/teachers/hero.jpg"
            alt="강사 소개"
            fill
            className="object-cover opacity-20"
          /> */}
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              전문 강사진 소개
            </h1>
            <p className="text-xl text-gray-800">
              풍부한 경험과 전문성을 갖춘 강사진이 체계적인 지도를 제공합니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {teacher.name}
                  </h3>
                  <p className="text-yellow-500 font-semibold mb-4">{teacher.role}</p>
                  <p className="text-gray-600 mb-6">{teacher.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">전문 분야</h4>
                    <ul className="space-y-2">
                      {teacher.specialties.map((specialty, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 text-yellow-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-400 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              지금 바로 시작하세요
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              무료 상담을 통해 빅토리아영어학원의 차별화된 교육을 경험해보세요
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              문의하기
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 