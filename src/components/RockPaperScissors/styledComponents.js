import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  @media screen and (min-width: 768px) {
    padding-left: 10%;
    padding-right: 10%;
  }
`

export const ChoiceScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
  border: 2px solid #ffffff;
  border-radius: 14px;
  margin-bottom: 40px;
  margin-top: 0px;
  height: 130px;
  @media screen and (min-width: 768px) {
    height: 160px;
  }
`

export const ChoiceListContainer = styled.div`
  width: 10%;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 12px;
  width: 130px;
  height: 95%;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ScoreTitle = styled.p`
  font-size: 28px;
  color: #223a5f;
  font-family: 'Bree Serif';
  margin-top: 0px;
  margin-bottom: 0px;
`

export const Score = styled.p`
  font-size: 48px;
  font-family: 'Roboto';
  color: #223a5f;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
`

export const ChoiceName = styled.h1`
  font-size: 24px;
  color: #ffffff;
  font-family: 'Bree Serif';
  font-weight: 500;
`

export const ChoiceButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChoiceButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border-width: 0px;
  width: 160px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const ChoiceImage = styled.img`
  width: 100%;
`

export const ResultImageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
`

export const ResultImageTextFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResultTitle = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const ResultImage = styled.img`
  width: 160px;
  @media screen and (min-width: 768px) {
    width: 200px;
    margin-left: 40px;
    margin-right: 40px;
  }
`
export const ResultText = styled.p`
  font-size: 26px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
`
export const Button = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-weight: 600;
  padding-left: 20px;
  padding-right: 20px;
  height: 40px;
  width: 160px;
  border-width: 0px;
  border-radius: 10px;
  margin-bottom: 30px;
  cursor: pointer;
`
