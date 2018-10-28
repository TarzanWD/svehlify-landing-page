import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'
import PointList from './PointList'
import Button from '@material-ui/core/Button'

const cardMediaStyle = {
  padding: '70px 0',
  textAlign: 'center',
}
interface IProps {
  classes?: any
}
export default ({ classes }: IProps) => (
  <div>
    <CardMedia
      image={'static/img/courses/nodeBackend.png'}
      style={cardMediaStyle}
      title='Contemplative Reptile'
    />
    <br />
    <Typography variant='h4' id='modal-title'>
      Nodejs REST-API/GraphQL backend
    </Typography>
    <br />
    <Typography style={{ marginBottom: '20px' }}>
      Kurz je určen pro všechny, které už nebaví programovat v technologíích,
      které byly vymyšleny za dob východního bloku.
      Ukážeme si nejmodernější stable & bleeding edge technologie,
      které vám ulehčí každodenní práci a udělá vás zase šťastnými.
    </Typography>

    <Typography variant='h5'>Kurz obnáší</Typography>
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



    <Typography variant='h5'>Co budete potřebovat?</Typography>
    <PointList
      dataList={[
        `Elementární znalost programování`,
        `Vlastní notebook`,
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
