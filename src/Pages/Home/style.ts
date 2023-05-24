import styled from "styled-components";

export const HomeContainer = styled.div`
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