import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../styles/Carousel.module.css'


function CoolCarousel(props) {
    var items = [
        {
            name: "Drug Discovery",
        },
        {
            name: "Drug Discovery / Pre Clinical"
        },
        {
            name: "Pre Clinical"
        },
        {
            name: "IND"
        },
        {
            name: "Clinical Trials"
        },
        {
            name: "NDA"
        },
        {
            name: "Manufacturing and Distributing"
        },
    ]


    return (

        <Carousel
            autoPlay={false}
            animation={"slide"}
            swipe={true}
            duration={600}
            NextIcon={<ArrowForwardIcon style={{ fill: "white" }} />}
            PrevIcon={<ArrowBackIcon style={{ fill: "white" }} />}
            navButtonsAlwaysVisible={true}
            height={500}
            indicators={false}
            >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}



function Item(props) {
    return (
        <Paper className={styles.content}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            {/* 
            <Button className="CheckButton">
               Optional Button
            </Button> */}
        </Paper>
    )


}

export default CoolCarousel