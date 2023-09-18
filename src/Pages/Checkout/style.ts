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
  height: 500px;
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


  .primaryBlock {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;

    .cep {
      width: 200px;
    }

    .address {
      width: 560px;
    }

      .block {
        min-height: 70px;
        display: flex;
        flex-direction: column;

        .errorMessage {
          color: #B40404;
          font-size: 12px;
          font-weight: 500;
          margin-top: 0.5rem;
          margin-left: 2px;
        } 
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

    .block {
      height: 82px;
      display: flex;
      flex-direction: column;

      .errorMessage {
        color: #B40404;
        font-size: 12px;
        font-weight: 500;
        margin-top: 0.5rem;
        margin-left: 2px;
      } 
    }

  }

  .thirdBlock {
    margin-top: 0.5rem;
    max-width: 620px;
    display: flex;
    gap: 12px;

    .neighborhood {
      width: 200px;
    }

    .city {
      width: 276px;
    }

    .federativeUnit {
      width: 60px;
    }

    .block {
      height: 100px;
      display: flex;
      flex-direction: column;

      .errorMessage {
        color: #B40404;
        font-size: 12px;
        font-weight: 500;
        margin-top: 0.5rem;
        margin-left: 2px;
      } 
    }

  }
`



export const InputForm = styled.input`
  padding: 12px;
  border: 1px solid #E6E5E5;
  border-radius: 4px;
  background: #EEEDED;
  height: 42px;
`

export const FormOfPayment = styled.div`
  width: 640px;
  height: 205px;
  padding: 40px;
  background: #F3F2F2;
  border-radius: 6px;
  margin-left: 3rem;
  margin-bottom: 10px;

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

export const CoffesSelectedContainer = styled.div`
    width: 448px;
    min-height: 500px;
    padding: 40px;
    background: #F3F2F2;
    border-radius: 6px;
    border-top-right-radius: 44px;
    margin-left: 3rem;

    h1 {
      margin-left: initial;
    }
`

export const CoffesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 300px;
  overflow-y: auto;
`

export const CoffeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 14px;
    font-weight: 700;
    line-height: 130%;
    color: #574F4D;
  }
`

export const Divisor = styled.div`
  width: 100%;
  border-bottom: 1px solid;
  border-color: #e6e5e5;
`

export const BoxButton = styled.div`
  height: 32px;
  width: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: #e6e5e5;
  border-radius: 6px;
`

export const QuantityButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #8047F8;
  cursor: pointer;

  :hover {
    background-color: #D8D8D8;
  }
`

export const RemoveButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background-color: #D8D8D8;
  }
`

export const OrderSummary = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const OrderTotalItems = styled.div`
  display: flex;
  gap: 8rem;



  span {
    font-size: 14px;
    line-height: 130%;
    color: #574F4D;
  }
`

export const TextPrice = styled.h1`
  font-size: 20px;
  color: #574F4D;
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  padding: 12px 8px;
  background-color: #DBAC2C;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  :hover {
    background-color: #c47f17;
  }
`