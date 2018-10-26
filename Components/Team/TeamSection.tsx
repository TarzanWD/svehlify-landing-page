import { WithStyles, createStyles } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import React from 'react'
import Card from '../core/Card/Card'
import CardBody from '../core/Card/CardBody'
import CardFooter from '../core/Card/CardFooter'
import Button from '../core/CustomButtons/Button'
import GridContainer from '../core/Grid/GridContainer'
import GridItem from '../core/Grid/GridItem'
import { cardTitle, title } from '../assets/jss/material-kit-react'
import imagesStyle from '../core/Image/imagesStyles'

const teamStyle = () => createStyles({
  section: {
    padding: '70px 0',
    textAlign: 'center',
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardTitle,
  smallTitle: {
    color: '#6c757d',
  },
  description: {
    color: '#999',
  },
  justifyCenter: {
    justifyContent: 'center !important',
  },
  socials: {
    marginTop: '0',
    width: '100%',
    transform: 'none',
    left: '0',
    top: '0',
    height: '100%',
    lineHeight: '41px',
    fontSize: '20px',
    color: '#999',
  },
  margin5: {
    margin: '5px',
  },
})

const team1 = 'static/img/faces/1.jpg' // avatar.jpg'
const team2 = 'static/img/faces/2.jpg' // christian.jpg'
const team3 = 'static/img/faces/3.jpg' // kendall.jpg'

interface IProps extends WithStyles<typeof teamStyle> {}

const TeamSection = (props: IProps) => {
  const { classes } = props
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  )
  return (
    <div className={classes.section} id='lide'>
      <h2 className={classes.title}>Náš tým</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card plain>
              <GridItem xs={12} sm={6} md={6} className={classes.itemGrid}>
                <img src={team1} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Kuba Švehla
                <br />
                <small className={classes.smallTitle}>Školení backend</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Od svých 15let jsem se začal zajímat o svět programování.
                  Jako každý správný Frontendista jsem začal s 350 stránkovou
                  knížkou jQuery a async echování HTML v PHP šablonách.<br />
                  Postupem času jsem přešel na nodejs u které jsem zůstal už více
                  jak 5 let a tím začala dlouhá láska mezi mnou a Javascriptem.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-twitter'} />
                </Button>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-instagram'} />
                </Button>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-facebook'} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card plain>
              <GridItem xs={12} sm={6} md={6} className={classes.itemGrid}>
                <img src={team2} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Kuba Švehla
                <br />
                <small className={classes.smallTitle}>Školení frontend</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Od svých 15let jsem se začal zajímat o svět programování.
                  Jako každý správný Frontendista jsem začal s 350 stránkovou
                  knížkou jQuery a async echování HTML v PHP šablonách.<br />
                  Postupem času jsem přešel na nodejs u které jsem zůstal už více
                  jak 5 let a tím začala dlouhá láska mezi mnou a Javascriptem.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-twitter'} />
                </Button>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-linkedin'} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card plain>
              <GridItem xs={12} sm={6} md={6} className={classes.itemGrid}>
                <img src={team3} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Kuba Švehla
                <br />
                <small className={classes.smallTitle}>Kodér a občasný grafik</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Od svých 15let jsem se začal zajímat o svět programování.
                  Jako každý správný Frontendista jsem začal s 350 stránkovou
                  knížkou jQuery a async echování HTML v PHP šablonách.<br />
                  Postupem času jsem přešel na nodejs u které jsem zůstal už více
                  jak 5 let a tím začala dlouhá láska mezi mnou a Javascriptem.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-twitter'} />
                </Button>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-instagram'} />
                </Button>
                <Button
                  justIcon
                  color='transparent'
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-facebook'} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}

export default withStyles(teamStyle)(TeamSection)
