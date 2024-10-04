export default function BackButton() {
  const handleBackClick = () => {
    window.history.back()
  }
  return (
    <button
      className="hover:underline opacity-70"
      onClick={handleBackClick}
    >
      ← Ir atrás
    </button>
  )
}