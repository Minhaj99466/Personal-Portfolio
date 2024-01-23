import { Typography } from "@material-tailwind/react";
import { Link } from "react-scroll";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillAmazonCircle,
  AiOutlineCloseSquare,
  AiFillHtml5,
} from "react-icons/ai";
import { FaBootstrap, FaCss3 } from "react-icons/fa";

function Skills() {
  return (
    <div className="bg-lime-500 md:h-screen">
      
      <Typography className="text-center " variant="h1">
        Skills
      </Typography>

      <div id="skills" className="md:flex justify-center items-center   " style={{height:'90%'}}>
        <div className=" container grid grid-cols-2 justify-center items-center">
          <div className=" md:flex md:justify-between bg-cyan-400 " >
            <AiFillHtml5 className="w-32 h-32" />

            <FaBootstrap className="w-32 h-32 " />
            <FaCss3 className="w-32 h-32" />
            <AiFillAmazonCircle className="w-32 h-32" />
            <AiFillAmazonCircle className="w-32 h-32" />
            {/* <FaHtml5 /> */}
            {/* <AiFillHtml5 /> */}
          </div>
          <div className="md:flex md:justify-between bg-brown-800">
            <AiFillAmazonCircle className="w-32 h-32" />
            <AiFillAmazonCircle className="w-32 h-32" />
            <AiFillAmazonCircle className="w-32 h-32" />
            <AiFillAmazonCircle className="w-32 h-32" />
            <AiFillAmazonCircle className="w-32 h-32" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
