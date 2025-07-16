export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-green-800 text-center text-sm py-3 shadow-inner">
      <div className="container mx-auto text-center text-sm text-white">
        © {new Date().getFullYear()} Aviation Assembly. All rights reserved.
        <span className="mx-2">•</span>
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
        <p>
          <span className="mx-2">Developed by Stade</span>
        </p>
      </div>
    </footer>
  );
}
