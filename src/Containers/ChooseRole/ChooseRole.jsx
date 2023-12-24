import { Link } from "react-router-dom";
import "./ChooseRole.css";
import Button from "../../components/button/button";

function ChooseRole() {
  return (
    <div className="role_options">
      <div className="role_title">
        <h1>Выберите вашу роль</h1>
        <div className="role">
          <button classname="igrok">
            <h3>Игрок</h3>
          </button>
          <button classname="vedushii">
            <h3>Ведущий</h3>
          </button>
        </div>
        <Link to={"/choose-box"} className="button2">
          <Button
            text="Продолжить"
            padding="0px 60px"
            borderRadius="20px"
            margin="20px "
            background="white"
            color="#0D0A2C "
            border-color="#10263C"
          />
        </Link>
      </div>
    </div>
  );
}

export default ChooseRole;
