import {Component} from 'react'
import ReactPopUp from '../ReactPopup'
import {
  BgContainer,
  ChoiceScoreContainer,
  ChoiceListContainer,
  ScoreContainer,
  ScoreTitle,
  Score,
  ChoiceButtonContainer,
  ChoiceButton,
  ChoiceImage,
  ChoiceName,
  ResultImageTextContainer,
  ResultImageTextFlexContainer,
  ResultImageContainer,
  ResultTitle,
  ResultImage,
  ResultText,
  Button,
} from './styledComponents'

class RockPaperScissorsGame extends Component {
  state = {
    gameView: true,
    score: 0,
    choiceId: '',
    opponentChoiceId: '',
    resultImageUrl: '',
    opponentResultImageUrl: '',
  }

  renderRandomView = () => {
    const {choicesList} = this.props
    const num = Math.floor(Math.random() * choicesList.length)
    return num
  }

  getRockGameResult = async () => {
    const {choicesList} = this.props
    const randomNo = this.renderRandomView()
    await this.setState({
      gameView: false,
      choiceId: 'ROCK',
      resultImageUrl: choicesList[0].imageUrl,
      opponentChoiceId: choicesList[randomNo].id,
      opponentResultImageUrl: choicesList[randomNo].imageUrl,
    })
    this.renderScore()
  }

  getScissorsGameResult = async () => {
    const {choicesList} = this.props
    const randomNo = this.renderRandomView()
    await this.setState({
      gameView: false,
      choiceId: 'SCISSORS',
      resultImageUrl: choicesList[1].imageUrl,
      opponentChoiceId: choicesList[randomNo].id,
      opponentResultImageUrl: choicesList[randomNo].imageUrl,
    })
    this.renderScore()
  }

  getPaperGameResult = async () => {
    const {choicesList} = this.props
    const randomNo = this.renderRandomView()
    await this.setState({
      gameView: false,
      choiceId: 'PAPER',
      resultImageUrl: choicesList[2].imageUrl,
      opponentChoiceId: choicesList[randomNo].id,
      opponentResultImageUrl: choicesList[randomNo].imageUrl,
    })
    this.renderScore()
  }

  renderGameView = () => {
    const {choicesList} = this.props
    return (
      <>
        <ChoiceButtonContainer>
          <ChoiceButton
            type="button"
            onClick={this.getRockGameResult}
            data-testid="rockButton"
          >
            <ChoiceImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
            />
          </ChoiceButton>
          <ChoiceButton
            type="button"
            onClick={this.getScissorsGameResult}
            data-testid="scissorsButton"
          >
            <ChoiceImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
            />
          </ChoiceButton>
        </ChoiceButtonContainer>
        <ChoiceButtonContainer>
          <ChoiceButton
            type="button"
            onClick={this.getPaperGameResult}
            data-testid="paperButton"
          >
            <ChoiceImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
            />
          </ChoiceButton>
        </ChoiceButtonContainer>
      </>
    )
  }

  renderResultText = () => {
    const {choiceId, opponentChoiceId} = this.state
    let resultText = ''
    if (choiceId === 'ROCK' && opponentChoiceId === 'SCISSORS') {
      resultText = 'YOU WON'
    }
    if (choiceId === 'ROCK' && opponentChoiceId === 'PAPER') {
      resultText = 'YOU LOSE'
    }
    if (choiceId === 'ROCK' && opponentChoiceId === 'ROCK') {
      resultText = 'IT IS DRAW'
    }

    if (choiceId === 'SCISSORS' && opponentChoiceId === 'PAPER') {
      resultText = 'YOU WON'
    }
    if (choiceId === 'SCISSORS' && opponentChoiceId === 'ROCK') {
      resultText = 'YOU LOSE'
    }
    if (choiceId === 'SCISSORS' && opponentChoiceId === 'SCISSORS') {
      resultText = 'IT IS DRAW'
    }

    if (choiceId === 'PAPER' && opponentChoiceId === 'ROCK') {
      resultText = 'YOU WON'
    }
    if (choiceId === 'PAPER' && opponentChoiceId === 'SCISSORS') {
      resultText = 'YOU LOSE'
    }
    if (choiceId === 'PAPER' && opponentChoiceId === 'PAPER') {
      resultText = 'IT IS DRAW'
    }

    return resultText
  }

  renderScore = () => {
    const result = this.renderResultText()
    if (result === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    }
    if (result === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  displayGameView = () => {
    this.setState({gameView: true})
  }

  renderResultView = () => {
    const {resultImageUrl, opponentResultImageUrl} = this.state
    return (
      <ResultImageTextContainer>
        <ResultImageTextFlexContainer>
          <ResultImageContainer>
            <ResultTitle>YOU</ResultTitle>
            <ResultImage src={resultImageUrl} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultTitle>OPPONENT</ResultTitle>
            <ResultImage src={opponentResultImageUrl} alt="opponent choice" />
          </ResultImageContainer>
        </ResultImageTextFlexContainer>
        <ResultText>{this.renderResultText()}</ResultText>
        <Button type="button" onClick={this.displayGameView}>
          PLAY AGAIN
        </Button>
      </ResultImageTextContainer>
    )
  }

  render() {
    const {gameView, score} = this.state

    return (
      <BgContainer>
        <ChoiceScoreContainer>
          <ChoiceListContainer>
            <ChoiceName>ROCK PAPER SCISSORS</ChoiceName>
          </ChoiceListContainer>
          <ScoreContainer>
            <ScoreTitle>Score</ScoreTitle>
            <Score>{score}</Score>
          </ScoreContainer>
        </ChoiceScoreContainer>
        {gameView ? this.renderGameView() : this.renderResultView()}
        <div>
          <ReactPopUp />
        </div>
      </BgContainer>
    )
  }
}
export default RockPaperScissorsGame
