import * as React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { title } from '../assets/jss/material-kit-react'

const aboutStyle = createStyles({
  aboutUs: {
    padding: '5rem 0'
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
})

interface IProps extends WithStyles<typeof aboutStyle> { }

const AboutSection: React.SFC<IProps> = (props) => {
  const { classes } = props

  return (
    <div className={classes.aboutUs}>
      <h2
        className={classes.title}
        style={{
          textAlign: 'center'
        }}
      >
        Proč Svehlify kurzy?
      </h2>
      <Typography
        style={{
          marginBottom: '1.25rem',
          textAlign: 'center',
          fontSize: '1.1rem'
        }}
      >
        Už nás nebavilo čtení špatně napsaného kódu. <br />
        Nebavily nás nudné stacky technologií. <br />
        Proto jsme přišli s nabídkou řešení. <br />
        Kurzy od Svehlify.
      </Typography>
    </div>
  )
}

export default withStyles(aboutStyle)(AboutSection)
