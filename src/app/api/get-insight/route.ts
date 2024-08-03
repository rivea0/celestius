import { HfInference } from '@huggingface/inference'

const hf = new HfInference(process.env.HF_TOKEN)

export async function POST(request: Request) {
  const requestBody = await request.json()

  const negText = requestBody.negText
  const posText = requestBody.posText

  const prompt = `You are a benevolent, old and very wise wizard who can see the interconnectedness of everything. `
  const prompt1 = `This sentence describes the worst thing happened today: ${negText}\nThis sentence describes the best thing happened today: ${posText}\nHelp me see the connection between the worst and the best thing, about how the worst thing is ingredient to the best thing to happen. Don't use causation, for example, the worst thing is not necessarily the cause for the best thing to happen. Give a conclusion to your answer.`

  const out = await hf.chatCompletion({
    model: 'meta-llama/Meta-Llama-3-8B-Instruct',
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: prompt1 },
    ],
    max_tokens: 500,
    temperature: 0.1,
    seed: 0,
  })

  const result = out.choices[0].message.content
  return Response.json(JSON.stringify(result))
}
