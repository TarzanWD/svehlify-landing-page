import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'
import PointList from './PointList'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

const cardMediaStyle = {
  padding: '5rem 0',
  textAlign: 'center' as 'center',
}
interface IProps {
  classes?: any
}
export default ({ classes }: IProps) => (
  <div>
    <Typography
      style={{
        marginBottom: '1rem',
        textTransform: 'uppercase',
        fontSize: '0.9rem'
      }}
    >
      Node backend rest-api/GraphQL Backend
    </Typography>
    <CardMedia
      image={'static/img/courses/nodeBackend.png'}
      title='Contemplative Reptile'
      style={cardMediaStyle}
    />
    <br />
  
    <Typography variant='h4' id='modal-title'>
      Nodejs REST-API/GraphQL backend
    </Typography>
    <Typography style={{ fontSize: '1rem', padding: '1rem 5vw' }}>
      Kurz je určen pro všechny, které už nebaví programovat v technologíích,
      které byly vymyšleny za dob východního bloku.
      Ukážeme si nejmodernější stable & bleeding edge technologie,
      které vám ulehčí každodenní práci a udělá vás zase šťastnými.
    <br />

    <Grid container spacing={24}>
      <Hidden xsDown>
        <Grid
          item
          md={5}
          sm={5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar
            alt='lecturer'
            src='../../../static/img/ourTeam/svehla.jpg'
            style={{ width: '25vh', height: '25vh', margin: '10vh 0' }}
          />
        </Grid>
      </Hidden>
      <Grid
        item
        md={6}
        sm={5}
        xs={12}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          margin: '1.5rem 0'
        }}
      >
        Školící
        <Typography variant='h5' style={{ marginBottom: '0.5rem' }}>
          Švehl Jakub
        </Typography>
        <Typography>
          Za poslední roky jsem prošel mnoho projektů od server render jade šablon v nodejs,
          až k relay graphql stacku podobnému tomu, který používá a vývíjí například facebook.com
        </Typography>
      </Grid>
    </Grid>

    <Typography
      variant='h5'
      style={{
        marginLeft: '1rem',
        textAlign: 'center'
      }}
    >
      Kurz obnáší
    </Typography>
    <PointList
      dataList={[
        'Objevení ekosystému pro nodejs',
        'Architektura nodejs backend aplikací',
        'Vytvoříme jednoduchou CRUD (Create/Read/Update/Delete)' +
        'REST-API aplikaci pomocí express.js',
        'Představení graphQL',
        'Ukážeme si, proč GraphQL je vítěz na poli dnešních webových API',
        'Napišeme si vlastní GraphQL server',
        'Implementujeme typescript',
        'Ukázka nejmodernějších nástrojů pro ulehčení každodenního fárání na projektech',
        'Zaměříme se na GraphQL best practise v nodeJS',
        'Ukážeme si sdílení a psaní custom validací cross projekty',
        'Propojení našeho projektu s databází',
        'Integrace API třetích stran',
        'Autentizace a Autorizace pomocí JWT',
        'testování API pomocí JEST snapshotů',
      ]}
    />

    <Typography
      variant='h5'
      style={{
        marginLeft: '1rem',
        textAlign: 'center'
      }}
    >
      Co budete potřebovat?
    </Typography>
    <PointList
      dataList={[
        `Elementární znalost programování`,
        `Vlastní notebook`
      ]}
    />
    <Button variant='contained' color='primary' style={{ marginRight: '1rem' }}>
      Objednat
    </Button>
    <Button variant='contained'>
      Zavřít
    </Button>
  </div>
)
