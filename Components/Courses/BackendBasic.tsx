import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'

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
      image={'static/img/courses/imageBackendBasic.png'}
      style={cardMediaStyle}
      title='Contemplative Reptile'
    />
    <br />
    <Typography variant='h4' id='modal-title'>
      Backend Basic
    </Typography>
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

  </div>
)
