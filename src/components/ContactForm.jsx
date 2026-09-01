import { useState } from 'react'
import { contact } from '../content/contact'

const ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

const ContactForm = () => {
  const [status, setStatus] = useState('idle')
  const sending = status === 'sending'
  const { form } = contact

  const onSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    if (data.get('botcheck')) return

    if (!ACCESS_KEY) {
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          email: String(data.get('email') || '').trim(),
          subject: String(data.get('subject') || '').trim(),
          message: String(data.get('message') || '').trim(),
          from_name: String(data.get('email') || '').trim(),
        }),
      })
      const result = await response.json()
      setStatus(result.success ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p className='text-base leading-relaxed text-mist md:text-lg' role='status'>
        {form.sent}
      </p>
    )
  }

  return (
    <form className='flex flex-col gap-8' onSubmit={onSubmit}>
      <input
        type='checkbox'
        name='botcheck'
        tabIndex={-1}
        autoComplete='off'
        className='hidden'
        aria-hidden='true'
      />

      <label className='flex flex-col gap-2'>
        <span className='label-kicker'>{form.emailLabel}</span>
        <input
          className='reel-field'
          type='email'
          name='email'
          required
          autoComplete='email'
          inputMode='email'
          disabled={sending}
        />
      </label>

      <label className='flex flex-col gap-2'>
        <span className='label-kicker'>{form.subjectLabel}</span>
        <input
          className='reel-field'
          type='text'
          name='subject'
          required
          autoComplete='off'
          disabled={sending}
        />
      </label>

      <label className='flex flex-col gap-2'>
        <span className='label-kicker'>{form.messageLabel}</span>
        <textarea
          className='reel-field min-h-[8rem] resize-y'
          name='message'
          required
          rows={5}
          disabled={sending}
        />
      </label>

      <div className='flex flex-col items-start gap-3'>
        <button
          type='submit'
          disabled={sending}
          aria-busy={sending}
          className='text-xl text-lantern hover:text-lantern-hot focus-visible:outline-none focus-visible:text-lantern-hot disabled:cursor-wait disabled:text-fog md:text-2xl'
        >
          {sending ? form.sending : form.submit}
        </button>
        {status === 'error' && (
          <p className='text-sm text-mist' role='alert'>
            {form.error}
          </p>
        )}
      </div>
    </form>
  )
}

export default ContactForm
