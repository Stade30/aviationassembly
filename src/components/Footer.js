export default function Footer() {
  return (
    <footer className="bg-[#163F1B] text-center text-sm py-3 shadow-inner">
      <div className="">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="container mx-auto text-center text-sm text-white">
        © {new Date().getFullYear()} International Central Gospel Church -
        Aviation Assembly.{" "}
        <p>
          <span className="mx-2"> All rights reserved.</span>
        </p>
        {/*<span className="mx-3">•</span>
         <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>*/}
        {/* <p>
          <span className="mx-2">Designed by Stade</span>
        </p>*/}
      </div>
    </footer>
  );
}
