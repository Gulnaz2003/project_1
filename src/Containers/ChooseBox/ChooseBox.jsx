import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import "./ChooseBox.css";
import box from "../../assets/img/box.png";

function ChooseBox() {
  return (
    <div className="box_container">
      <div className="box_options">
        <div className="box_title">
          <h1>Выберите бокс</h1>

          <div className="box_input">
            <Button
              text="1"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="100px"
              borderRadius="10px"
            />
            <Button
              text="2"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="100px"
              borderRadius="10px"
            />
            <Button
              text="3"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="100px"
            />
            <Button
              text="4"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="100px"
              borderRadius="10px"
            />
            <Button
              text="5"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="100px"
              borderRadius="10px"
            />
          </div>
          <div className="box_number">
            <Button
              text="6"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="100px"
              borderRadius="10px"
            />

            <Button
              text="7"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="100px"
              borderRadius="10px"
            />
            <Button
              text="8"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="100px"
              borderRadius="10px"
            />
            <Button
              text="9"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="100px"
              borderRadius="10px"
            />
            <Button
              text="10"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="100px"
              borderRadius="10px"
            />
          </div>

          <Link to={"/Card"} button className="buttonflop">
            <Button
              text="Флоп"
              margin="30px"
              padding="10px 90px"
              borderRadius="15px"
              color="white"
              background="#259a71"
              fontSize="20px"
            />
          </Link>

          <div className="box_menu">
            <img src={box} alt="" />
            <a href="url">Выйти</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseBox;
