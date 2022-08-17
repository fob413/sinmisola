import React from "react";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import NavBar from "../components/navbar";
import Grid from "@mui/material/Grid";
import {Button, Card, CardActionArea, CardContent, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import tripImage from '../static/trip.png';
import roomImage from '../static/room.png';
import furnishImage from '../static/furnish.png';
import autoImage from '../static/auto.png';
import bankImage from '../static/bank.png';
import kidsImage from '../static/kids.png';

const cases = [
  {
    id: 1,
    title: 'Plan an Exclusive Trip',
    content: `
        Want to plan a trip with your family?
        Want to explore a new country?
        WONDERLAND can help with that.
        Let's help you plan your trip with ease.
    `,
    color: 'bkgTrip',
    image: tripImage,
    link: 'https://medium.com/@olusinmi98'
  },
  {
    id: 2,
    title: 'Book a Room',
    content: `
        Welcome to Lagos!
        Need an Hotel to stay? Can't reach out
        to anyone?
        Feel free to book a room via our app.
    `,
    color: 'bkgRoom',
    image: roomImage,
    link: 'https://medium.com/@olusinmi98'
  },
  {
    id: 3,
    title: 'Home Furnishing App',
    content: `
        COZA Online Furniture Store
        helps you find exactly what you
        want without the hassles of too
        much traffic and crowded stores.
    `,
    color: 'bkgFurnish',
    image: furnishImage,
    link: 'https://medium.com/@olusinmi98/case-study-creating-a-better-furnishing-and-shopping-experience-f6edba401017'
  },
  {
    id: 4,
    title: 'Auto Call',
    content: `
        Your car breakdown? Oh my goodness.
        We are here to fix it. You can now call
        a mechanic around your vicinity and say
        goodbye to road embarrassments.
    `,
    color: 'bkgAuto',
    image: autoImage,
    link: 'https://medium.com/@olusinmi98'
  },
  {
    id: 5,
    title: 'The Bank Sterling',
    content: `
        Banking can definitely be made easy
        transactions can be done from your
        comfort zone. Do not let anything
        stop you now.
    `,
    color: 'bkgBank',
    image: bankImage,
    link: 'https://medium.com/@olusinmi98'
  },
  {
    id: 6,
    title: 'Independent Kids',
    content: `
        Don't you just love kids? Children like
        having a sense of independence and that
        is why we are here to tell you that you can
        reward them for doing chores via our App.
    `,
    color: 'bkgKids',
    image: kidsImage,
    link: 'https://medium.com/@olusinmi98'
  },

]

export default function Home() {
  return (
    <Grid container>
      {/*navbar*/}
      <NavBar />

      {/*home*/}
      <Grid
        container
        className={styles.home}
        direction='column'
        xs={12}
        justifyContent="center"
        id="home"
      >
        <Container maxWidth='xl'>
          <Typography variant='h2' gutterBottom className={styles.clrWhite}>
            Hello!
          </Typography>

          <Typography variant='h4' className={styles.clrWhite}>
            I'm Sinmisola, a UI/UX Designer. <br/>
            I enjoy creating delightful <br/>
            User-centric, and Human <br/>
            Experiences
          </Typography>
        </Container>
      </Grid>

      {/*cases*/}
      <Grid
        container
        xs={12}
        id="cases"
        className={styles.cases}
      >
        <Container maxWidth='xl'>

          <Grid item xs={12}>
            <Typography variant='h4' className={styles.clrWhite} textAlign='center'>
              Designing and improving<br/>Products & User Experiences
            </Typography>
          </Grid>

          <Grid container xs={12} spacing={6}>

            {
              cases.map(({ title, content, id, color, image, link}) => {
                  return (
                    <Grid item direction='column' alignItems='center' xs={12} md={6} className={styles.marginBottom120} key={id}>
                      <Card className={`${styles[color]} ${styles.clrWhite} ${styles.card}`}>
                        <CardContent>
                          <Typography variant='h4' gutterBottom>
                            {title}
                          </Typography>

                          <Typography variant='body1' dangerouslySetInnerHTML={{__html: content}} />

                          <Image
                            src={image} layout={'responsive'} className={styles.imageTop}
                            size={"(max-height: 50px)"} placeholder={'blur'} objectFit={'contain'}
                            height={250}
                          />
                        </CardContent>
                      </Card>

                      <Button variant='contained' size='large' className={`${styles[color]} ${styles.clrWhite} ${styles.buttonLeft}`}><a href={link} target={'_blank'}>Case Study</a></Button>
                    </Grid>
                  )
              })
            }

          </Grid>

        </Container>
      </Grid>

      {/*mentions*/}
      <Grid
        container
        xs={12} md={10}
        id="about"
        className={`${styles.mentions} ${styles.marginBottom120}`}
      >
        <Container maxWidth='xl' className={styles.clrWhite}>
          <Grid item xs={12}>
            <Typography gutterBottom variant='h5' textAlign='center' className={styles.marginBottom24}>
              Mentions
            </Typography>

            <Typography gutterBottom variant='body1' textAlign='center' className={styles.marginBottom24}>
              View my featured works on these platforms. Click to read more.
            </Typography>
          </Grid>

          <Grid item xs={12} className={`${styles.mentionsRow1} ${styles.marginBottom24} `}>
            <ul>
              <li><a href='https://medium.com/@olusinmi98' target='_blank'>MEDIUM</a></li>
              <li><a href='https://www.behance.net/oluwasioluyole' target='_blank'>BEHANCE</a></li>
              <li><a href='https://www.linkedin.com/in/oluwasinmisola-oluyole-balogun-85104a221/' target='_blank'>LINKEDIN</a></li>
            </ul>
          </Grid>

          <Grid item xs={12} className={styles.mentionsRow1}>
            <ul>
              <li><a href='https://twitter.com/olusinmisola' target='_blank'>TWITTER</a></li>
              <li><a href='#' target='_blank'>DRIBBLE</a></li>
            </ul>
          </Grid>
        </Container>
      </Grid>

      {/*connect*/}
      <Grid
      container
      xs={10}
      id='contact'
      className={`${styles.connect} ${styles.marginBottom120}`}
      >
        <Container maxWidth='xl' className={styles.clrWhite}>
          <Grid item xs={12}>
            <Typography gutterBottom variant='h5' textAlign='center' className={styles.marginBottom24}>
              Let's Connect
            </Typography>

            <Typography gutterBottom variant='body1' textAlign='center'>
              Feel free to reach out for collaborations or just a friendly hello 😀
            </Typography>

            <Typography variant='body1' textAlign='center'>
              <a href='mailto: olusinmi98@gmail.com' target='_blank'>olusinmi98@gmail.com</a>
            </Typography>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  )
}
