/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
  <aside className="relative z-10">
  
    <img src="/sell-icon-png-19.jpg" alt="" className="fill-current text-white w-20 h-20"/>
    
    <p className="text-white/90">
      Item Sell Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav className="relative z-10">
    <h6 className="footer-title text-white">Services</h6>
    <a className="link link-hover text-white/80 hover:text-white transition-colors">Branding</a>
    <a className="link link-hover text-white/80 hover:text-white transition-colors">Design</a>
    <a className="link link-hover text-white/80 hover:text-white transition-colors">Marketing</a>
    <a className="link link-hover text-white/80 hover:text-white transition-colors">Advertisement</a>
  </nav>
  <nav className="relative z-10">
    <h6 className="footer-title text-white">Company</h6>
    <a className="link link-hover text-white/80 hover:text-white transition-colors">About us</a>
    <a className="link link-hover text-white/80 hover:text-white transition-colors">Contact</a>
    <a className="link link-hover text-white/80 hover:text-white transition-colors">Jobs</a>
    <a className="link link-hover text-white/80 hover:text-white transition-colors">Press kit</a>
  </nav>
  <nav className="relative z-10">
    <h6 className="footer-title text-white">Legal</h6>
    <a className="link link-hover text-white/80 hover:text-white transition-colors">Terms of use</a>
    <a className="link link-hover text-white/80 hover:text-white transition-colors">Privacy policy</a>
    <a className="link link-hover text-white/80 hover:text-white transition-colors">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;