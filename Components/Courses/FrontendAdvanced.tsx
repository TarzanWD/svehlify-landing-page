import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'
import PointList from './PointList'
import Button from '@material-ui/core/Button'

const cardMediaStyle = {
  padding: '70px 0',
  textAlign: 'center' as 'center',
}
interface IProps {
  classes?: any
}
export default ({ classes }: IProps) => (
  <div>
    <CardMedia
      image={'static/img/courses/imageFrontendAdvanced.png'}
      title='Contemplative Reptile'
      style={cardMediaStyle}
    />
    <br />
    <Typography variant='h4' id='modal-title'>
      React GraphQL Senpai
    </Typography>
    <Typography style={{ marginBottom: '20px' }}>
      Máte už zkušenosti s REST-API i reactem a přestává vás bavit
      monotonní práce psaní nudných redux storů a chcete se zase cítit jako v době,
      kdy jste spustili svůj první for cyklus, nebo dali do produkce první aplikaci?
    </Typography>

    <Typography variant='h5'>Kurz obnáší</Typography>
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

    <Typography  variant='h5'>CSS stylování a design</Typography>
    <PointList
      dataList={[
        'Představíme si nejmoderněší přístup ke stylování: CSS in JS',
        'Pro zvýšení efektivity budeme pro design design naší aplikace používat Material.ui',
        `Aby jsme neztráceli čas designováním webu od nuly,
        budeme používat nejmodernější UI (uživatelské rozhraní) knihovnu material.UI`
      ]}
    />


    <Typography variant='h5'>Co budete potřebovat?</Typography>
    <PointList
      dataList={[
        'Základní znalost javascriptu',
        'Základní znalost react.js',
        'Znát základy HTML/CSS',
        `Vlastní notebook`
      ]}
    />
    <Button variant='contained' color='primary'>
      Objednat
    </Button>
    <Button variant='contained' color='action' >
      Zavřít
    </Button>


  </div>
)
