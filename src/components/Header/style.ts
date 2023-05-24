import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 104px;

  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const ContentMain = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  background: #EBE5F9;
  padding: 8px;
  border-radius: 6px;
  gap: 4px;

  span {
    color: #4B2995;
    font-size: 14px;
  }
`

export const CarButton = styled.button`
  background: #F1E9C9;
  border: none;
  cursor: pointer;
  width: 38px;
  height: 38px;
  border-radius: 6px;
`

export const QuantityInCart = styled.div`
  position: absolute;
  margin-top: -6px;
  margin-left: 26px;
  width: 15px;
  height: 15px;
  background-color: #000;
  border: none;
  border-radius: 99px;
  font-weight: 700;

  p {
    color: #fff;
    margin-inline: auto;
    margin-block: 1px;
    font-size: 12px;
  }
`

export const CartModal = styled.div`
  .DialogContent {
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-radius: 6px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 18%;
    left: 72%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 340px;
    max-height: 85vh;
    padding: 25px;
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}
`

export const CloseModal = styled.button`
    cursor: pointer;
    border: none;
    font-family: inherit;
    border: none;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    left: 87%;

    &:hover {
      background: #EBE5F9;
    }
`