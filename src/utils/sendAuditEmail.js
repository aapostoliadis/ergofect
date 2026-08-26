const recipient = "info@ergofect.com";

export default function sendAuditEmail(fields) {
  const body = Object.entries(fields)
    .filter(([, value]) => value !== undefined && value !== "")
    .map(([label, value]) => `${label}: ${Array.isArray(value) ? value.join(", ") : value}`)
    .join("\n");

  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
    "New Ergofect Audit Request"
  )}&body=${encodeURIComponent(body)}`;
}