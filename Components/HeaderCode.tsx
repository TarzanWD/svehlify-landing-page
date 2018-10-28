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
function createThunkMiddleware(extraArg) {
  return ({ dispatch, getState }) => next => ac => {
    if (typeof ac === 'function') {
      return action(dispatch, getState, extraArg)
    }

    return next(ac);
  }
}

const thunk = createThunkMiddleware()
thunk.withExtraArgument = createThunkMiddleware

export default thunk
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
    this.setState({ currentCount: newCount })
  }

  public componentDidMount() {
    this.startLoop()
  }

  public componentWillUnmount() {
    this.stopLoop()
  }

  public startLoop = () => {
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
        <div style={{ maxHeight: '240px' }}>
          <SyntaxHighlighter
            language='javascript'
            style={dark}
          >
          {codeString.substring(0, this.state.currentCount)}
          </SyntaxHighlighter>
        </div>
        <style>{`
          pre {
            height: 240px;
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
