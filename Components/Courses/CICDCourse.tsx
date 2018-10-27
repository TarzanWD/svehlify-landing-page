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
      image={'static/img/courses/CICD.png'}
      title='Contemplative Reptile'
      style={cardMediaStyle}
    />
    <br />
    <Typography variant='h4' id='modal-title'>
      CI & CD Senpai
    </Typography>
    <br />
    <Typography variant='h4' id='modal-title'>
      Základy moderních webových aplikací
    </Typography>
    <Typography style={{ marginBottom: '20px' }}>
      Kurz je určen pro ty z vás kdo chtějí nahlednout za oponu těchto dvou v dnešní
      době buzzwordu. A chtěji testovat a nasazovat aplikace pouhým kliknutím. Dozvíte
      se zde něco málo o různých způsobech testování. Nastavíme si od nuly
      automatické testy jak pro kód samotný tak i pro jeho kvalitu.
      V druhé části se zaměříme na CD, vytvoříme si docker container pro
      náš backend a zkusíme si způsoby nasazení jak backendu tak frontendu.
    </Typography>

    <Typography variant='h5'>Kurz obnáší</Typography>
    <PointList
      dataList={[
        `Představení testovacích method js projektů`,
        `Schopnost nastavení automatického testování pomocí nástrojů
          jako je GitLab-CI, Circle-CI, Bitbucket pipelines, nebo Jenkins
          (Pro jednoduchost se v kurzu zaměříme pouze na vámi zvolenou službu.)`,
        `Základy Dockeru`,
        `Odladěné produkční a testovací containery pro vaše aplikace`,
        `Příprava a nasazení na vlastní infrastrukturu / Digital Ocean`,
        `Horizontal scaling a load balacing`,
        `Aplikaci napojíme na reálný backend`,
        `Nasazení aplikace na internet`,
      ]}
    />



    <Typography variant='h5'>Co budete potřebovat?</Typography>
    <PointList
      dataList={[
        `Základní znalosti práce s Linuxovým prostředí 
          Popřípadě se jde domluvit individuálně)`,
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
