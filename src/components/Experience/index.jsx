import React from "react";

const Index = () => {
  return (
    <>
      <div className="flex flex-col md:justify-center items-center md:items-start justify-center md:gap-14 gap-10 h-auto px-8 lg:px-14 py-14 md:py-20 lg:py-20">
        {/* Hero Section */}
        <div className="hero text-center md:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
          <h1 className="text-yellow-500 text-4xl md:text-6xl font-extrabold font-poppins">
            Experience
          </h1>
          <h1 className="text-teal-300 text-center font-bold text-sm font-poppins self-center lg:text-left md:self-start">
            WORKED AT
          </h1>
        </div>

        {/* Skills Section */}
        <div className="text flex flex-col gap-6 flex-1">
          {/* first Education */}
          <div className="flex flex-col font-poppins text-yellow-500 items-start gap-8 justify-start">
            <div className="flex h-28 gap-8 flex-col md:flex-row md:gap-3 ">
              {/* <div className="date flex md:transform md:rotate-90 text-center text-teal-300 bg-slate-50 h-5 md:self-center md:align-middle ">
                                <p className="text-xs font-semibold">05/2022-08/2022</p>
                            </div> */}
              <div className="date flex md:transform md:rotate-90 text-center text-teal-300 h-5 md:self-center md:align-middle md:-ml-12 md:-mr-12">
                <p className="text-xs font-semibold">02/2025-Present</p>
              </div>

              <div className="desc flex flex-col font-bold text-lg gap-4 md:gap-8 justify-between">
                <p className="">Saylani Welfare Trust</p>
                <p className="italic">Software Engineer</p>
              </div>
            </div>

            <div className="text-zinc-100 text-sm">
              <p>
                Gaining hands-on experience in deployment, hosting, Docker, and
                software engineering practices through real-world projects like
                Saylani’s student and admin portals. Enhancing learner platforms
                with new features while developing expertise in Next.js, SaaS
                systems, and AI-driven applications for scalable solutions
              </p>
            </div>
          </div>
          {/* Second Education  */}
          <div className="flex flex-col font-poppins text-yellow-500 items-start gap-8 justify-start">
            <div className="flex h-28 gap-8 flex-col md:flex-row md:gap-3 ">
              {/* <div className="date flex md:transform md:rotate-90 text-center text-teal-300 bg-slate-50 h-5 md:self-center md:align-middle ">
                                <p className="text-xs font-semibold">05/2022-08/2022</p>
                            </div> */}
              <div className="date flex md:transform md:rotate-90 text-center text-teal-300 h-5 md:self-center md:align-middle md:-ml-12 md:-mr-12">
                <p className="text-xs font-semibold">05/2024-Present</p>
              </div>

              <div className="desc flex flex-col font-bold text-lg gap-4 md:gap-8  justify-between">
                <p className="">Optimix Solutions</p>
                <p className="italic">MERN Stack Developer</p>
              </div>
            </div>

            <div className="text-zinc-100 text-sm">
              <p>
                Led cross-functional teams in Agile/Scrum environments to
                deliver high-impact projects efficiently. Developed and deployed
                scalable cross-platform applications using the MERN stack and
                other stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
