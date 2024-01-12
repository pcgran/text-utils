import "../styles/App.css";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <div className="header-container">
      <div className="site-title dark">TextUtils</div>
      <ThemeSwitch />
      <div className="header-separator">
        <hr />
      </div>
    </div>
  );
};

export default Header;
