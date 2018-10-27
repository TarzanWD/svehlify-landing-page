import { createStyles, WithStyles } from '@material-ui/core'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
// import Modal from '@material-ui/core/Modal'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { cardTitle, title } from '../assets/jss/material-kit-react'
import Card from '../core/Card/Card'
import Button from '../core/CustomButtons/Button'
import GridContainer from '../core/Grid/GridContainer'
import GridItem from '../core/Grid/GridItem'
import imagesStyle from '../core/Image/imagesStyles'
import Modal from 'react-responsive-modal'
import FrontendBasic from './FrontendBasic'
import FrontendAdvanced from './FrontendAdvanced'
import BackendBasic from './BackendBasic'
import BackendAdvanced from './BackendAdvanced'

const imageFrontendBasic = 'static/img/courses/imageFrontendBasic.png'
const imageFrontendAdvanced = 'static/img/courses/imageFrontendAdvanced.png'
const imageBackendBasic = 'static/img/courses/imageBackendBasic.png'
const imageBackendAdvanced = 'static/img/courses/imageBackendAdvanced.png'

const coursesStyle = (theme) => createStyles({
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
  card: {
    maxWidth: '90%',
    margin: '0 auto',
    height: '400px',
    marginBottom: '20px'
  },
  media: {
    height: 140,
    overflow: 'hidden'
  },
  aboutUs: {
    textAlign: 'left',
    margin: '20px 40px 20px'
  },
  topOfThePage: {
    zIndex: 10000
  }
})


interface IProps extends WithStyles<typeof coursesStyle> {}
type ModalNames = 'FrontendBasic' | 'FrontendAdvanced' | 'BackendBasic' | 'BackendAdvanced'
interface IState {
  openModal: null | ModalNames
}

class CoursesSection extends React.Component<IProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      openModal: null
    }
  }
  public openModel = (modalName: ModalNames) => () => {
    this.setState({ openModal: modalName })
  }
  public handleClose = () => {
    this.setState({ openModal: null })
  }

  public render() {
    const { classes } = this.props

    return (
      <div className={classes.section} id='skoleni'>
        <Modal
          classNames={{ overlay: classes.topOfThePage }}
          open={this.state.openModal !== null}
          onClose={this.handleClose}
          center
        >
          {
            (() => {
              switch(this.state.openModal) {
                case 'FrontendBasic':
                  return <FrontendBasic />
                case 'FrontendAdvanced':
                  return <FrontendAdvanced />
                case 'BackendBasic':
                  return <BackendBasic />
                case 'BackendAdvanced':
                  return <BackendAdvanced />
                default: 
                  return null
              }
            })()
          }
        </Modal>

        <div className={classes.aboutUs}>
          <h1 className={classes.title}>Našim cílem je omladit internet</h1>
          <h2 className={classes.title}>A vracíme zábavu v programování</h2>
          <h3 className={classes.title}>Skupina lidí, co dělá věci</h3>
          <Typography>
            Supplemental actions within the card are explicitly
            called out using icons, text, and UI controls,
            typically placed at the bottom of the card.
            Here's an example of a media control card.
            Supplemental actions within the card are explicitly
            called out using icons, text, and UI controls,
            typically placed at the bottom of the card.
            Here's an example of a media control card.
          </Typography>
          <h3 className={classes.title}>Další věci</h3>
          <Typography>
            Začali jsme teprve 2018 ale jsme hustí
          </Typography>
        </div>

        <h2 className={classes.title}>Kurzy</h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={imageFrontendBasic}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    React frontend Basic
                  </Typography>
                  <Typography component='p'>
                    Kurz je určen pro všechny, které už nebaví programovat v
                    technologíích, které byly vymyšleny za dob východního bloku.
                    Ukážeme si nejmodernější bleeding edge stack,
                    který vám ulehčí každodenní práci a udělá vás zase šťastným.
                    Během školení projdeme
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary' onClick={this.openModel('FrontendBasic')}>
                  Více informací
                </Button>
              </CardActions>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} lg={4}>

            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={imageFrontendAdvanced}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    FRONTEND GraphQL ULTRA frontend Ninja
                  </Typography>
                  <Typography component='p'>
                    Kurz je určen pro všechny, které už nebaví programovat v
                    technologiích, které byly vymyšleny za dob východního bloku.
                    Ukážeme si nejmodernější bleeding edge stack,
                    který vám ulehčí každodenní práci a udělá vás zase šťastným.
                    Během školení projdeme
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary' onClick={this.openModel('FrontendAdvanced')}>
                  Více informací
                </Button>
              </CardActions>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={imageBackendBasic}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    První krůčky s nodejs & GraphQL na serveru
                  </Typography>
                  <Typography component='p'>
                    Kurz je určen pro všechny, které už nebaví programovat v
                    technologiích, které byly vymyšleny za dob východního bloku.
                    Ukážeme si nejmodernější bleeding edge stack,
                    který vám ulehčí každodenní práci a udělá vás zase šťastným.
                    Během školení projdeme
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary' onClick={this.openModel('BackendBasic')}>
                  Více informací
                </Button>
              </CardActions>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={imageBackendAdvanced}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Přeorientujte své nudné REST-API na GraphQL
                  </Typography>
                  <Typography component='p'>
                    Kurz je určen pro všechny, které už nebaví programovat
                    v technologiích, které byly vymyšleny za dob
                    východního bloku. Ukážeme si nejmodernější
                    bleeding edge stack, který vám ulehčí
                    každodenní práci a udělá vás zase šťastným.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary' onClick={this.openModel('BackendAdvanced')}>
                  Více informací
                </Button>
              </CardActions>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(coursesStyle)(CoursesSection)
