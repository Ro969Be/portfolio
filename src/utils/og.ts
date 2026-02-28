export function ogpImage(url: string) {
  return `/api/og?url=${encodeURIComponent(url)}`;
}