'use server'

export async function handleSubmit(prevState: any, formData: FormData) {
  const negText = formData.get('negative')
  const posText = formData.get('positive')

  const response = await fetch(`${process.env.URL}/api/get-insight`, {
    next: { revalidate: 0 }, // opt out of caching
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ negText, posText }),
  })

  const jsonResult = await response.json()

  return { message: jsonResult }
}
