export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 mt-8">
      <div className="max-w-5xl mx-auto px-4 py-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © {year} — Made by G Rohit
        </p>
      </div>
    </footer>
  );
}
