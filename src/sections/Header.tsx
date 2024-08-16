import LogoIcon from "@/assets/logo.svg"
import MenuIcon from "@/assets/icon-menu.svg"
import Button from "@/components/Button";
export const Header = () => {
  return <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
    <div className="absolute inset-0 backdrop-blur md:hidden -z-10"></div>
    <div className="md:container px-4">
  <div className="flex justify-between items-center md:border md:border-white/15 md:p-2.5 rounded-xl md:max-w-2xl md:mx-auto ">
    <div className="absolute inset-0 backdrop-blur hidden md:block -z-10"></div>
    <div>
      <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
        <LogoIcon className='h-8 w-8'/>
      </div>
    </div>
    <div className="hidden md:block">
      <nav className="text-sm gap-8 transition flex">
        <a href="" className="text-white/70 hover:text-white">Features</a>
        <a href="" className="text-white/70 hover:text-white">Developers</a>
        <a href="" className="text-white/70 hover:text-white">Pricing</a>
        <a href="" className="text-white/70 hover:text-white">Changelog</a>
      </nav>
    </div>
    <div className="flex gap-4 items-center">
      <Button>Join Waitlist</Button>
      <MenuIcon className="md:hidden"/>
    </div>
  </div>
</div>

  </header>;
};
