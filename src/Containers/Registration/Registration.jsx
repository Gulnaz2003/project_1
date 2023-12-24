import { Link } from "react-router-dom";
import "./Registration.css";
import Button from "../../components/button/button";

function Registration() {
  return (
    <div className="registration_options">
      <h1>Вход</h1>
      <h2>Добро пожаловать!</h2>
      <div className="registration_input">
        <input name="email" type="text" placeholder="Почта" />
        <input name="password" type="password" placeholder="Пaроль" />
        <a href="url">Забыли пороль?</a>
        <Link to={"/choose-role"}>
          <Button
            text="Войти"
            padding="0px 60px"
            borderRadius="20px"
            color="white"
            margin="70px "
            background="#10263c"
          />
        </Link>
      </div>
    </div>
  );
}

export default Registration;
