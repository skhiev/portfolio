import "./style.css";
import gitHubIcon from "./gitHub-black.svg";

const BtnGitHub = ({ link }) => {
  return (
    <button
      href={link}
      target="_blank"
      rel="noreferrer"
      className="btn-outline"
    >
      <img src={gitHubIcon} alt="" />
      <p>GitHub repo</p>
    </button>
  );
};

export default BtnGitHub;
