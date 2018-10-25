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
import SectionLogin from './Sections/SectionLogin'
import TeamSection from './Sections/TeamSection'

interface IProps extends WithStyles<typeof componentsStyles>  {}

class Components extends React.Component<IProps> {
  public render() {
    const { classes } = this.props
    return (
      <div>
        <Header
          brand='Material Kit React'
          rightLinks={<HeaderLinks />}
          fixed
          color='transparent'
          changeColorOnScroll={{
            height: 400,
            color: 'white',
          }}
        />
        <Parallax image={'/static/img/bg4.jpg'}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Material Kit React.</h1>
                  <h3 className={classes.subtitle}>
                    A Badass Material-UI Kit based on Material Design.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <TeamSection />
          <SectionLogin />
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(componentsStyles)(Components)
