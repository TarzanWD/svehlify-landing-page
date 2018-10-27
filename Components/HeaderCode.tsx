import React from 'react'
// sections
/*
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/light"
// import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import js from 'react-syntax-highlighter/languages/hljs/javascript';
import { dark } from 'react-syntax-highlighter/styles/prism';

registerLanguage('javascript', js)
*/
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { dark } from 'react-syntax-highlighter/styles/prism'


const codeString =
`// confused IT guy: how does redux thunk works?
// Svehlify group: Well...
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
    // -> money get & bitches fuck <-
    // 💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
`
interface IState {
  currentCount: number
  intervalId: NodeJS.Timeout | null
}


class HeaderCode extends React.Component<void, IState> {
  private frameId = null
  public state = {
    intervalId: null,
    currentCount: 75
  }

  public theoreticalComponentAnimationFunction = () => {
    const randNum = Math.round(Math.random() * 7)

    const newCount = this.state.currentCount + 1
    /*
    const newCount = randNum === 0
      ? this.state.currentCount + 1
      : randNum === 1
        ? this.state.currentCount + 1
        : randNum === 2
          ? this.state.currentCount + 3
          : this.state.currentCount + 4
    */
    this.setState({ currentCount: newCount })
  }

  public componentDidMount() {
    this.startLoop()
  }

  public componentWillUnmount() {
    this.stopLoop()
  }

  public startLoop = () => {
    // const isfastClick = Boolean(Math.random() > 0.015)
    // const timeout = isfastClick ? 30 : 500
    setTimeout(() => {
      this.theoreticalComponentAnimationFunction()
      this.frameId = window.requestAnimationFrame(this.startLoop)
    }, 30 + (Math.random() * 20))
  }

  public stopLoop = () => {
    window.cancelAnimationFrame(this.frameId)
  }

  public render() {
    return (
      <>
        <SyntaxHighlighter
          language='javascript'
          style={dark}
        >
        {codeString.substring(0, this.state.currentCount)}
        </SyntaxHighlighter>

        <style>{`
          pre {
            height: 340px;
            font-size: 1.3rem;
            font-weight: 500;
            background: rgba(0, 0, 0, 0.7) !important;
            border: 0px  !important;
          }
        `}</style>
      </>
    )
  }
}

export default HeaderCode
