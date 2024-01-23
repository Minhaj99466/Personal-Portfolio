import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

function NavList() {
  const list = [
    {
      name: "Home",
      action: "/",
      offset: -100,
    },
    {
      name: "About",
      action: "about",
      offset: 1,
    },
    {
      name: "Skills",
      action: "skills",
      offset: 50,
    },
    {
      name: "Works",
      action: "works",
    },
    {
      name: "Contact",
      action: "contact",
    },
  ];

  return (
    <ul className="my-2  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      {list.map((x, index) => {
        return (
          <Typography
            key={index}
            as="li"
            variant="small"
          
            className="p-1 font-medium text-[#ced7f1]"
          >
            <Link
              activeClass="active"
              to={x.action}
              spy={true}
              smooth={true}
              offset={x.offset}
              duration={500}
              className="flex items-center hover:text-[#629691] transition-colors font-bold"
              onClick={() => x}
            >
              {x.name}
            </Link>
          </Typography>
        );
      })}
    </ul>
  );
}

export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      className=" px-6 py-3  bg-[#0d1a2f] "
      // shadow={false}
      style={{ border: "none" }}
    >
      <div className="flex items-center mx-auto container justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 text-[#ced7f1]"
        >
          PORTFOLIO
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </div>
  );
}
