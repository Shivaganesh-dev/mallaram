import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const schedules = await prisma.irrigationSchedule.findMany({
      orderBy: { startTime: 'asc' },
      where: {
        endTime: { gte: new Date() }
      }
    });

    return NextResponse.json(schedules);
  } catch (error) {
    console.error('Error fetching irrigation schedules:', error);
    return NextResponse.json({ error: 'Failed to fetch irrigation schedules' }, { status: 500 });
  }
}
