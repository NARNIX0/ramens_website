// Simple cn utility for combining class names
type ClassValue = string | undefined | null | false;

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(' ');
}
