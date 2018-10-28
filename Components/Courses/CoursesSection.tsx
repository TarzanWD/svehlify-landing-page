import { createStyles, WithStyles } from '@material-ui/core'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
// import Modal from '@material-ui/core/Modal'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Modal from 'react-responsive-modal'
import { cardTitle, title } from '../assets/jss/material-kit-react'
import Card from '../core/Card/Card'
import Button from '../core/CustomButtons/Button'
import GridContainer from '../core/Grid/GridContainer'
import GridItem from '../core/Grid/GridItem'
import imagesStyle from '../core/Image/imagesStyles'
import CICDCourse from './CICDCourse'
import BackendBasic from './BackendCourse'
import FrontendAdvanced from './FrontendAdvanced'
import FrontendBasic from './FrontendBasic'

const imageFrontendBasic = 'static/img/courses/imageFrontendBasic.png'
const imageFrontendAdvanced = 'static/img/courses/imageFrontendAdvanced.png'
const imageBackendBasic = 'static/img/courses/imageBackendBasic.png'
const customCompany = 'static/img/courses/customCompany.png'
const CICD = 'static/img/courses/CICD.png'
const nodeBackend = 'static/img/courses/nodeBackend.png'
const awsImgSrc = 'static/img/courses/aws.png'

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
type ModalNames = 'FrontendBasic' | 'FrontendAdvanced' | 'BackendBasic' | 'CICDCourse'
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
                case 'CICDCourse':
                  return <CICDCourse />
                default:
                  return null
              }
            })()
          }
        </Modal>

        <div className={classes.aboutUs}>
          <Typography variant='h5'>
            Proč Svehlify?
          </Typography>
          <Typography variant='paragraph' style={{ marginBottom: '20px' }}>
            Jsme skupina lidí, kteri si v životě prošli práci na enterprise projektech a chtějí
            zachránit lidstvo a vzbouřit programový k tomu, ať se do starého enterprise
            kodu už nový nepřidává a věci se upravují a budují znova a čištěji
          </Typography>


          <Typography variant='h5'>
            Připraveni na produkci
          </Typography>
          <Typography variant='paragraph'>
            Existuje mnoho technologií, kterým je dobré se vyhnout, nebo jsou 
            úžasné, ale nejsou ještě připravené na produkci.
            Technologie které školime využívají statisíce firem po celém světě.
          </Typography>
          <Typography variant='paragraph' style={{ marginBottom: '20px' }}>
            Jako jedno z hlavních bych vybral firmy jako:
            Facebook, airbnb, github, apple a další...
          </Typography>

          <Typography variant='h5'>
            Budou kurzy prospěšné i ve vaší firmě?
          </Typography>
          <Typography variant='paragraph' style={{ marginBottom: '20px' }}>
            Všechny technologie které učíme lze integrovat
            do již rozpracovaných systému. Nemusíte se tedy bát
            zpětné nekompatibily a nutného přepsání celého projektu.
          </Typography>
        </div>

        <h2 className={classes.title}>Kurzy</h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
              <CardActionArea onClick={this.openModel('FrontendBasic')}>
                <CardMedia
                  className={classes.media}
                  image={imageFrontendBasic}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    React Frontend Ninja
                  </Typography>
                  <Typography component='p'>
                    Kurz je určen pro všechny co chtějí začít s programováním webových aplikací.
                    Zaměříme se na frontend single page aplikace, které dnes použíají firmy,
                    jako Facebook, AirBnb, Spotify nebo Kiwi...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ bottom: 0, position: 'absolute '}}>
                <Button color='primary' onClick={this.openModel('FrontendBasic')}>
                  Více informací
                </Button>
              </CardActions>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} lg={4}>

            <Card className={classes.card}>
              <CardActionArea onClick={this.openModel('FrontendAdvanced')}>
                <CardMedia
                  className={classes.media}
                  image={imageFrontendAdvanced}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    React GraphQL Senpai
                  </Typography>
                  <Typography component='p'>
                    Máte už zkušenosti s REST-API i reactem a přestává vás bavit
                    monotonní práce psaní nudných redux storů a chcete se zase cítit jako v době,
                    kdy jste spustili svůj první for cyklus...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ bottom: 0, position: 'absolute '}}>
                <Button color='primary' onClick={this.openModel('FrontendAdvanced')}>
                  Více informací
                </Button>
              </CardActions>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
              <CardActionArea onClick={this.openModel('BackendBasic')}>
                <CardMedia
                  className={classes.media}
                  image={nodeBackend}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Nodejs REST-API/GraphQL backend
                  </Typography>
                  <Typography component='p'>
                    Kurz je určen pro všechny, které už nebaví programovat v
                    technologiích, které byly vymyšleny za dob východního bloku.
                    Ukážeme si nejmodernější bleeding edge stack,
                    který vám ulehčí každodenní práci a udělá vás zase šťastným.
                    Během školení projdeme...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ bottom: 0, position: 'absolute '}}>
                <Button color='primary' onClick={this.openModel('BackendBasic')}>
                  Více informací
                </Button>
              </CardActions>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
              <CardActionArea onClick={this.openModel('CICDCourse')}>
                <CardMedia
                  className={classes.media}
                  image={awsImgSrc}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    AWS Deploy Master
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
              <CardActions style={{ bottom: 0, position: 'absolute '}}>
                <Button color='primary' onClick={this.openModel('CICDCourse')}>
                  Více informací
                </Button>
              </CardActions>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
              <CardActionArea onClick={this.openModel('BackendBasic')}>
                <CardMedia
                  className={classes.media}
                  image={customCompany}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Webapps školení
                  </Typography>
                  <Typography component='p'>
                    Školení na míru
                    Nabízíme školení upravené přesně podle
                    firemních business požadavků. Na téma konzultacím a
                    školení se lze blíže domluvit a uzpůsobit.
                    Délka a cena školení se odvíjí podle domluvy.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ bottom: 0, position: 'absolute '}}>
                <Button color='primary' onClick={this.openModel('BackendBasic')}>
                  Více informací
                </Button>
              </CardActions>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
              <CardActionArea onClick={this.openModel('CICDCourse')}>
                <CardMedia
                  className={classes.media}
                  image={CICD}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    CI/CD Sempai
                  </Typography>
                  <Typography component='p'>
                    Kurz je určen pro ty z vás kdo chtějí nahlednout za oponu
                    těchto dvou v dnešní době buzzwordu. A chtěji testovat a nasazovat
                    aplikace pouhým kliknutím. Dozvíte se zde něco málo o
                    různých způsobech testování.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ bottom: 0, position: 'absolute '}}>
                <Button color='primary' onClick={this.openModel('CICDCourse')}>
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
