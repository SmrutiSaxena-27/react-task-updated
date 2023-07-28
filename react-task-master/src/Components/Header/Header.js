import { useDispatch, useSelector } from "react-redux";
import { HeaderStyled } from "./HeaderStyled";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../redux/action";

const Header = () => {
  const result = useSelector((state) => state?.cartData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <HeaderStyled>
      <div className="header">
        <div className="">
          <Button
            className="logout"
            onClick={() => {
              navigate("/");
              dispatch(emptyCart(result));
            }}
          >
            Logout
          </Button>
        </div>
        <div className="cart-div">
          <span>{result?.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
