import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { sql } from '@vercel/postgres'

const prisma = new PrismaClient()

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await request.json()
    const id = parseInt(params.id)

    const inquiry = await prisma.inquiry.update({
      where: { id },
      data: { status },
    })

    return NextResponse.json(inquiry)
  } catch (error) {
    console.error('Error updating inquiry:', error)
    return NextResponse.json(
      { message: '문의 상태를 업데이트하는 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)

    await prisma.inquiry.delete({
      where: {
        id: id
      }
    })

    return NextResponse.json({ message: '문의가 삭제되었습니다.' })
  } catch (error) {
    console.error('Error deleting inquiry:', error)
    return NextResponse.json(
      { error: '문의 삭제 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
} 