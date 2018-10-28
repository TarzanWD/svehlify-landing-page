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
import CoursesSection from '../Components/Courses/CoursesSection'
import SectionLogin from '../Components/Login/SectionLogin'
import TeamSection from '../Components/Team/TeamSection'
import AboutSection from '../Components/About/AboutSection'
import HeaderCode from '../Components/HeaderCode'
import ContainerDimensions from 'react-container-dimensions'

const mainPhotoSrc = 'https://s.cafebazaar.ir/1/upload/screenshot/'+
  'com.sadrooid15.Materialwallpapers5.jpg'

interface IProps extends WithStyles<typeof componentsStyles> {}

class Index extends React.Component<IProps, void> {
  public render() {
    const { classes } = this.props
    return (
      <div>
        <Header
          brand='Školení & Firemní konzulace'
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
                  <h3
                    className={`${classes.subtitle} ${classes.container}`}
                    style={{ padding: '20px', background: 'rgba(0, 0, 0, 0.4)' }}
                  >
                    Nejmodernější Webové technologie
                  </h3>
                </div>

              </GridItem>

              <GridItem xs={12} sm={12} md={8}>
                <HeaderCode />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <AboutSection />
          <TeamSection />
          <CoursesSection />
          <SectionLogin />
        </div>
        <Footer />
      </div>
    )
  }
}
export default withStyles(componentsStyles)(Index)
