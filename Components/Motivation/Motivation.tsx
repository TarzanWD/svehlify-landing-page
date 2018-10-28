
import React from 'react'
import Typography from '@material-ui/core/Typography'
import GridContainer from '../core/Grid/GridContainer'
import GridItem from '../core/Grid/GridItem'

export default () => (
  <GridContainer>
    <GridItem lg={6} md={6} sm={12} style={{ margin: '20px' }}>
      <Typography variant='h5'>
        Připraveni na produkci
      </Typography>
      <Typography variant='p'>
        Existuje mnoho technologií, kterým je dobré se vyhnout, nebo jsou 
        úžasné, ale nejsou ještě připravené na produkci.
        Technologie které školime využívají statisíce firem po celém světě.
      </Typography>
      <Typography variant='p' style={{ marginBottom: '20px' }}>
        Jako jedno z hlavních bych vybral firmy jako:
        Facebook, airbnb, github, apple a další...
      </Typography>
    </GridItem>
    <GridItem lg={6} md={6} sm={12} style={{ margin: '20px' }}>
      <Typography variant='h5'>
        Budou kurzy prospěšné i ve vaší firmě?
      </Typography>
      <Typography variant='p' style={{ marginBottom: '20px' }}>
        Všechny technologie které učíme lze integrovat
        do již rozpracovaných systému. Nemusíte se tedy bát
        zpětné nekompatibily a nutného přepsání celého projektu.
      </Typography>
    </GridItem>
  </GridContainer>
)
