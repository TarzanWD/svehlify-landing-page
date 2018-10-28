
import React from 'react'
import Typography from '@material-ui/core/Typography'
import GridContainer from '../core/Grid/GridContainer'
import GridItem from '../core/Grid/GridItem'

const textBlock = {
  maxWidth: '20rem',
  textAlign: 'center' as 'center',
  paddingBottom: '1rem'
}

export default () => (
  <div style={{ margin: '20px', display: 'flex', alignItems: 'center', flexFlow: 'column' }}>
    <Typography variant='h5' style={{ paddingBottom: '1rem' }}>
      Připraveni na produkci
    </Typography>
    <Typography variant='p' style={textBlock}>
      Mnohým technologiím dneška je lepší se vyhnout - nejsou dobře otestované,
      často některé časti nefungují, nejsou připravené na produkční chod aplikace
      anebo nemá smysl je použít. <br />
      Školíme technologie, které jsou dle nás přelomové, ale zároveň zralé k použití.
    </Typography>

    <Typography variant='h5' style={{ paddingBottom: '1rem' }}>
      Budou kurzy prospěšné i ve vaší firmě?
    </Typography>
    <Typography variant='p' style={textBlock}>
      Všechny technologie které učíme lze integrovat
      do již rozpracovaných systému. Nemusíte se tedy bát
      zpětné nekompatibility a nutného přepsání celého projektu.
    </Typography>
  </div>
)
