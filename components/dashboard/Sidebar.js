import ni from "./NavbarItems.json";

function Sidebar() {
  const renderItems = () => {
    let out = [];
    ni.forEach((e) => {
      let t = (
        <li>
          <a href={e.url}>{e.name}</a>
        </li>
      );
      out.push(t);
    });
    return out;
  };

  return (
    <div>
      Navbar
      {renderItems()}
    </div>
  );
}

export default Sidebar;
