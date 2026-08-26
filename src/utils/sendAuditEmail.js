export default async function sendAuditEmail(fields) {
  const response = await fetch("/api/send-audit-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });

  if (!response.ok) {
    const result = await response.json().catch(() => null);
    throw new Error(result?.error || "Email delivery failed");
  }
}