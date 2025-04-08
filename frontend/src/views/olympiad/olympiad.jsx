import React from "react";
import igo from "../../assets/igo.jpeg";
import igo2 from "../../assets/igo2.jpeg";

const OlympiadFinalist = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <img
        src={igo}
        alt="IGO Olympiad Logo"
        className="block mx-auto mb-4"
        style={{ height: "120px", width: "auto", maxWidth: "150px" }}
        />
        <h1 className="text-4xl font-bold text-blue-700">We're Finalists!</h1>
        <p className="mt-4 text-lg">
          Our team has been selected as finalists in the prestigious 
          <a
            href="https://igolondon.co.uk/"
            className="text-blue-500 underline ml-1"
            target="_blank"
            rel="noreferrer"
          >
             International Gateway Olympiad (IGO)
          </a>
          !
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">About the Olympiad</h2>
        <p className="text-gray-600 leading-relaxed">
          The IGO is a global competition that challenges young minds to
          showcase their creativity, analytical skills, and research abilities.
          It is hosted annually by IGO London, bringing together schools and
          students from across the globe.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">Our Submission</h2>
        <p className="text-gray-600 leading-relaxed mb-3">
          Our paper, titled <strong>“Natural Plant Extracts as Inhibitors of Cell Division: A Study Using Onion Root Tips”</strong>,
          under the category Health Sciences, explores the potential of natural plant extracts in inhibiting cell division. We conducted a series of experiments using onion root tips to observe the effects of various plant extracts on cell division rates.
          Our findings suggest that certain extracts can significantly reduce cell division, indicating their potential as natural inhibitors to combat uncontrolled cell growth, a hallmark of cancer.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The judges appreciated the clarity, practical implementation, and
          community impact our solution can bring—earning us a place in the
          finals.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Meet Our Team</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="text-center">
            <p className="font-medium">Student: Naomi Razdan, Grade 8th</p>
            <p className="font-medium">Faculty: Dr. Kislay Singh</p>
          </div>
          <div className="text-center">
            <img
            src={igo2}
            alt="Faculty"
            className="block mx-auto mb-4"
            style={{ height: "450px", width: "auto", maxWidth: "650px" }}
            />
          </div>
        </div>
      </section>

      <div className="text-center mt-12">
        <p className="text-lg font-semibold text-blue-700">
          Thank you to everyone who supported us on this journey!
        </p>
      </div>
    </div>
  );
};

export default OlympiadFinalist;