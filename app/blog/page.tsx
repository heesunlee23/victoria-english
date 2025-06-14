'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const categories = [
  { id: 'all', name: '전체' },
  { id: 'notice', name: '공지사항' },
  { id: 'event', name: '이벤트' },
  { id: 'news', name: '학원소식' }
]

const posts = [
  {
    id: 1,
    title: '2025년 여름방학 특별 프로그램 안내',
    category: 'notice',
    date: '2024-06-15',
    image: '/images/blog/summer-program.jpg',
    excerpt: '여름방학을 맞아 특별 프로그램을 준비했습니다. 원어민 선생님과 함께하는 영어 캠프와 다양한 활동을 통해 즐겁게 영어를 배워보세요.'
  },
  {
    id: 2,
    title: '영어 말하기 대회 개최 안내',
    category: 'event',
    date: '2024-06-10',
    image: '/images/blog/speech-contest.jpg',
    excerpt: '학생들의 영어 실력을 뽐낼 수 있는 말하기 대회를 개최합니다. 많은 참여 부탁드립니다.'
  },
  {
    id: 3,
    title: '신규 선생님 합류',
    category: 'news',
    date: '2024-06-05',
    image: '/images/blog/new-teacher.jpg',
    excerpt: '새로운 합류했습니다. 더욱 풍부해진 영어 교육을 경험해보세요.'
  },
  {
    id: 4,
    title: '2024년 2학기 수강신청 안내',
    category: 'notice',
    date: '2024-06-01',
    image: '/images/blog/enrollment.jpg',
    excerpt: '2024년 2학기 수강신청이 시작됩니다. 새로운 프로그램과 함께 더욱 알찬 영어 교육을 준비했습니다.'
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-yellow-400">
        <div className="absolute inset-0">
          <Image
            src="/images/blog/hero.jpg"
            alt="공지사항"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              공지사항
            </h1>
            <p className="text-xl text-gray-800">
              빅토리아영어학원의 최신 소식과 이벤트를 확인하세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Categories */}
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-white text-gray-600 hover:bg-yellow-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <time className="text-sm text-gray-500">{post.date}</time>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href="https://blog.naver.com/victoriaenglish"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold"
                  >
                    자세히 보기
                    <svg
                      className="w-4 h-4 ml-2"
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
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 