import { WithStyles } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import React from 'react'
import componentsStyles from '../Components/assets/jss/globalComponents/componentsStyles'
import Footer from '../Components/core/Footer/Footer'
import GridContainer from '../Components/core/Grid/GridContainer'
import GridItem from '../Components/core/Grid/GridItem'
import Header from '../Components/core/Header/Header'
import HeaderLinks from '../Components/core/Header/HeaderLinks'
import Parallax from '../Components/core/Parallax/Parallax'
// sections
import CoursesSection from '../Components/Courses/CoursesSection'
import SectionLogin from '../Components/Login/SectionLogin'
import TeamSection from '../Components/Team/TeamSection'
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
  intervalId: NodeJS.Timeout
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
