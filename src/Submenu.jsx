import { useRef } from 'react';
import { useGlobalContext } from './context';
import sublinks from './data';

function Submenu() {
  const { pageId, setPageId } = useGlobalContext();
  const submenuContainer = useRef(null);

  const currentPage = sublinks.find((link) => link.pageId === pageId);

  const handleMouseLeave = (event) => {
    const { clientX, clientY } = event;
    const { left, right, bottom } =
      submenuContainer.current.getBoundingClientRect();

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1)
      setPageId(null);
  };
  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns: `${
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr'
          }`,
        }}
      >
        {currentPage?.links?.map((link) => (
          <a key={link.id} href={link.url}>
            {' '}
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
export default Submenu;
