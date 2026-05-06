import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // In a real app, you would fetch from OpenWeatherMap here
    // and potentially create a WeatherAlert in the DB if conditions are met.
    
    // For now, let's return some mock current weather and any active alerts from DB
    const activeAlerts = await prisma.weatherAlert.findMany({
      where: {
        expiresAt: { gt: new Date() }
      },
      orderBy: { createdAt: 'desc' }
    });

    const mockWeather = {
      temp: 32,
      condition: 'Sunny',
      humidity: 45,
      rainChance: 10,
      location: 'Mallaram, Telangana',
      alerts: activeAlerts
    };

    return NextResponse.json(mockWeather);
  } catch (error) {
    console.error('Error fetching weather:', error);
    return NextResponse.json({ error: 'Failed to fetch weather' }, { status: 500 });
  }
}
