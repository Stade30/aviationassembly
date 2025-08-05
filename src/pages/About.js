import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const About = () => {

  const directionsURL = "https://maps.app.goo.gl/JTFU7Yzajkv5d21B6";
  const churchlocation = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3970.190320669375!2d-0.156507!3d5.685613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d4342b82bb9%3A0x4fd868df5d8896f5!2sICGC%20Aviation%20Assembly!5e0!3m2!1sen!2sgh!4v1752792040301!5m2!1sen!2sgh";

  return (
    <div className="p-6 mt-6">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-700 font-sans">
          About Our Church
        </h1>
        <p className="text-gray-700 leading-7 font-sans">
          ICGC Aviation Assembly is a Christ-centered community committed to
          spiritual growth, worship, and service. Our mission is to help people
          know God, grow in faith, and serve others in love. Through passionate
          worship, practical Bible teaching, and impactful outreach, we aim to
          reflect the love and truth of Jesus in all we do. Whether you're
          exploring faith or searching for a church home, we welcome you to join
          us. At ICGC Aviation Assembly, you’ll find a place to belong, grow,
          and thrive in your walk with God.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700 space-y-4">
          <h2 className="text-2xl font-semibold mt-10 font-sans">
            Service Times
          </h2>
          <li> Sundays – Worship Service: 8:00 AM - 10:30 AM</li>
          <li> Wednesdays – Bible Study & Prayer: 6:30 PM</li>
          <li> Fridays – Youth Fellowship: 6:30 PM</li>
        </ul>
        <div className="mt-10 max-w-3xl bg-topnavbg/15 shadow-2xl px-8 py-6 rounded-xl space-y-4 font-heading">
          <h3 className="text-xl font-semibold font-heading">Location</h3>
          <p className="text-base">
            <span className="flex justify-left gap-2 group">
              <FaMapMarkerAlt className="text-[#163F1B] text-2xl transform transition-all duration-300 group-hover:translate-y-[-4px] hover:scale-125" />
              41 Springbud St, Baba Yara Madina-Ashaley Botwe DR
            </span>
          </p>

          <h3 className="text-xl font-semibold mt-6">Reach Us</h3>
          <p className="text-base flex justify-left gap-2 group">
            <FaPhone className="transform -scale-x-100 text-[#163F1B] text-2xl group-hover:animate-shake" />
            0247759084 / 0500061826
          </p>
          <div className=" flex items-center justify-center">
            <div className="w-[90%] max-w-4xl aspect-[8/4] border rounded shadow-lg overflow-hidden">
              <iframe
                src={churchlocation}
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href={directionsURL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white text-green-600 px-4 py-2 text-sm rounded shadow hover:bg-green-100 transition z-10"
                title="Get Directions on Google Maps"
              >
                <span className="sr-only">Open directions in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-gray-700 leading-7 text-justify font-scripture font-semibold">
          We invite you to worship with us and experience the warmth of our
          fellowship and the power of God’s presence.
        </p>
      </div>

      <div className="bg-topnavbg/15 rounded-lg shadow-2xl p-8 max-w-2xl mx-auto flex justify-center  gap-16 text-lg text-gray-700 mt-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#163F1B]"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#163F1B]"
        >
          <FaInstagram />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#163F1B]"
        >
          <FaTiktok />
        </a>
      </div>
      <div className="mt-4 text-center">
        <a
          href="/join"
          className="inline-block px-3 py-2 bg-topnavbg/60 text-white rounded-lg hover:bg-topnavbg transition-colors duration-300"
        >
          Plan a Visit?
        </a>
      </div>
    </div>
  );
};

export default About;
