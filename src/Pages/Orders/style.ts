import styled from "styled-components";

export const OrdersContainer = styled.div`
  margin-bottom: 30px;
  height: 100%;

  .coffes {
    margin-top: 2rem;
    margin-left: 150px;
    display: flex;
    flex-direction: column;
    
    h1 {
      margin-top: 2rem;
      margin-bottom: 54px;
      color: #403937;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`