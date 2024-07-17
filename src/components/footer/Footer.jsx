import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[200px]  mt-16 sm:h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 data-aos="zoom-out" className=" font-bold text-5xl sm:text-3xl">
          How to Reach me..
        </h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href="mailto:avdhraiyani06@gmail.com"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <MdOutlineEmail className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Email</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            href=""
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FaLinkedinIn className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Linkedin</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1400"
            href="https://api.whatsapp.com/send?phone=+91 7874114991&text=hello"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiWhatsappFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
