import Logo from "@/assets/logo.svg";
import XSocial from '@/assets/social-x.svg'
import InstaSocial from '@/assets/social-instagram.svg'
import YTSocial from "@/assets/social-youtube.svg"
import Link from "next/link";
export const Footer = () => {
  return <footer className="py-5 border-t border-white/15">
    <div className="container lg:mx-auto">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center ">
      <div className="flex items-center gap-2 lg:flex-1">
         <Logo className="h-6 w-6"/>
         <div className="font-medium">AI Startup landing page</div>
      </div>
  
      <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
        <a href="#" className="text-white/70 hover:text-white text-xs  md:text-sm lg:text-base transition">Features</a>
        <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm lg:text-base transition">Developers</a>
        <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm lg:text-base transition">Company</a>
        <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm lg:text-base transition">Blog</a>
        <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm lg:text-base transition">Changelog</a>
      </nav>

      <div className="flex gap-4 lg:flex-1 lg:justify-end">
        <XSocial  className="text-white/40 hover:text-white transition"/>
        <InstaSocial className="text-white/40 hover:text-white transition"/>
        <YTSocial className="text-white/40 hover:text-white  transition"/>
      </div>

      </div>
      <p className="text-white/70 text-center mt-5 pb-2 text-sm">Powered By : <Link className="hover:text-white hover:underline transition" target="_blank" href={'https://github.com/TheMercury1229'}>Mercury</Link></p>

    </div>

  </footer>;
};
