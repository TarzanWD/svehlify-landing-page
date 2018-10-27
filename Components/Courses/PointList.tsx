import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'
import * as React from 'react'

const PointList = ({ dataList }: {dataList: string[] }) => (
  <List dense style={{ marginBottom: '20px' }}>
  {
    dataList.map((text, index) => (
      <ListItem key={index}>
        <ListItemAvatar>
          <ScatterPlotIcon color='primary' style={{ height: '20px' }}/>
        </ListItemAvatar>
        <ListItemText
          primary={text}
          secondary={null}
        />
      </ListItem>
    ))
  }
  </List>
)

export default PointList
