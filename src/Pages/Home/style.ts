import styled from "styled-components";

export const HomeContainer = styled.div`
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
  }
`
export const IntroContainer = styled.div`
  display: flex;
  padding: 6px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    #fff 90%,
    #EBC136,
    #8047F8
  );
  
  margin-top: 3.25rem;

  .introTitles {
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 48px;
      line-height: 100%;
      font-family: 'Baloo 2';
      width: 600px;
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
      padding: 8px; 
      display: flex;
      align-items: center;
      gap: 2.5rem;
    }
  }

  img {
    width: 376px;
    height: 260px;
  }
`