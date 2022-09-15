
export default function previewText(text) {
  if (text.length > 95) {
    return text.slice(0, 95) + '...'
  }
  return text
} 
