import { useFormStatus } from 'react-dom'

export default function AskForm({
  formAction,
}: {
  formAction: (formData: FormData) => void
}) {
  return (
    <div className="md:p-4">
      <form
        action={formAction}
        className="flex flex-col items-center gap-4 mt-8 p-2"
      >
        <label htmlFor="negative" className="font-semibold">
          What is the worst thing happened today?
        </label>
        <textarea
          name="negative"
          id="neg"
          required
          placeholder='I failed math class...'
          className="resize-none p-1 bg-slate-50 md:w-1/3 w-full"
        ></textarea>
        <label htmlFor="positive" className="mt-4 font-semibold">
          What is the best thing happened today?
        </label>
        <textarea
          name="positive"
          id="pos"
          required
          placeholder='I won a scholarship...'
          className="resize-none p-1 bg-slate-50 md:w-1/3 w-full"
        ></textarea>
        <Submit />
      </form>
    </div>
  )
}

function Submit() {
  const status = useFormStatus()

  return (
    <button
      type="submit"
      disabled={status.pending}
      className="bg-emerald-600/75 hover:bg-emerald-600 disabled:opacity-75 disabled:cursor-not-allowed text-white font-semibold max-w-fit mt-8 p-1.5 self-center cursor-pointer"
    >
      {status.pending ? 'Gathering insight...' : 'See what he has to say'}
    </button>
  )
}
