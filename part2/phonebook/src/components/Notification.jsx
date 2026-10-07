export default function Notification({ message, type }) {
  if (!message) {
    return null;
  }

  return (
    <div className={type === "error" ? "error" : "succeed"}>{message}</div>
  );
}
