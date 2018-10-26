import { WithStyles, createStyles } from '@material-ui/core'
import React from 'react'
import Card from '../component/Card/Card'
import Button from '../component/CustomButtons/Button'
import GridContainer from '../component/Grid/GridContainer'
import GridItem from '../component/Grid/GridItem'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { cardTitle, title } from '../assets/jss/material-kit-react'
import imagesStyle from '../assets/jss/globalComponents/imagesStyles'
import withStyles from '@material-ui/core/styles/withStyles'
import Modal from '@material-ui/core/Modal'

const reactRelayGraphQL = 'static/img/courses/react-relay-gql.png'
const nodejsSrc = 'static/img/courses/nodejs.png'
const restToGql = 'static/img/courses/restToGql.png'
const reactReduxGraphql = 'static/img/courses/react-redux-graphql.png'

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
  paper: {
    position: 'absolute',
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
})


interface IProps extends WithStyles<typeof coursesStyle> {}
interface IState {
  openModal: boolean
}

class CoursesSection extends React.Component<IProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      openModal: false
    }
  }

  public openModel = (modalName: string) => () => {
    this.setState({ openModal: true })
  }
  public handleClose = () => {
    this.setState({ openModal: false })
  }

  public render() {
    const { classes } = this.props

    return (
      <div className={classes.section} id='skoleni'>

        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={this.state.openModal}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <CardMedia
              className={classes.media}
              image={reactRelayGraphQL}
              title='Contemplative Reptile'
            />
            <br />
            <Typography variant='h4' id='modal-title'>
              GraphQL ULTRA frontend Ninja
            </Typography>
            <Typography>
              Máte už zkušenosti s REST-API a reactem a nebaví vás pořád psát
              nudné redux story a chcete se ponořit do nového pohledu na svět
              <ul>
                <li>Představení moderních SPA aplikací</li>
                <li>představíme si základy GraphQL</li>
                <li>Porovnáme typovou analýzu kódu pomocí: typescipt / flow / javascript</li>
                <li>Představíme si základní stavové kontejnery graphql (apollo a relay)</li>
                <li>porovnáme nejpoužívanější knihovny na zpracování a cachování graphql</li>
                <li>Napíšeme si jednoduchou aplikaci na ukázíní graphql best practise</li>
                <li>představení code splittingu pro vělké js aplikace</li>
                <li>ukázání ušetření trafficu a cachování pomocí graphQl</li>
                <li>Vytvoření automatické statické analýzy pomocí API modelu</li>
                <li>celou aplikaci pojedeme se 100% optimistic UI,
                  aby nebyla nejmenší prodelav mezi serverem a klientem</li>
                <li>Představíme si přístup ke stylování: CSS in JS https://material-ui.com/demos/bottom-navigation/</li>
                <li>Pro zvýšení efektivity budeme pro design
                  design naší aplikace používat Material.ui</li>
                <li>Nasazení a rozjetí naší aplikace na Heroku </li>
              </ul>

              Pokud děláte advanced webové stránky pro náročené
              klienty a chcete používat nejmodernější technologie 

            </Typography>
          </div>
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
                  image={reactRelayGraphQL}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    React frontend
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
                <Button size='small' color='primary' onClick={this.openModel('a')}>
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
                  image={nodejsSrc}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    GraphQL ULTRA frontend Ninja
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
                <Button size='small' color='primary' onClick={this.openModel('a')}>
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
                  image={restToGql}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    První krůčky s nodejs & GraphQL na serveru
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
                <Button size='small' color='primary' onClick={this.openModel('a')}>
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
                  image={reactReduxGraphql}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Přeorientujte své nudné REST-API na GraphQL
                  </Typography>
                  <Typography component='p'>
                    Kurz je určen pro všechny, které už nebaví programovat
                    v technologíích, které byly vymyšleny za dob
                    východního bloku. Ukážeme si nejmodernější
                    bleeding edge stack, který vám ulehčí
                    každodenní práci a udělá vás zase šťastným.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary' onClick={this.openModel('a')}>
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
