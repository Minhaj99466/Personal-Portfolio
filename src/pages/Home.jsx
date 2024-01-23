import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import img from "../assets/bulbasaur.png";
import { Typography } from "@material-tailwind/react";

function Main() {
  return (
    <div id="/" className="bg-[#0d1a2f]">
      <div
        className=" grid grid-cols-1  md:grid-cols-2 mx-auto container "
      >
        <div
          className="flex justify-around items-center "
          style={{ height: "95vh" }}
        >
          <div className="text-start p-10 md:p-0">
            <Typography
              variant="h3"
              className="font-sans text-2xl sm:text-4xl"
              style={{ fontFamily: "monospace" }}
          color="white"

            >
              HI THERE !
            </Typography>
            <Typography
              variant="h1"
              className="text-4xl sm:text-6xl"
              color="teal"
            >
              <span className="text-[#ced7f1] ">I'M </span>
              <span className="font-extrabold ">MINHAJ</span>
            </Typography>
            {/* <div className=" text-center"> */}
            <Typography
              className="font-bold py-5 text-2xl sm:text-4xl text-[#8a91ac]"
              style={{ fontFamily: "monospace" }}
          

            >
              MERN STACK DEVELOPER
            </Typography>
            {/* </div> */}
            <div>
              <p className="leading-8 text-[#71798d]">
                I'm a full-stack developer specialised in frontend and backend
                development for scalable web apps.I have made a variety of Mern
                Stack Applications. Want to know how I may help your project?
                Check out my projects from my <span className="text-[#009688]">GitHub Profile</span>
              </p>
            </div>

            <div className="text-4xl flex justify-start gap-8 py-3  text-[#8a91ac]">
              <AiFillLinkedin />
              <AiFillGithub />
            </div>
          </div>
        </div>
        <div
          className="flex justify-center  items-center"
          style={{ height: "95vh" }}
        >
          <div className="w-1/2 h1/2 ">
            <img className=" " src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
