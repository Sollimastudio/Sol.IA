import { NextResponse } from 'next/server';
import { systemPrompt } from '../../lib/systemPrompt';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { rawInput } = await request.json();
    if (!rawInput) {
      return NextResponse.json({ error: 'rawInput is required' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Or another suitable model like gpt-4o-mini, gemini-1.5-flash
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: rawInput },
      ],
      response_format: { type: "json_object" },
    });

    const responseContent = completion.choices[0].message.content;
    if (!responseContent) {
      throw new Error("No content received from AI.");
    }

    const contentPackage = JSON.parse(responseContent);
    return NextResponse.json(contentPackage);
  } catch (error) {
    console.error('Error processing content with AI:', error);
    return NextResponse.json(
      { error: 'Erro ao processar sua ideia. Por favor, tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
