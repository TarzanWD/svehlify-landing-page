/*eslint-disable*/
import Link from 'next/link'
import React from 'react'

// @material-ui/core components
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons'

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
            href='https://twitter.com/CreativeTim'
            target='_blank'
            color='transparent'
            className={classes.navLink}
          >
            <CloudDownload className={classes.icons} /> Download
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href='https://www.creative-tim.com/product/material-kit-react'
          color='transparent'
          target='_blank'
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
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
