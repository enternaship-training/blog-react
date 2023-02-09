import React from "react";
import banner from "../assets/banner.webp";

function About(props) {
  return (
    <div className="px-5 py-5  lg:px-40 relative">
      <img
        src={banner}
        className=" w-full h-72 object-cover rounded-lg relative "
        alt=""
      />
      <h1 className=" absolute font-pacifico top-32 right-96 z-10 text-5xl text-violet ">
        About us
      </h1>
      <div className="mt-5 ">
        <p className="  text-lg leading-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
          dui purus. Ut in elit fermentum, semper purus eu, semper est. Donec
          congue felis vel neque dignissim faucibus. Mauris id mattis sem.
          Suspendisse iaculis purus tortor, sed rhoncus nisl tristique nec.
          Quisque vel arcu orci. Sed id efficitur elit. Sed iaculis imperdiet
          lacinia.
        </p>
        <p className="mt-3  text-lg leading-10">
          Sed ultricies, turpis vulputate lobortis condimentum, ex tellus
          scelerisque nulla, nec blandit tellus lectus in felis. Donec ut nulla
          sodales orci vehicula feugiat sed malesuada justo. Vestibulum in
          lacinia lectus. Donec in erat urna. Suspendisse potenti. Donec ut
          lacinia nulla. Pellentesque eu pellentesque elit. Donec eu velit at
          erat placerat congue. Nulla aliquam dictum orci, at convallis tellus
          finibus eu. Mauris tempor urna non felis efficitur fringilla.
          Phasellus feugiat neque quis egestas tincidunt. Sed euismod, mi
          vulputate ornare sagittis, elit dolor volutpat odio, sit amet
          hendrerit tellus tortor at tellus. Nam nec nulla cursus, consectetur
          lorem id, euismod nisl. In ac orci eu nunc consectetur varius.
        </p>
      </div>
    </div>
  );
}

export default About;
