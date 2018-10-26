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

import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/styles/hljs'

const codeString = `
import {
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql'

enum OrderByKeyword {
  ASC = 'ASC',
  DESC = 'DESC',
}
const GraphQLAscDesc = new GraphQLEnumType({
  name: 'OrderByKeyword',
  values: {
    [OrderByKeyword.ASC]: {
      value: OrderByKeyword.ASC,
    },
    [OrderByKeyword.DESC]: {
      value: OrderByKeyword.DESC,
    },
  },
})


export default (typeName, possibleOrderByKeys) => {
  const GraphQlOrderByEnum = new GraphQLEnumType({
    name: \`\$\{typeName\}PossibleKeys\`,
    values: possibleOrderByKeys.reduce((pre, name) => {
      pre[name] = {
        value: name,
      }
      return pre
    }, {})
  })

  const GraphQLOrderByType = new GraphQLInputObjectType({
    name: typeName,
    description: '',
    fields: () => ({
      order: {
        type: new GraphQLNonNull(GraphQLAscDesc),
        description: '',
      },
      key: {
        type: new GraphQLNonNull(GraphQlOrderByEnum),
        description: '',
      },
    })
  })

  return new GraphQLList(GraphQLOrderByType)
}
`

const mainPhotoSrc = 'https://s.cafebazaar.ir/1/upload/screenshot/com.sadrooid15.Materialwallpapers5.jpg'

// '/static/img/bg2.jpg'
interface IProps extends WithStyles<typeof componentsStyles> {}
interface IState {
  currentCount: number
  intervalId?: NodeJS.Timeout
}

class Index extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
      intervalId: null,
      currentCount: 20
    }
  }

  public componentDidMount() {
    const intervalId = setInterval(this.timer, 100)
    // store intervalId in the state so it can be accessed later:
    this.setState({ intervalId })
  }

  public componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  public timer = () => {
    this.setState({ currentCount: this.state.currentCount + 1 })
  }


  public render() {
    const { classes } = this.props
    return (
      <div>
        <Header
          brand='Javascript školení na míru'
          rightLinks={<HeaderLinks />}
          fixed
          color='transparent'
          changeColorOnScroll={{
            height: 150,
            color: 'white',
          }}
        />
        <Parallax image={mainPhotoSrc}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Svehlify</h1>
                  <h3 className={classes.subtitle}>
                    Školení moderních webových technologií
                  </h3>
                  <h4 className={classes.subtitle}>
                    Našim cílem je omladit internet
                  </h4>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <SyntaxHighlighter
                  language='javascript'
                  style={docco}
                >{
                  codeString.substring(0, this.state.currentCount)
                }
                </SyntaxHighlighter>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <CoursesSection />
          <TeamSection />
          <SectionLogin />
        </div>
        <Footer />
        <style>{`
          pre {
            height: 250px;
            font-size: 1.5rem;
            font-weight: 500;
            background: rgba(255, 255, 255, 0.7) !important;
          }
        `}</style>
      </div>
    )
  }
}

export default withStyles(componentsStyles)(Index)
