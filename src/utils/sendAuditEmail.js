export default async function sendAuditEmail(fields) {
  const response = await fetch("/api/send-audit-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });

  if (!response.ok) {
    throw new Error("Email delivery failed");
  }
}