import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  const navLinks = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/products', name: 'Products' },
    { id: 3, path: '/review', name: 'Review' },
    { id: 4, path: '/dashboard', name: 'Dashboard' },
    { id: 5, path: '/myPortfolio', name: 'Portfolio' },
  ];
  const services = [
    { id: 1, path: '/', name: 'Whole Sell' },
    { id: 2, path: '/', name: 'Customized Products' },
    { id: 3, path: '/', name: 'On time Supply' },
    { id: 4, path: '/', name: 'Quality items' },
  ];
  return (
    <footer>
      <div className="footer p-10 bg-slate-600 text-white">
        <div>
          <span className="footer-title">Important Links</span>

          {navLinks.map((link) => (
            <Link className="link link-hover" to={link.path} key={link.id}>
              {link.name}
            </Link>
          ))}
        </div>
        <div>
          <span className="footer-title">Services</span>
          {services.map((link) => (
            <Link className="link link-hover" to={link.path} key={link.id}>
              {link.name}
            </Link>
          ))}
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="footer bg-black px-10 py-4 text-white">
        <div className="">
          <p className="text-2xl my-0 text-red-600">
            autoFin Manufacturer Ltd.
          </p>
          <p className="my-0">Providing reliable parts since 1970</p>
          <p className="my-0">Copyright &copy; {year}. All rights reserved</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <div className="text-accent flex justify-center items-center">
              <a
                href="https://www.facebook.com/iinaamasum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook
                  size={40}
                  className="mr-3 cursor-pointer hover:text-slate-400"
                />
              </a>
              <a
                href="https://github.com/iinaamasum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub
                  size={40}
                  className="mr-3 cursor-pointer hover:text-slate-400"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/iinaamasum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin
                  size={40}
                  className="mr-3 cursor-pointer hover:text-slate-400"
                />
              </a>
              <a
                href="https://twitter.com/iinaamasum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrTwitter
                  size={40}
                  className="mr-3 cursor-pointer hover:text-slate-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
