import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { WithStyles } from '@material-ui/core'
// @material-ui/icons
// core components
import Header from './component/Header/Header'

import Footer from './component/Footer/Footer.jsx'
/*
import Button from "./component/CustomButtons/Button.jsx";
*/
import GridContainer from './component/Grid/GridContainer.jsx'
import GridItem from './component/Grid/GridItem.jsx'
import Parallax from './component/Parallax/Parallax'
// sections for this page

import HeaderLinks from './component/Header/HeaderLinks'

/*
import SectionBasics from "./Sections/SectionBasics.jsx";
import SectionNavbars from "./Sections/SectionNavbars.jsx";
import SectionTabs from "./Sections/SectionTabs.jsx";
import SectionPills from "./Sections/SectionPills.jsx";
import SectionNotifications from "./Sections/SectionNotifications.jsx";
import SectionTypography from "./Sections/SectionTypography.jsx";
import SectionJavascript from "./Sections/SectionJavascript.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx";
import SectionLogin from "./Sections/SectionLogin.jsx";
import SectionExamples from "./Sections/SectionExamples.jsx";
import SectionDownload from "./Sections/SectionDownload.jsx";
*/
// import { container } from "assets/jss/material-kit-react.jsx";

import componentsStyles from './assets/jss/material-kit-react/views/components'



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
        {Array(40).fill(0).map((i, j) => <h3 key={j}> Ahoj</h3>)}

        {/*
          <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload />
          */}
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(componentsStyles)(Components)
