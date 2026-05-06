import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dateStr = searchParams.get('date');

  try {
    const where = dateStr ? {
      date: {
        gte: new Date(dateStr),
        lt: new Date(new Date(dateStr).getTime() + 24 * 60 * 60 * 1000)
      }
    } : {};

    const slots = await prisma.slot.findMany({
      where,
      orderBy: [
        { date: 'asc' },
        { startTime: 'asc' }
      ],
    });

    return NextResponse.json(slots);
  } catch (error) {
    console.error('Error fetching slots:', error);
    return NextResponse.json({ error: 'Failed to fetch slots' }, { status: 500 });
  }
}
