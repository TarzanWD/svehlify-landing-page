import { WithStyles } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import React from 'react'
import componentsStyles from './assets/jss/globalComponents/componentsStyles'
import Footer from './component/Footer/Footer'
import GridContainer from './component/Grid/GridContainer'
import GridItem from './component/Grid/GridItem'
import Header from './component/Header/Header'
import HeaderLinks from './component/Header/HeaderLinks'
import Parallax from './component/Parallax/Parallax'
// sections
import CoursesSection from './Sections/Courses'
import SectionLogin from './Sections/SectionLogin'
import TeamSection from './Sections/TeamSection'

const mainPhotoSrc = '/static/img/bg2.jpg'
// 'https://cdn.allwallpaper.in/wallpapers/1920x1200/14179/computers-money-programming-code-black-background-1920x1200-wallpaper.jpg'
interface IProps extends WithStyles<typeof componentsStyles>  {}

class Components extends React.Component<IProps> {
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
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Svehlify</h1>
                  <h3 className={classes.subtitle}>
                    Školení moderních webových technologií
                  </h3>
                </div>
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

export default withStyles(componentsStyles)(Components)
