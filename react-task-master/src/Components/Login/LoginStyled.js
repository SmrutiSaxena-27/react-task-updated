import styled from "styled-components";

export const LoginStyled = styled.div`
  .container {
    position: relative;
    height: 600px;
    border-radius: 20px;
    background: var(--light-theme-off-green, #F1FAF1);
    top: 100px;
    width: 600px;
  }
  .loginText {
    display: flex;
    justify-content: center;
    padding: 25px; 0 20px 0;
    color: var(--main-typography, #031A32);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Mulish;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
  }
  .form{
    padding:30px;
  }
  .label{
    color: var(--light-theme-type-medium-grey, #78909C);
    text-align: center;
    font-family: Mulish;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 23px;
    padding: 20px 0;
  }
  .button{
    display: flex;
    width: 200px;
    height: 56px;
    padding: 20px 10px 19px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    ${'' /* margin-top: 80px; */}
    border-radius: 8px;
    background: var(--light-theme-final-dark-green, #388E3C);
  }
  .form-control{

  }
  .requiredField {
    display: flex;
    justify-content: flex-start;
    color: var(--light-theme-theme-red, #E15241);
    font-family: Mulish;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    padding-top: 10px;
    padding-left:5px;
  }
`;
