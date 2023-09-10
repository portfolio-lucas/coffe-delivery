import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ShoppingListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`

export const Tr = styled.tr`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Th = styled.h1`
  font-weight: 700;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
`

export const Text = styled.p`
  font-weight: 500;
  font-size: 13px;
  font-family: "Roboto", sans-serif;
  line-height: 115%;
`

export const RemoveItem = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`

export const RemoveAllItems = styled.button`
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;

  font-weight: bold;
  
  background-color: #DF0101;

  border-radius: 2px;

  padding-block: 6px;

  :hover {
    background-color: #B40404;
  }
`

export const ProgressButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;

  font-weight: bold;

  padding-block: 6px;

  background-color: #AEB404;
  color: white;


  border-radius: 2px;

  :hover {
    background-color: #868A08;
  }
`