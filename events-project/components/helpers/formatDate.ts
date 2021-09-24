export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pr-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateYear(date: string) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}
