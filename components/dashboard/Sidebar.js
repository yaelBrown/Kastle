import ni from "./NavbarItems.json";
import styles from "../../assets/styles/components/dashboard/Sidebar.module.css";

function Sidebar() {
  const renderItems = () => {
    let out = [];
    ni.forEach((e) => {
      let t = (
        <li className={styles.sideLi}>
          <a href={e.url}>{e.name}</a>
        </li>
      );
      out.push(t);
    });
    return out;
  };

  return (
    <div className={styles.sidebar}>
      <ul className={styles.sideUl}>{renderItems()}</ul>
    </div>
  );
}

export default Sidebar;
