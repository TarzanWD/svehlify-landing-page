import { WithStyles } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import React from 'react'
import teamStyle from '../component/Team/teamStyle'
import Card from '../component/Card/Card'
import CardBody from '../component/Card/CardBody'
import CardFooter from '../component/Card/CardFooter'
import Button from '../component/CustomButtons/Button'
import GridContainer from '../component/Grid/GridContainer'
import GridItem from '../component/Grid/GridItem'

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
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Šve Hlakuba
                <br />
                <small className={classes.smallTitle}>Project lead manager</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members.
                  You can give more details about what they do. Feel free to
                  add some <a href='#pablo'>links</a> for people to be able to
                  follow them outside the site.
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
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Kuba Svehla
                <br />
                <small className={classes.smallTitle}>CEO</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members.
                  You can give more details about what they do. Feel free to
                  add some <a href='#pablo'>links</a> for people to be able to
                  follow them outside the site.
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
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt='...' className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Švehl Ajakub
                <br />
                <small className={classes.smallTitle}>CTO</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members.
                  You can give more details about what they do. Feel free to
                  add some <a href='#pablo'>links</a> for people to be able to
                  follow them outside the site.
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
