import React from "react";

const directionsURL = "https://maps.app.goo.gl/JTFU7Yzajkv5d21B6";
 const Contact = () => {
  const churchlocation =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3970.190320669375!2d-0.156507!3d5.685613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d4342b82bb9%3A0x4fd868df5d8896f5!2sICGC%20Aviation%20Assembly!5e0!3m2!1sen!2sgh!4v1752792040301!5m2!1sen!2sgh";
  return (
    <div className="min-h-screen flex items-center justify-center bg-">
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
  );
}
  
export default Contact;
