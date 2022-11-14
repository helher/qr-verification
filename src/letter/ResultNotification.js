import React from 'react';
import {
    Box,
    Button,
    Grid,
    GridItem
  } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';
import Logo from '../assets/Folketinget_of_Denmark.svg';
import QRcode from '../assets/qr-code.png';



// Styling
import './Letter.css';

const ResultNotification = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='main'>
                <div className='letter'>
                    <div className='letter-logo'><img src={Logo}/></div>
                    
                    <h2 className='letter-headline'>Resultatet af folketingsvalget 2022</h2>
                    <div className='letter-body'>
                        <p>Resultatet af folketingsvalget er nu offentliggjort, <br/>
                         og du kan se det ved at scanne på nedenstående link.</p>

                        <p>Det er vigtigt, at du tjekker, at din stemme er <br/>afgivet korrekt. Dette gør du ved at finde din verifikationskode på resultatlisten.</p>
                        
         <Grid templateColumns={'1fr 1fr'} gap='2rem' bg='#F4F4F4' paddingLeft={'2rem'} paddingRight={'2rem'} paddingTop='1rem' paddingBottom='2rem' className='letter-body' marginTop={'3rem'}>
         <p>Scan din qr QR-kode for at tjekke, at din stemme er afgivet korrekt.</p>
                <GridItem><img src={QRcode}/></GridItem>
            </Grid>
            <Box bg='#F4F4F4' paddingLeft={'2rem'} paddingRight={'2rem'} paddingTop='1rem' paddingBottom='2rem' className='letter-body' marginBottom={'2rem'}>
            <p>Brug denne verifikationskode:</p>
                <p className='bold'>CWTL-DMDpLZDSvR</p>
                <p>til at tjekke, at din stemme er afgivet korrekt på resultatlisten. Klik på følgende link:<span> <a className='link-bold' onClick={()=> navigate('/bulletinboard')}> Se resultatet</a></span>.</p>
            </Box>


                            <p>Har du brug for hjælp?<span> <a className='link' onClick={()=> navigate('/kontakt')}> Klik her</a></span>.</p>
                            </div>

                    <div className='letter-margin'>
                        <p className='bold'>2. december</p>
                        <p>Sagsnummer: 2022-0310787</p>
                        <p>Dokumentnummer: 2022-0310787-4</p>
                    </div>

            </div>
        </div>
        </div>

    );
};

export default ResultNotification;
