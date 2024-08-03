export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center text-xs gap-2 text-gray-400 mt-auto">
      <div>
        <p data-testid="copyright">
          &copy; {new Date().getFullYear()} | Eda Eren
        </p>
      </div>
    </footer>
  )
}
