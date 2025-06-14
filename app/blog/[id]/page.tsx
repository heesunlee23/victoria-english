'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const posts = [
  {
    id: 1,
    title: '2024년 여름방학 특별 프로그램 안내',
    category: 'notice',
    date: '2024-06-15',
    image: '/images/blog/summer-program.jpg',
    content: `여름방학을 맞아 특별 프로그램을 준비했습니다.

1. 영어 캠프
- 기간: 2024년 7월 15일 ~ 8월 15일
- 대상: 초등 1~6학년
- 내용: 원어민 선생님과 함께하는 영어 캠프
- 특전: 영어 노래, 게임, 영화 감상 등 다양한 활동

2. 영어 말하기 대회
- 일시: 2024년 8월 10일
- 대상: 전체 학생
- 시상: 대상, 금상, 은상, 동상
- 특전: 상장 및 상품 수여

3. 영어 독서 프로그램
- 기간: 2024년 7월 1일 ~ 8월 31일
- 대상: 전체 학생
- 내용: 영어 원서 읽기 및 독후감 작성
- 특전: 독서왕 선발 및 시상

많은 참여 부탁드립니다.`
  },
  {
    id: 2,
    title: '영어 말하기 대회 개최 안내',
    category: 'event',
    date: '2024-06-10',
    image: '/images/blog/speech-contest.jpg',
    content: `학생들의 영어 실력을 뽐낼 수 있는 말하기 대회를 개최합니다.

1. 대회 개요
- 일시: 2024년 8월 10일 오후 2시
- 장소: 빅토리아영어학원 대강당
- 대상: 전체 학생

2. 참가 방법
- 참가 신청: 2024년 7월 1일 ~ 7월 31일
- 발표 주제: 자유 주제 (3분 이내)
- 준비물: 발표 자료

3. 시상 내역
- 대상: 상장 및 상금 50만원
- 금상: 상장 및 상금 30만원
- 은상: 상장 및 상금 20만원
- 동상: 상장 및 상금 10만원

많은 참여 부탁드립니다.`
  },
  {
    id: 3,
    title: '신규 선생님 합류',
    category: 'news',
    date: '2024-06-05',
    image: '/images/blog/new-teacher.jpg',
    content: `새로운 생님이 합류했습니다.

1. 선생님 소개
- 이름: Sarah Johnson
- 출신: 미국 뉴욕
- 경력: 영어 교육 5년
- 전공: 영어교육학

2. 담당 과목
- 영어 회화
- 영어 작문
- 영어 프레젠테이션

3. 특별 프로그램
- 영어 토론 수업
- 영어 프레젠테이션 대회
- 영어 에세이 쓰기

더욱 풍부해진 영어 교육을 경험해보세요.`
  },
  {
    id: 4,
    title: '2024년 2학기 수강신청 안내',
    category: 'notice',
    date: '2024-06-01',
    image: '/images/blog/enrollment.jpg',
    content: `2024년 2학기 수강신청이 시작됩니다.

1. 수강신청 기간
- 기간: 2024년 7월 1일 ~ 7월 31일
- 방법: 전화 또는 방문 접수
- 문의: 010-2962-5841

2. 신규 프로그램
- 영어 토론 수업
- 영어 프레젠테이션 수업
- 영어 에세이 쓰기 수업

3. 특별 할인
- 조기 등록 할인: 10% 할인
- 형제/자매 할인: 20% 할인
- 소개 할인: 5만원 할인

새로운 프로그램과 함께 더욱 알찬 영어 교육을 준비했습니다.`
  }
]

export default function BlogPost() {
  const params = useParams()
  const post = posts.find(p => p.id === Number(params.id))

  if (!post) {
    return (
      <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다.</p>
          <Link
            href="/blog"
            className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-yellow-400">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
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
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-800">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.category === 'notice' ? '공지사항' : post.category === 'event' ? '이벤트' : '학원소식'}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="prose max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                목록으로 돌아가기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 