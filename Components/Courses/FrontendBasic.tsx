import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Avatar from '@material-ui/core/Avatar'
import * as React from 'react'
import PointList from './PointList'

const modalImgSrc = 'static/img/courses/react-relay-gql.png'
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
      Základy moderních webových aplikací
    </Typography>
    <CardMedia
      image={'static/img/courses/imageFrontendBasic.png'}
      title='Contemplative Reptile'
      style={cardMediaStyle}
    />
    <br />
    <Typography style={{ fontSize: '1rem', padding: '1rem 5vw' }}>
      Kurz je určen pro všechny co chtějí začít s programováním webových aplikací.
      Zaměříme se na vývoj frontend single page aplikací,
      které dnes používají firmy jako Facebook, AirBnb, Spotify nebo Kiwi.
      Podíváme se společně na ty nejlepší a nejpoužívanější javascriptové technologie,
      frameworky a transpilery.
      Nakonec také uvidíte, jak integrovat vaši práci do již hotového projektu.
    </Typography>

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
        'Architektura modenrních SPA aplikací (BE vs FE)',
        'Představení moderních frameworků',
        'Nainstalování a vysvětlení zákládů k nodejs',
        'Představení nejpoužívanějších react buildů (CreateReactApp & next.js)',
        `Představení nejpoužívanějších react buildů (CreateReactApp & next.js)`,
        `Napíšeme si jednoduchou aplikaci na demonstraci nejosvěčenějších
        přístupů, best practise a stavových kontejnerů`,
        'Aplikaci napojíme na reálný backend',
        `Nasazení aplikace na internet`
      ]}
    />

    <Typography
      variant='h5'
      style={{
        marginLeft: '1rem',
        textAlign: 'center'
      }}
    >
      CSS stylování a design
    </Typography>
    <PointList
      dataList={[
        'Představíme si nejmoderněší přístup ke stylování: CSS in JS',
        'Pro zvýšení efektivity budeme pro design design naší aplikace používat Material.ui',
        `Aby jsme neztráceli čas designováním webu od nuly,
        budeme používat nejmodernější UI (uživatelské rozhraní) knihovnu material.UI`
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
        'Základní znalost programování',
        'Znát základy HTML/CSS',
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
