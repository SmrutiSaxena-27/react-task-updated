import { styled } from "styled-components";

export const HeaderStyled = styled.div`
  .header {
    background-color: "#f4faf4";
    height: 100px;
  }
  .cart-div {
    float: right;
    margin: 55px;
    position: relative;
    padding-right: 20px;
  }
  .cart-div img {
    width: 40px;
  }
  .cart-div span {
    width: 24px;
    height: 24px;
    font-size: 14px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    background: rgb(56, 142, 60);
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    top: -8px;
    right: 10px;
  }
  .logout {
    float: right;
    position: relative;
    top: 58px;
    left: -224px;
    border-radius: 8px;
    background: var(--light-theme-final-dark-green, #388e3c);
  }
`;
