import React from "react";
import Head from 'next/head';
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
        Want to plan a trip with your family?<br/>
        Want to explore a new country?<br/>
        WONDERLAND can help with that.<br/>
        Let's help you plan your trip with ease.
    `,
    color: 'bkgTrip',
    image: tripImage
  },
  {
    id: 2,
    title: 'Book a Room',
    content: `
        Welcome to Lagos!<br/>
        Need an Hotel to stay? Can't reach out<br/>
        to anyone?<br/>
        Feel free to book a room via our app.
    `,
    color: 'bkgRoom',
    image: roomImage
  },
  {
    id: 3,
    title: 'Home Furnishing App',
    content: `
        COZA Online Furniture Store<br/>
        helps you find exactly what you<br/>
        want without the hassles of too<br/>
        much traffic and crowded stores.
    `,
    color: 'bkgFurnish',
    image: furnishImage
  },
  {
    id: 4,
    title: 'Auto Call',
    content: `
        Your car breakdown? Oh my goodness.<br/>
        We are here to fix it. You can now call<br/>
        a mechanic around your vicinity and say<br/>
        goodbye to road embarrassments.
    `,
    color: 'bkgAuto',
    image: autoImage
  },
  {
    id: 5,
    title: 'The Bank Sterling',
    content: `
        Banking can definitely be made easy<br/>
        transactions can be done from your<br/>
        comfort zone. Do not let anything<br/>
        stop you now.
    `,
    color: 'bkgBank',
    image: bankImage
  },
  {
    id: 6,
    title: 'Independent Kids',
    content: `
        Don't you just love kids? Children like<br/>
        having a sense of independence and that<br/>
        is why we are here to tell you that you can<br/>
        reward them for doing chores via our App.
    `,
    color: 'bkgKids',
    image: kidsImage
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
            <Typography variant='h5' className={styles.clrWhite} textAlign='center'>
              Designing and<br/>improving Products<br/>& User Experiences
            </Typography>
          </Grid>

          <Grid container xs={12} spacing={6}>

            {
              cases.map(({ title, content, id, color, image}) => {
                  return (
                    <Grid item direction='column' alignItems='center' xs={12} md={6} className={styles.marginBottom120} key={id}>
                      <Card className={`${styles[color]} ${styles.clrWhite} ${styles.card}`}>
                        <CardContent>
                          <Typography variant='h5' gutterBottom>
                            {title}
                          </Typography>

                          <Typography variant='body1' dangerouslySetInnerHTML={{__html: content}} />

                          <Image src={image}/>
                        </CardContent>
                      </Card>

                      <Button variant='contained' size='large' className={`${styles[color]} ${styles.clrWhite}`}>Case Study</Button>
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
        id="mentions"
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
      id='connect'
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
