import React, { useState } from "react";
import AboutImg from "../assets/about-img.png";
import Cordinator1 from "../assets/Cordinator-1.png";
import Cordinator2 from "../assets/Cordinator-2.png";
import Cordinator3 from "../assets/Cordinator-3.png";
const About = () => {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseEnter = (divNumber) => {
    setHoveredDiv(divNumber);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  const div1Style = {
    opacity: hoveredDiv === 1 ? 1 : 0,
    transition: "opacity 300ms ease-out",
  };

  const div2Style = {
    opacity: hoveredDiv === 2 ? 1 : 0,
    transition: "opacity 300ms ease-out",
  };

  const div3Style = {
    opacity: hoveredDiv === 3 ? 1 : 0,
    transition: "opacity 300ms ease-out",
  };
  return (
    <div>
      <div
        style={{ "--image-url": `url(${AboutImg})` }}
        className="flex items-center justify-center w-full h-[500px] bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-fixed "
      >
        <h3 className="text-white text-4xl font-bold">ABOUT US</h3>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className=" text-slate-600 text-4xl font-bold border-b-2 w-fit p-4 m-10">
          Our Mission
        </h3>
        <p className="border-y-2 pb-2 w-4/5 mb-2 text-xl">
          Books are magic doors that allow people to travel to worlds, shine and
          realize their dreams. We work passionately to make people love books
          and bring this magic to everyone quickly online.
        </p>
        <p className="border-b-2 pb-2 w-4/5 mb-2 text-xl">
          Books offer knowledge, adventure, emotional richness, and new
          perspectives. We help people discover the joy of reading by
          introducing books for every age, every background and every interest.
          By explaining the power of books, we help people develop more reading
          habits, help them learn and grow.
        </p>
        <p className="border-b-2 pb-2 w-4/5 mb-2 text-xl">
          We believe that in the age of the internet, everyone should have quick
          and easy access to books. We offer instant access to thousands of
          books through our digital platforms. In this way, we connect with
          readers across time and geographical boundaries.
        </p>
        <p className="border-b-2 pb-2 w-4/5 mb-2 text-xl">
          In the future, we dream of a world where every person can discover and
          read their favorite books anytime, anywhere. In line with this vision,
          we aim to bring books to more people by using technology.
        </p>
        <p className="border-b-2 pb-2 w-4/5 mb-2 text-xl">
          We are committed to keeping the magic of books alive and empowering
          everyone to connect more deeply with a book. We believe that books can
          change the world and we move forward with this belief. Join this
          journey with us and help us share the power of books with more people.
        </p>
      </div>
      <div>
        <h3 className="text-slate-600 text-center font-bold text-4xl mt-10 mb-10">Meet The Coordinators</h3>
        <div className="flex flex-wrap justify-center items-center mb-5">
          <div
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            className="w-[300px] h-[300px] relative bg-black m-5 rounded-2xl"
          >
            <img
            className="rounded-2xl"
              src={Cordinator1}
              alt=""
              style={{
                opacity: hoveredDiv === 1 ? 0.6 : 1,
                transition: "opacity 300ms ease-out",
              }}
            />
            <h3 style={div1Style} className="absolute top-3  pl-2 text-white ">
              Lorem, ipsum.
            </h3>
            <p style={div1Style} className="absolute top-10 pl-2 text-white ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quisquam optio aliquid suscipit molestias, magnam
              voluptatibus tenetur repellendus quod eos amet? Placeat adipisci
              reprehenderit, minima ab incidunt eveniet dolore, dolorem sequi
              velit fugit quidem eius aut atque unde eligendi enim.
            </p>
          </div>
          <div
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            className="w-[300px] h-[300px] relative bg-black m-5 rounded-2xl"
          >
            <img
             className="rounded-2xl"
              src={Cordinator2}
              alt=""
              style={{
                opacity: hoveredDiv === 2 ? 0.6 : 1,
                transition: "opacity 300ms ease-out",
              }}
            />
            <h3 style={div2Style} className="absolute top-3 pl-2 text-white">
              Lorem, ipsum.
            </h3>
            <p style={div2Style} className="absolute top-10 pl-2  text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quisquam optio aliquid suscipit molestias, magnam
              voluptatibus tenetur repellendus quod eos amet? Placeat adipisci
              reprehenderit, minima ab incidunt eveniet dolore, dolorem sequi
              velit fugit quidem eius aut atque unde eligendi enim.
            </p>
          </div>
          <div
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            className="w-[300px] h-[300px] relative bg-black m-5 rounded-2xl"
          >
            <img
             className="rounded-2xl"
              src={Cordinator3}
              alt=""
              style={{
                opacity: hoveredDiv === 3 ? 0.6 : 1,
                transition: "opacity 300ms ease-out",
              }}
            />
            <h3 style={div3Style} className="absolute top-3 pl-2 text-white">
              Lorem, ipsum.
            </h3>
            <p style={div3Style} className="absolute top-10 pl-2  text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quisquam optio aliquid suscipit molestias, magnam
              voluptatibus tenetur repellendus quod eos amet? Placeat adipisci
              reprehenderit, minima ab incidunt eveniet dolore, dolorem sequi
              velit fugit quidem eius aut atque unde eligendi enim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
