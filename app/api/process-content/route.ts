import { NextResponse } from 'next/server';
import { processContent } from '../../lib/agentCore';

export async function POST(request: Request) {
  try {
    const { rawInput } = await request.json();
    if (!rawInput) {
      return NextResponse.json({ error: 'rawInput is required' }, { status: 400 });
    }

    const contentPackage = processContent(rawInput);
    return NextResponse.json(contentPackage);
  } catch (error) {
    console.error('Error processing content:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
