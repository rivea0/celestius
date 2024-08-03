'use server'

export async function handleSubmit(prevState: any, formData: FormData) {
  const negText = formData.get('negative')
  const posText = formData.get('positive')

  let response = null
  let jsonResult = null

  try {
    response = await fetch(`${process.env.URL}/api/get-insight`, {
      next: { revalidate: 0 }, // opt out of caching
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ negText, posText }),
    })

    jsonResult = await response.json()
  } catch (err) {
    console.log(err)
  }
  return { message: jsonResult }
}
