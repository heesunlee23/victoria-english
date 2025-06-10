import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    // 데이터베이스에 문의 저장
    await prisma.inquiry.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    })

    return NextResponse.json(
      { message: '문의가 성공적으로 접수되었습니다.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { message: '문의 접수 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
} 