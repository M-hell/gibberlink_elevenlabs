import { PostHog } from 'posthog-node'
import { NextResponse } from 'next/server'
import { HfInference } from "@huggingface/inference";

const phClient = new PostHog("phc_mX1UQCMVS3TRTbNql9DwdaGGxtNhHnHwSSmUPoPzpjH", {
  host: 'https://us.i.posthog.com',
})

const client = new HfInference(process.env.OPENAI_API_KEY);

export async function POST(req) {
  try {
    const { messages, agentType, sessionId } = await req.json()

    const completion = await client.chatCompletion({
      model: 'deepseek-ai/DeepSeek-R1',  // Correctly specifying DeepSeek R1
      messages,
      max_tokens: 500,
      provider: "together", // Ensure Together AI supports this model
    })
    console.log('Messages:', messages)
    console.log('Assistant Response:', completion.choices[0].message || 'No response')

    // Remove everything between and including the think tags
    const responseMessage = completion.choices[0].message;
    if (responseMessage && responseMessage.content) {
      responseMessage.content = responseMessage.content.replace(/<think>.*?<\/think>/gs, '');
    }

    return NextResponse.json(responseMessage || { error: 'No AI response' })
  } catch (error) {
    console.error('DeepSeek AI API Error:', error)
    return NextResponse.json({ error: 'AI Service Unavailable' }, { status: 503 })
  }
}