import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;

  .coffes {
    display: flex;
    flex-direction: column;
    margin-left: 150px;
    
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
  align-items: center;
  justify-content: center;
  margin-top: 6.25rem;

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
    margin-top: 2.25rem;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .item {
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