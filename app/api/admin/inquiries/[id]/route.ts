import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    const { status } = await request.json()

    await prisma.inquiry.update({
      where: {
        id: id
      },
      data: {
        status: status
      }
    })

    return NextResponse.json({ message: '상태가 업데이트되었습니다.' })
  } catch (error) {
    console.error('Error updating inquiry:', error)
    return NextResponse.json(
      { error: '상태 업데이트 중 오류가 발생했습니다.' },
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