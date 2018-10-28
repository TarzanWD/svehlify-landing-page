/*eslint-disable*/
import React from 'react'

// @material-ui/core components
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import { AccessibilityNew, School, Fingerprint, MailOutline } from '@material-ui/icons'

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
            <School className={classes.icons} /> Školení
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href='#lide'
          link
          color='transparent'
          className={classes.navLink}
        >
          <Fingerprint className={classes.icons} /> Kdo jsme
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href='#registrace'
          link
          color='transparent'
          className={classes.navLink}
        >
          <MailOutline className={classes.icons} /> Přihlásit se
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-twitter'
          title='Sledujte svehlify twitteru'
          placement={innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            link
            href='https://twitter.com/KubaSvehla'
            target='_blank'
            className={classes.navLink}
          >
            <img style={{ color: '#FFF', height: '26px' }} src='/static/icons/twitter.svg' />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-github'
          title='Sledujte nás na githubu'
          placement={innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            link
            href='https://github.com/Svehla'
            target='_blank'
            className={classes.navLink}
          >
            <img style={{ fill: '#FFF', height: '24px' }} src='/static/icons/github.svg' />
          </Button>
        </Tooltip>
      </ListItem>

    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
