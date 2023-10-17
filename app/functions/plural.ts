export default function plural(word: string, length: number) {
  return length > 1 ? `${word}s` : word
}