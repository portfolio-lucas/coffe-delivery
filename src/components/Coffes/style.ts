import styled from "styled-components";

export const CoffeContainer = styled.div`
  width: 256px;
  heigth: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #F3F2F2;
  border-radius: 6px 36px;

  img {
    width: 120px;
    heigth: 120px;
  }

  h5 {
    margin-top: 0.75rem;
    background: #F1E9C9;
    color: #C47F17;
    padding: 4px 8px;
    border-radius: 100px;
  }

  h2 {
    font-size: 20px;
    color: #403937;
    font-family: 'Baloo 2';
    margin-top: 1rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 14px;
    line-height: 130%;
    color: #8D8686;
    text-align: center;
  }

  div {
    margin-top: 1.25rem; 
    display: flex;
    align-items: center;
    gap: 1.25rem;

    span {
      color: #574F4D;
    }

    .addQuantity {
      background: #E6E5E5;
      padding: 8px;
      border-radius: 6px;

      button {
        font-size: 20px;
        background: none;
        border: none;
        color: #8047F8;
      }
    }

  }
`  