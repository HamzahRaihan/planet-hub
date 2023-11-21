import Button from '../layout/Button';
import { Link, NavLink } from 'react-router-dom';
import { IconSidebar } from './ui/Icons';
import Sidebar from '../layout/Sidebar';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = (e) => {
    e.preventDefault();
    if (isOpen) {
      setIsOpen(false);
    } else if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between p-5 px-5 bg-white w-full shadow fixed">
        <div className="logo">
          <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/main-logo-small.png?updatedAt=1697183029244" className="max-[980px]:hidden" alt="gwa logo" />
          <img src="https://raw.githubusercontent.com/Skilvul-FS13/Mobile-Responsive-Website/master/img/logo3.png" className="hidden max-[980px]:block" width={50} alt="logo" />
        </div>
        <nav className="flex flex-row items-center text-slate-800 font-bold gap-8 max-[980px]:hidden">
          <NavLink to="beranda" spy={true} smooth={true} duration={500} className="cursor-pointer">
            Beranda
          </NavLink>
          <NavLink to="tentang" spy={true} smooth={true} duration={500} className="cursor-pointer">
            Tentang Kami
          </NavLink>
          <NavLink to="berita" spy={true} smooth={true} duration={500} className="cursor-pointer">
            Berita
          </NavLink>
          <NavLink to="petisi" spy={true} smooth={true} duration={500} className="cursor-pointer">
            Petisi
          </NavLink>
          <NavLink to="komunitas" spy={true} smooth={true} duration={500} className="cursor-pointer">
            Komunitas
          </NavLink>
        </nav>
        <div className="flex items-center gap-3 max-[980px]:hidden">
          <Link to="/login">
            <Button type="masuk" title="Masuk" />
          </Link>
          <Button type="daftar" title="Daftar" />
        </div>
        <button className="flex items-center gap-3 min-[980px]:hidden transition-all hover:bg-neutral-100 active:bg-neutral-200 rounded" onClick={handleSidebar}>
          <IconSidebar />
        </button>
      </div>
      <div className={`fixed top-0 h-screen w-full lg:hidden ${!isOpen ? 'translate-x-full duration-300 transition-all ease-in' : 'translate-x-0 duration-300 transition-all ease-in'}`}>
        <button className="fixed bg-black opacity-30 h-screen w-full -z-0" onClick={handleSidebar}></button>
        <Sidebar />
      </div>
    </>
  );
};

export default Navbar;
