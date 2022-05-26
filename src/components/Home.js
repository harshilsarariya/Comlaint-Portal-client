import React from "react";
import complaintImg from "./../images/comlaintImg.jpg";
import appStore from "./../images/app-store.png";
import playStore from "./../images/play-store.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* welcome screen component */}
      <div className="flex font-inter ">
        <div className="w-1/2  bg-black shadow-xl ">
          <div className="mt-32 mb-32 ml-36 mr-10">
            <h1 className="text-5xl font-bold text-white  mb-5">
              Online Complaint Portal
            </h1>
            <p className="text-xl mt-12 text-[#BDBDBD] font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              consectetur? Recusandae illo ad inventore repellat quia eos
              veritatis tempore dolore eaque fugit dolorum, dolores molestias
              fuga
            </p>
            <button
              onClick={() => navigate("complaints")}
              className="bg-white text-black text-lg mt-10 py-2 px-4 rounded"
            >
              Register Complaint
            </button>
          </div>
        </div>
        <div className="main-header w-10"></div>
        <div className="w-1/2 bg-[#FAFAFA] ">
          <div className="mr-32 mt-20">
            <img src={complaintImg} alt="CompaintImage" />
          </div>
        </div>
      </div>

      <div className="flex mt-32 font-inter">
        <section className="w-1/2 ml-52">
          <h1 className="text-4xl font-semibold mb-10 text-black">
            Why Quickfix
          </h1>
          <div className="flex items-center mb-10">
            <div className="">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_29614d40.png"
                alt=""
                className="w-16"
              />
            </div>
            <div className="pl-10">
              <h3 className="font-bold text-lg ">Transparent pricing</h3>
              <span className="text-[#757575] text-base">
                see fixed price before book. No hidden charges
              </span>
            </div>
          </div>
          <div className="flex items-center mb-10">
            <div className="">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2cc7d0d0.png"
                alt=""
                className="w-16"
              />
            </div>
            <div className="pl-10">
              <h3 className="font-bold text-lg ">Expert only</h3>
              <span className="text-[#757575] text-base">
                Our professionals are well trained and have on-job expertise.
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2caafa00.png"
                alt=""
                className="w-16"
              />
            </div>
            <div className="pl-10">
              <h3 className="font-bold text-lg ">Fully equipped</h3>
              <span className="text-[#757575] text-base">
                We bring everything needed to get the job done well
              </span>
            </div>
          </div>
        </section>
        <section className="w-1/2 pt-16 bg-[#F5F9FF] pl-10 mr-44 ml-14 rounded">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_20,f_auto/categories/category_v2/category_cb4d9130.png"
            alt=""
            className="w-28"
          />
          <h3 className="text-3xl font-bold mt-10 mb-4 ">
            100% Quality Assured{" "}
          </h3>
          <span className="text-[#757575] text-xl ">
            If you don't love our service. we will make it right
          </span>
        </section>
      </div>
      <div className="bg-[#F0F0F0] mt-20 h-4"></div>

      <div className="flex mt-10 mb-20  font-inter">
        <section className="w-1/2 pt-20 ml-52 pr-48">
          <h2 className="text-3xl font-bold mb-4">
            Register your complaint from your phone
          </h2>
          <span className="text-[#757575] text-xl">
            Enter your mobile number to get the App download link
          </span>
          <br />
          <input type="text" className="border-2 p-3 shadow-lg w-80 mt-10" />
          <button className="bg-black text-white p-3 w-24 rounded ">
            Send
          </button>
          <div className="flex mt-10 space-x-3">
            <img src={playStore} className="w-36 " alt="" />
            <img src={appStore} className="w-36 " alt="" />
          </div>
        </section>
        <section className="w-1/2">
          <img
            className="w-[70%] pt-10"
            src="https://img.freepik.com/free-vector/team-analysts-working-brand-reputation-social-media_74855-20739.jpg?w=2000"
            alt=""
          />
        </section>
      </div>
    </>
  );
};

export default Home;
