import styled from "styled-components";


export const IntroContainer = styled.div`
  display: flex;
  margin-top: 3.25rem;
  padding: 6px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    #fff 90%,
    #EBC136,
    #8047F8
  );

  img {
    width: 376px;
    height: 260px;
    margin-left: 50px;
  }
  
  .introTitles {
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 48px;
      line-height: 100%;
      font-family: 'Baloo 2';
      font-weight: 800;
      width: 600px;
      color: #272221;
    }

    p {
      margin-top: 1rem;
      width: 450px;
    }
  }

  .items {
    margin-top: 1.25rem;
    padding-bottom: 30px;
    display: grid;
    grid-template-areas: 
    "item1 item2"
    "item3 item4";
    gap: 16px;     

    .item {
      padding-block: 4px; 
      display: flex;
      align-items: center;
      gap: 2.5rem;
    }
  }


`

export const DoOrderContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 5%;
  height: 60px;
`

export const ButtonOrder = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding-block: 10px;
  padding-inline: 14px;

  background-color: #4b2995;

  display: flex;
  align-items: center;
  gap: 8px;
  
  span {
    color: white;
    font-size: 14px;
    font-weight: 600;
  }

  :hover {
    background-color: #805AD5;
  }
`