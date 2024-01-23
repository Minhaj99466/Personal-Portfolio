import { Button, Typography } from "@material-tailwind/react";
import img from "../assets/IMG_0404_(1)-transformed.png";

function Aboutme() {
  return (
    <div className=" bg-[#cddcdf]" id="about">
      <div className=" md:h-screen grid   md:grid-cols-2  mx-auto container " >
        <div className=" flex justify-center items-center  ">
          <div className="w-64 h-80 md:h-1/2 md:w-1/2 ">
            <img className="rounded-full" src={img} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="text-start p-10 md:p-0 ">
            <Typography variant="h1" style={{ fontFamily: "monospace" }}>
              About <span className="text-teal-300">Me</span>
            </Typography>
            <Typography variant="h3" style={{ fontFamily: "monospace" }}>
              Web Developer
            </Typography>
            <div>
              <p className="leading-8 text-blue-gray-800">
                MERN Full stack eCommerce developer is responsible for writing
                reusable, testable, and efficient code. Design and
                implementation of low-latency, high-availability, and performant
                applications. Implementation of security and data protection.
                Understanding of performance testing and optimization
                techniques.
              </p>
            </div>
            <Button color="teal">Resume</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
