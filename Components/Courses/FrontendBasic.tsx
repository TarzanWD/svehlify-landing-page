import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'
import PointList from './PointList'

const modalImgSrc = 'static/img/courses/react-relay-gql.png'
const cardMediaStyle = {
  padding: '70px 0',
  textAlign: 'center',
}
interface IProps {ą
  classes?: any
}
export default ({ classes }: IProps) => (
  <div>
    <CardMedia
      image={'static/img/courses/imageFrontendBasic.png'}
      title='Contemplative Reptile'
      style={cardMediaStyle}
    />
    <br />
    <Typography variant='h4' id='modal-title'>
      Základy moderních webových aplikací
    </Typography>
    <Typography style={{ marginBottom: '20px' }}>
      Kurz je určen pro všechny co chtějí začít s programováním webových aplikací.
      Zaměříme se na frontend single page aplikace, které dnes použíají firmy,
      jako Facebook, airBnb, spotify nebo kiwi.
      Uděláme průřez nejlepšími a nejpoužívanějšími javascriptovými technologiemi,
      frameworky a transpilery.
      Uvidíme, jak integrovat naši práci do již hotového projektu
    </Typography>

    <Typography variant='h5'>Kurz obnáší</Typography>
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
        'Základní znalost programování',
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
