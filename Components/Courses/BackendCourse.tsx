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
    <Typography variant='h4' id='modal-title'> style={{ marginBottom: '20px' }}
      Kdo jsme?
    </Typography>
    <Typography style={{ marginBottom: '20px' }}>
      Jsme skupina lidí, kteri si v životě prošli práci na enterprise projektech a chtějí
      zachránit lidstvo a vzbouřit programový k tomu, ať se do starého enterprise
      kodu už nový nepřidává a věci se upravují a budují znova a čištěji
    </Typography>


    <Typography style={{ marginBottom: '20px' }}>
      Technologie které skolime využívají statisíce firem...
      Například Facebook airbnb github apple a milion dalších firema
      pomáhají jim k ladnemu chodu.
    </Typography>

    <Typography style={{ marginBottom: '20px' }}>
      Všechny technologie které učíme lze integrovat
      do vašeho již rozděleného systému a nemusíte se
      bát zpětné nekompatibily
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
