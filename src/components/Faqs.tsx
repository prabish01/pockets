import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How does the period cramp relief device work?',
      answer:
        'This advanced biotechnology employs subtle electrical pulses precisely administered to areas of discomfort. These pulses flood the nervous system, efficiently interrupting the transmission of pain signals and offering a natural remedy for alleviating period cramps.',
    },
    {
      question: 'What’s in the box?',
      answer: 'The massaging device, charger.',
    },
    {
      question: 'How often can I use it?',
      answer:
        'Our device can be used as much as you like - yay! Rest assured, the device has undergone clinical testing to ensure it is completely safe to use for prolonged periods of time.',
    },
  ],
  [
    {
      question: 'Can I use it at any age?',
      answer:
        'You sure can. Our period cramp relief device can be used at all ages. If you have any specific health concerns, please check with your doctor.',
    },
    {
      question: 'Where is Pocket based?',
      answer:
        'Let’s just say it’s not somewhere where the SEC is going to find us.',
    },
    {
      question: 'Is there any age limit to trading on Pocket?',
      answer:
        'For our free plan, the age limit is based on the minimum age to trade in your country of residence. Our VIP plan uses advanced transaction anonymization though, so you can use that plan even if you’re 9 years old. Or a dog.',
    },
  ],
  [
    {
      question: 'How did you get this on the App Store?',
      answer:
        'Honestly we were surprised too, but eventually we found out that the app reviewer found the app so compelling they approved it just so they could use it themselves.',
    },
    {
      question: 'How do I explain the money I withdraw from Pocket to the IRS?',
      answer:
        'This feels like one-hundred percent a you problem. Pocket is not responsible in any way for your tax returns.',
    },
    {
      question: 'How do I become an insider?',
      answer:
        'Contact us with some details about your industry and the type of access you have to apply for an insider account. Once approved, we’ll send you a guide on collecting insider information without being detected at work.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
