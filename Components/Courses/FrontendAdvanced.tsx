import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'
import PointList from './PointList'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

const cardMediaStyle = {
  padding: '7rem',
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
      REACT GRAPHQL NINJA
    </Typography>
    <CardMedia
      image={'static/img/courses/imageFrontendAdvanced.png'}
      title='Contemplative Reptile'
      style={cardMediaStyle}
    />
    <br />
    <Typography variant='h4' id='modal-title'>
      React GraphQL Senpai
    </Typography>
  
    <Typography style={{ fontSize: '1rem', padding: '1rem 5vw' }}>
      Máte už zkušenosti s REST-API i reactem a přestává vás bavit
      monotonní práce psaní nudných redux storů a chcete se zase cítit jako v době,
      kdy jste spustili svůj první for cyklus, nebo dali do produkce první aplikaci?
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
        'Představení moderních SPA aplikací a frameworků (zaměření na GraphQL)',
        'Ukážeme si základy GraphQL',
        'Porovnáme typovou analýzu kódu pomocí nástrojů: typescipt / flow',
        'Ukážeme si best practise pro odstranění runtime chyb (nebudou to testy, přísahám)',
        `Představíme si základní stavové kontejnery graphql (apollo a relay)`,
        `Napíšeme si jednoduchou aplikaci na ukázání graphql best practise`,
        'ukázání ušetření trafficu a cachování pomocí graphQl',
        `Aplikaci napojíme na reálný backend`,
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
        'Základní znalost javascriptu',
        'Základní znalost react.js',
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
