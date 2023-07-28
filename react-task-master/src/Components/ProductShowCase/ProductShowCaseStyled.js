import { styled } from "styled-components";
import offer from "../../images/offer.svg";

export const ProductShowCaseStyled = styled.div`
  .wrapper {
    margin: 50px;
    display: flex;
    flex-wrap: wrap;
  }
  .productShowCase {
    width: 248px;
    height: 457px;
    margin: 30px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--light-theme-card-border-color, #e3e9ef);
    ${"" /* border: 1px solid var(--light-theme-final-dark-green, #388e3c); */}
    background: #fff;
  }
  .badgeStack {
    position: relative;
    top: 3px;
    left: 0px;
    padding: 10px 0px 0px 10px;
    z-index: 1;
  }
  .offer-toast {
    width: 105px;
    height: 24px;
    color: rgb(255, 255, 255);
    font-weight: 700;
    background: url(${offer}) 100% 50% / cover no-repeat;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 6px;
    margin-bottom: 6px;
  }
  .image-wrapper {
    justify-content: flex-end;
    width: 200px;
    height: 220px;
    display: flex;
    border-radius: 8px;
    align-items: center;
  }
  .name {
    padding-left: 15px;
    width: 100%;
    height: 46px;
    text-align: left;
    margin: 0 0 8px 0;
    font-size: 18px;
    font-weight: 600;
    word-break: break-all;
  }
  .starRating {
    display: flex;
    flex-direction: row-reverse;
    padding: 0 20px;
    align-items: end;
    margin-bottom: 10px;
  }
  .starImage {
    width: 20px;
    height: 20px;
    float: right;
    position: relative;
  }
  .rating {
    font-size: 15px;
    line-height: 18px;
    font-weight: 600;
  }
  .ic {
    padding: 0 4px;
  }
  .price {
    width: 100%;
    margin: 0 0 8px 16px;
    display: flex;
    align-items: center;

    .productPrice {
      font-size: 16px;
      font-weight: 700;
      margin: 0 5px 0 0;
    }
  }
  .add-to-cart {
    position: relative;
    top: 10px;
    right: 0;
    left: 14px;
  }
  .btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &.btn-sm {
      font-size: 19px;
      border-radius: 13px;
      width: 200px;
      height: 50px;
    }

    .left {
      margin-right: 7px;
      display: flex;
    }
    .right {
      margin-left: 10px;
      display: flex;
    }

    .normalIcon {
      display: flex;
    }
  }
`;
