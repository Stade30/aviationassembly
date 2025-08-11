import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";


export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service Times & Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-slate-200">
            Service Times
          </h3>
          <ul className="space-y-2 text-slate-400">
            <li>Sundays: 8:30 AM - 11:00 AM</li>
            <li>Wednesdays: 7:00 PM</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-4 text-slate-200">
            Our Socials
          </h3>
          <div className="flex gap-4 text-2xl text-slate-400">
            <a
              href="https://facebook.com/icgcaviation"
              target="_blank"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/icgc_aviation"
              target="_blank"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target=" "
              className="hover:text-sky-400 transition-colors duration-300"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://tiktok.com/@icgc_aviation"
              target="_blank"
              className="hover:text-black transition-colors duration-300"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-slate-200">
            Contact Us
          </h3>
          <ul className="space-y-4 text-slate-500">
            <li className="flex items-center gap-6">
              <HiPhone className="text-xl text-slate-400" />
              <a
                href="tel:+233247759084"
                className="hover:text-slate-400 transition-colors duration-300"
              >
                +233 24 775 9084
              </a>
            </li>
            <li className="flex items-center gap-6">
              <HiMail className="text-xl text-slate-400" />
              <a
                href="mailto:info@icgcaviationassembly.org"
                className="hover:text-slate-400 transition-colors duration-300"
              >
                info@icgcaviationassembly.org
              </a>
            </li>
            <li className="flex items-center gap-6">
              <HiLocationMarker className="text-xl text-slate-400" />
              <a href=" " className="hover:text-slate-400">
                41 Springbud St, Baba Yara
                <br />
                Madina-Ashaley Botwe DR, Accra
              </a>
            </li>
          </ul>
        </div>

        {/* Our Location */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-slate-200">
            Our Location
          </h3>
          <ul className="space-y-4 text-slate-500"></ul>
          <iframe
            className="mt-4 w-full h-40 border-0 rounded-lg"
            src=" "
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 text-center text-md text-gray-600 border-t border-slate-400 pt-6">
        © {new Date().getFullYear()} International Central Gospel Church -
        Aviation Assembly.
        <span className="mx-2">All rights reserved.</span>
      </div>
    </footer>
  );
}
