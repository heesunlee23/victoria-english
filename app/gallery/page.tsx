'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const categories = [
  { id: 'all', name: '전체' },
  { id: 'class', name: '수업' },
  { id: 'event', name: '행사' },
  { id: 'activity', name: '활동' }
]

const galleryItems = [
  {
    id: 1,
    title: '영어 말하기 대회',
    category: 'event',
    image: '/images/gallery/event1.jpg'
  },
  {
    id: 2,
    title: '영어 독서 활동',
    category: 'activity',
    image: '/images/gallery/activity1.jpg'
  },
  {
    id: 3,
    title: '영어 회화 수업',
    category: 'class',
    image: '/images/gallery/class1.jpg'
  },
  {
    id: 4,
    title: '영어 프레젠테이션',
    category: 'class',
    image: '/images/gallery/class2.jpg'
  },
  {
    id: 5,
    title: '영어 캠프',
    category: 'event',
    image: '/images/gallery/event2.jpg'
  },
  {
    id: 6,
    title: '영어 게임 활동',
    category: 'activity',
    image: '/images/gallery/activity2.jpg'
  }
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-yellow-400">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/hero.jpg"
            alt="갤러리"
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
              갤러리
            </h1>
            <p className="text-xl text-gray-800">
              빅토리아영어학원의 다양한 활동과 순간들을 소개합니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-[80vh]">
            <Image
              src={selectedImage}
              alt="Selected image"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 