import { useGlobalContext } from './context';
import { HiMenuAlt1 } from 'react-icons/hi';
import NavLinks from './NavLinks';

function Navbar() {
  const { openSidebar } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <HiMenuAlt1 />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
}
export default Navbar;
