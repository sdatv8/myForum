
export default function previewText(text, numSymbol) {
  if (text.length > numSymbol) {
    return text.slice(0, numSymbol) + '...'
  }
  return text
} 
