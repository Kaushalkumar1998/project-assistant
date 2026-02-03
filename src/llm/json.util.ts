export function extractJson(text: string): any | null {
  // Try direct parse
  try {
    return JSON.parse(text);
  } catch {}

  // Try extracting JSON object from text
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;

  try {
    return JSON.parse(match[0]);
  } catch {
    return null;
  }
}
