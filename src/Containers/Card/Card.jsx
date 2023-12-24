import Button from "../../components/button/button";
import "./Card.css";
import card from "../../assets/img/card_img.png";
function Card() {
  return (
    <div className="card_options">
      <div className="card_title">
        <h2>Выберите ваши карты</h2>
        <div className="card">
          <div className="card_input">
            <Button
              text="A"
              background="white"
              width="75px"
              height="100px"
              borderColor="white"
              fontSize="40px"
            />
            <Button
              text="K"
              background="white"
              width="75px"
              height="100px"
              borderColor="white"
              fontSize="40px"
            />
            <Button
              text="Q"
              background="white"
              width="75px"
              height="100px"
              borderColor="white"
              fontSize="40px"
            />
            <Button
              text="J"
              background="white"
              width="75px"
              height="100px"
              borderColor="white"
              fontSize="40px"
            />
            <Button
              text="10"
              background="white"
              width="75px"
              height="100px"
              borderColor="white"
              fontSize="40px"
            />
          </div>
          <div className="card_number">
            <Button
              text="9"
              background="white"
              width="75px"
              height="100px"
              borderColor="white"
              fontSize="40px"
            />

            <Button
              text="8"
              background="white"
              width="75px"
              height="100px"
              bordercolor="white"
              fontSize="40px"
            />
            <Button
              text="7"
              background="white"
              width="75px"
              height="100px"
              borderColor="white"
              fontSize="40px"
            />
            <Button
              text="6"
              background="white"
              width="75px"
              height="100px"
              borderColor="white"
              fontSize="40px"
            />
            <Button
              text="5"
              background="white"
              width="75px"
              height="100px"
              borderColor="white"
              fontSize="40px"
            />
          </div>
          <div className="card_number3">
            <Button
              text="4"
              background="white"
              width="75px"
              height="100px"
              borderColor="white"
              fontSize="40px"
            />
            <Button
              text="3"
              background="white"
              width="75px"
              height="100px"
              borderColor="white"
              fontSize="40px"
            />
            <Button
              text="2"
              background="white"
              width="75px"
              height="100px"
              borderColor="white"
              fontSize="40px"
            />
          </div>
          <div className="buttoncard">
            <button className="button">
              <h1>Oтправить</h1>
            </button>
            <button className="button2card">
              <h1>ПAC</h1>
            </button>
          </div>
        </div>
      </div>
      <div className="card_menu">
        <img src={card} alt="" />
        <a href="url">Выйти</a>
      </div>
    </div>
  );
}

export default Card;
