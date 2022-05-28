import { React } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import me from '../../assets/images/me.jpg';

const MyPortfolio = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={me}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Name: Md. Masum Mia <br /> Email: iinaamasum@gamil.com
          </h1>
          <div className="text-lg font-semibold mb-4">
            Education: <br />{' '}
            <div className="ml-10 text-md">
              <p>
                University: Rajshahi University of Engineering and Technology
              </p>{' '}
              <p>Department: Computer Science and Engineering</p>
              <p>College: Notre Dame College</p>
            </div>
            <p>Address: ZR-3, Monnafer More, Rajshahi.</p>
            <p>
              Project-1:{' '}
              <a
                className="text-blue-600 underline"
                href="https://warehouse-4de2f.web.app/"
              >
                Click Here
              </a>
            </p>
            <p>
              Project-2:{' '}
              <a
                className="text-blue-600 underline"
                href="https://visa-manager.netlify.app/"
              >
                Click Here
              </a>
            </p>
            <p>
              Project-3:{' '}
              <a
                className="text-blue-600 underline"
                href="https://product-checker.netlify.app/"
              >
                Click Here
              </a>
            </p>
          </div>
          <p className="mb-8 leading-relaxed">
            - 👋 Hi, I’m Md. Masum Mia <br /> - 👀 I’m interested in Mechine
            Learning, Data Mining and AI. Currently I am doing development work
            based on Web. Also I have interest in problem solving in various
            online judge. I want to be a Data Scientist or Data Analytics.
            Please pray for my bright future. <br /> - 🌱 I’m currently studying
            in department of CSE at Rajshahi University of Engineering and
            Technology ... <br /> - 💞️ I’m looking for a job to sharp my
            development skill. <br /> - 📫 You can email or send message in
            LinkedIn <br /> Email: iinaamasum@gmail.com
          </p>
          <div className="flex justify-center">
            <button className="tracking-wide uppercase text-center bg-slate-200 hover:bg-slate-400 text-black font-semibold text-xl px-3 py-2 rounded flex items-center justify-between mr-4">
              <BsGithub />
              <span className="pl-2">Github</span>
            </button>
            <button className="tracking-wide uppercase text-center bg-slate-100 hover:bg-slate-300 text-black font-semibold text-xl px-3 py-2 rounded flex items-center justify-between">
              <BsLinkedin />
              <span className="pl-2">LinkedIn</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
