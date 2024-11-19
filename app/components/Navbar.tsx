
const Navbar = () => {
    return (
      <nav className="bg-teal-800 text-white py-4 fixed w-full z-20 shadow-md">
        <ul className="flex justify-center space-x-8">
          <li><a href="#about" className="hover:text-black">About</a></li>
          <li><a href="#contact" className="hover:text-black">Contact</a></li>
          <li><a href="#skills" className="hover:text-black">Skills</a></li>
          <li><a href="#education" className="hover:text-black">Education</a></li>
          <li><a href="#experience" className="hover:text-black">Experience</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  
  