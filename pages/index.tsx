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
import HeaderCode from '../Components/HeaderCode'

const mainPhotoSrc = 'https://s.cafebazaar.ir/1/upload/screenshot/com.sadrooid15.Materialwallpapers5.jpg'

// '/static/img/bg2.jpg'
interface IProps extends WithStyles<typeof componentsStyles> {}


class Index extends React.Component<IProps, void> {
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
            height: 200,
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
                <HeaderCode />
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
      </div>
    )
  }
}

export default withStyles(componentsStyles)(Index)
