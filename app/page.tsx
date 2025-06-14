'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  GlobeAltIcon, 
  SparklesIcon,
  BookOpenIcon,
  LightBulbIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    title: '체계적인 커리큘럼',
    description: '학생의 수준과 목표에 맞춘 맞춤형 교육 프로그램을 제공합니다.',
    icon: AcademicCapIcon,
  },
  {
    title: '소규모 그룹 수업',
    description: '1-9명의 소규모 그룹으로 효과적인 학습과 개별 관리를 보장합니다.',
    icon: UserGroupIcon,
  },
  {
    title: '전문 선생님',
    description: '전문 선생님과 함께 자연스러운 영어를 배웁니다.',
    icon: GlobeAltIcon,
  },
  {
    title: '다양한 학습 자료',
    description: '최신 교재와 멀티미디어 자료를 활용한 흥미로운 수업을 진행합니다.',
    icon: SparklesIcon,
  },
]

const programs = [
  {
    title: '유치부',
    description: '6-7세의 어린이를 위한 재미있고 효과적인 영어 교육',
    image: 'https://images.unsplash.com/photo-1558907353-ceb54f3882ed?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/programs#kindergarten',
  },
  {
    title: '초등부',
    description: '기초부터 차근차근, 체계적인 영어 실력 향상',
    image: 'https://images.unsplash.com/photo-1534643960519-11ad79bc19df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/programs#elementary',
  },
  {
    title: '중등부',
    description: '학교 교육과 연계된 실력 향상 프로그램',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/programs#middle',
  },
  {
    title: '고등부',
    description: '대학 입시를 위한 실전 영어 능력 향상',
    image: 'https://images.unsplash.com/photo-1659080922708-83eb680a54e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/programs#high',
  },
  {
    title: '성인',
    description: '비즈니스와 실생활에 필요한 실용 영어 교육',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=60',
    link: '/programs#adult',
  },
]

const notices = [
  {
    title: '빅토리아영어학원 신규 파닉스 수업 개강',
    description: '수업시간/정원/대상 안내',
    link: 'https://blog.naver.com/victoriaenglish/223871728176',
  },
  {
    title: '고려대말하기대회 전원입상 축하합니다',
    description: '학생들의 성과를 축하합니다',
    link: 'https://blog.naver.com/victoriaenglish/223894572355',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-yellow-400 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
            alt="빅토리아영어학원"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              빅토리아영어학원
            </h1>
            <p className="text-xl text-gray-800 mb-8">
              체계적인 커리큘럼과 전문적인 교육으로<br />
              학생들의 영어 실력을 한 단계 더 높여드립니다
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-100 transition-colors"
            >
              무료 상담 신청하기
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">공지사항</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notices.map((notice, index) => (
              <motion.div
                key={notice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{notice.title}</h3>
                <p className="text-gray-600 mb-4">{notice.description}</p>
                <a
                  href={notice.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
                >
                  자세히 보기
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">빅토리아영어학원의 특징</h2>
            <p className="text-gray-600">
              빅토리아영어학원만의 특별한 교육 시스템을 소개합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <feature.icon className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">교육 프로그램</h2>
            <p className="text-gray-600">
              연령과 목표에 맞는 다양한 프로그램을 제공합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Link
                    href={program.link}
                    className="text-yellow-600 font-semibold hover:text-yellow-700"
                  >
                    자세히 보기 →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
            <p className="text-gray-800 mb-8">
              무료 상담을 통해 빅토리아영어학원의 특별한 교육을 경험해보세요
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-100 transition-colors"
            >
              무료 상담 신청하기
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 