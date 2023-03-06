import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Sergey</em>
          </strong>
          <br />
          frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="https://github.com/skhiev" className="btn">
          GitHub go over
        </a>
      </div>
    </header>
  );
};

export default Header;
