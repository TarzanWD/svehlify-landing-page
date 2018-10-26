/*eslint-disable*/
import React from 'react'

// @material-ui/core components
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import { Apps, CloudDownload, AccessibilityNew } from '@material-ui/icons'

// core components
import Button from '../CustomButtons/Button'

import headerLinksStyle from './headerLinksStyle'

const HeaderLinks = ({ ...props }) => {
  const innerWidth = typeof window !== typeof undefined
    ? window.innerWidth
    : 0
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <Button
            href='#skoleni'
            link
            color='transparent'
            className={classes.navLink}
          >
            <CloudDownload className={classes.icons} /> Školení
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href='#lide'
          link
          color='transparent'
          className={classes.navLink}
        >
          <AccessibilityNew className={classes.icons} /> Lidé
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href='#registrace'
          link
          color='transparent'
          className={classes.navLink}
        >
          <AccessibilityNew className={classes.icons} /> Registrace
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-twitter'
          title='Follow us on twitter'
          placement={innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            link
            href='https://twitter.com/CreativeTim'
            target='_blank'
            color='transparent'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-twitter'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-facebook'
          title='Follow us on facebook'
          placement={innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            link
            href='https://www.facebook.com/CreativeTim'
            target='_blank'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-tooltip'
          title='Follow us on instagram'
          placement={innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            link
            href='https://www.instagram.com/CreativeTimOfficial'
            target='_blank'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-instagram'} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
