interface ContactDetail {
  label: string
  value: string
}

interface ContactSectionProps {
  title: string
  description: string
  contactDetails: ContactDetail[]
}

export function ContactSection({ title, description, contactDetails }: ContactSectionProps) {
  return (
    <div className="bg-muted p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="mb-4">{description}</p>
      <div className="space-y-2">
        {contactDetails.map((detail, index) => (
          <p key={index}>
            <strong>{detail.label}:</strong> {detail.value}
          </p>
        ))}
      </div>
    </div>
  )
}
