// TODO: Replace stub with real Gemini API call using VITE_GEMINI_API_KEY

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

const STUB_RESPONSES = [
  "Hi! I'm the Taxagon assistant. I can help you with questions about tax filing, pricing, and our services. For specific tax advice, please book a consultation with our team.",
  "Great question! Taxagon offers individual, business, FBAR, and NRI tax services starting at $89. Would you like to learn more about a specific service?",
  "Our team is available year-round to help with your tax situation. You can reach us at info@taxagon.co or call +1 737-381-2330.",
  "For cross-border NRI tax needs, we specialize in US-India DTAA compliance, FBAR filings, and ITR + US return preparation. Book a free strategy session to get started!",
]

let responseIndex = 0

export async function sendMessageToGemini(prompt: string): Promise<string> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800))

  // Keyword-based stub responses
  const lower = prompt.toLowerCase()
  if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing')) {
    return "Our individual filing starts at $89. Business returns are custom-quoted. Check our Pricing page for the full fee schedule, or book a free strategy session!"
  }
  if (lower.includes('nri') || lower.includes('india') || lower.includes('fbar') || lower.includes('fatca')) {
    return "Taxagon specializes in NRI cross-border tax compliance — FBAR, FATCA, Form 8938, ITR filing, and US-India DTAA analysis. We'd love to help!"
  }
  if (lower.includes('contact') || lower.includes('call') || lower.includes('email')) {
    return "You can reach us at:\n📞 +1 737-381-2330\n📧 info@taxagon.co\n📍 555 Round Rock W Dr e225, Round Rock, TX 78681"
  }
  if (lower.includes('book') || lower.includes('appointment') || lower.includes('consult')) {
    return "You can book a free strategy session through our Contact page. Our team typically responds within 24 hours!"
  }

  const response = STUB_RESPONSES[responseIndex % STUB_RESPONSES.length]
  responseIndex++
  return response
}
