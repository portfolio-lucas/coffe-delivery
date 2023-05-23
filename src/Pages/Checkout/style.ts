import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  background: #FAFAFA;
  display: flex;
  flex-direction: column;
  gap: 32px;

  h1 {
    font-family: 'Baloo 2';
    font-size: 18px;
    line-height: 130%;
    color: #403937;
    margin-left: 3rem;
  }
`

export const CompleteOrder = styled.div`
  width: 640px;
  heigth: 370px;
  padding: 40px;
  background: #F3F2F2;
  border-radius: 6px;
  margin-left: 3rem;

  span, p {
    font-size: 16px;
    line-height: 130%;
  }

  p {
    font-size: 14px;
    color: #574F4D;
  }

  .errorMessage {
    color: #B40404;
    font-size: 12px;
    font-weight: bold;
    margin-top: 0.5rem;
    margin-left: 2px;
  }

  input {
    padding: 12px;
    border: 1px solid #E6E5E5;
    border-radius: 4px;
    background: #EEEDED;
  }

  .primaryBlock {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .cep {
      width: 200px;
    }

    .road {
      width: 560px;
    }
  }

  .secondBlock {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;

    .numberHome {
      width: 200px;
    }

    .complement {
      width: 348px;
    }
  }

  .thirdBlock {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;

    .neighborhood {
      width: 200px;
    }

    .city {
      width: 276px;
    }

    .federativeUnit {
      width: 60px;
    }
  }
`

export const FormOfPayment = styled.div`
  width: 640px;
  heigth: 205px;
  padding: 40px;
  background: #F3F2F2;
  border-radius: 6px;
  margin-left: 3rem;

  span, p {
    font-size: 16px;
    line-height: 130%;
  }

  p {
    font-size: 14px;
    color: #574F4D;
  }

  button {
    width: 175px;
    height: 45px;
    background: #E6E5E5;
    border: none;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    span {
      font-size: 12px;
      line-height: 160%;
      color: #574F4D;
    }
  }

  div {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }
`