import { useGlobalContext } from './context';
import sublinks from './data';

function Submenu() {
  const { pageId } = useGlobalContext();

  const currentPage = sublinks.find((link) => link.pageId === pageId);
  //   if (!currentPage) return;

  return (
    <div className={currentPage ? 'submenu show-submenu' : 'submenu'}>
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
// function Submenu() {
//   const { pageId } = useGlobalContext();

//   const currentPage = sublinks.find((link) => link.pageId === pageId);
//   if (!currentPage) return;

//   return (
//     <div className={currentPage ? 'submenu show-submenu' : 'submenu'}>
//       <h5>{currentPage.page}</h5>
//       <div
//         className="submenu-links"
//         style={{
//           gridTemplateColumns: `${
//             currentPage.links.length > 3 ? '1fr 1fr' : '1fr'
//           }`,
//         }}
//       >
//         {currentPage.links.map((link) => (
//           <a key={link.id} href={link.url}>
//             {' '}
//             {link.icon}
//             {link.label}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Submenu;
