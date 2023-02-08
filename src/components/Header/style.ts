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

    div {
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
    }

    .cartMarket {
      background: #F1E9C9;
    }
    
`