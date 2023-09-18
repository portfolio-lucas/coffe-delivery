import styled from "styled-components";

export const OrderSuccessContent = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const OrderConfirmInform = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const OrderMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 32px;
    color: #c47f17;
  }

  span {
    font-family: 'Roboto';
    font-size: 16px;
  }
`

export const OrderInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const OrderDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`