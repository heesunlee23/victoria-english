'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const programs = [
  {
    title: '유치부 프로그램',
    description: '영어에 대한 흥미와 자신감을 키우는 유아 영어 교육',
    features: [
      '재미있는 영어 놀이와 활동',
      '베테랑 선생님과 함께하는 자연스러운 영어 환경',
      '기초 파닉스와 영어 발음 학습',
      '영어 노래와 챈트를 통한 학습',
      '소그룹 수업으로 개별 관심 제공'
    ],
    image: 'https://images.unsplash.com/photo-1558907353-ceb54f3882ed?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/programs/kindergarten'
  },
  {
    title: '초등부 프로그램',
    description: '체계적인 커리큘럼으로 기초부터 차근차근 다지는 영어 실력',
    features: [
      '기초 문법과 어휘력 향상',
      '영어 말하기와 듣기 능력 개발',
      '영어 독해와 작문 실력 향상',
      '영어 프레젠테이션 능력 배양',
      '영어 시험 대비 학습'
    ],
    image: 'https://images.unsplash.com/photo-1534643960519-11ad79bc19df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/programs/elementary'
  },
  {
    title: '중등부 프로그램',
    description: '학교 교육과정과 연계된 체계적인 영어 교육',
    features: [
      '중학교 교육과정 연계 학습',
      '영어 시험 대비 특화 교육',
      '영어 말하기와 작문 실력 향상',
      '영어 독해와 문법 실력 강화',
      '영어 프레젠테이션 능력 개발'
    ],
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/programs/middle'
  },
  {
    title: '고등부 프로그램',
    description: '대학 입시와 실용 영어를 위한 맞춤형 교육',
    features: [
      '수능 영어 대비 특화 교육',
      '영어 독해와 문법 실력 강화',
      '영어 말하기와 작문 실력 향상',
      '영어 프레젠테이션 능력 개발',
      '영어 시험 대비 학습'
    ],
    image: 'https://images.unsplash.com/photo-1659080922708-83eb680a54e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/programs/high'
  },
  {
    title: '성인 프로그램',
    description: '실용적인 영어 회화와 비즈니스 영어 교육',
    features: [
      '실생활 영어 회화 학습',
      '비즈니스 영어 교육',
      '영어 프레젠테이션 능력 개발',
      '영어 작문과 이메일 작성법',
      '영어 시험 대비 학습'
    ],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=60',
    link: '/programs/adult'
  }
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-yellow-400">
        <div className="absolute inset-0">
          {/* <Image
            src="/images/programs/hero.jpg"
            alt="교육과정"
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
              교육과정
            </h1>
            <p className="text-xl text-gray-800">
              학생들의 수준과 목표에 맞는 맞춤형 교육 프로그램을 제공합니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {program.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-yellow-500 mr-2 mt-1"
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
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="https://blog.naver.com/victoriaenglish"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                  >
                    자세히 보기
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            무료 상담을 통해 빅토리아영어학원의 차별화된 교육을 경험해보세요
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-100 transition-colors"
          >
            문의하기
          </Link>
        </div>
      </section>
    </div>
  )
} 