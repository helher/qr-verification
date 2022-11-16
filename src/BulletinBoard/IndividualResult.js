import { Grid, GridItem, Input, Box, IconButton, Text, Link, InputGroup, InputLeftElement, Accordion, AccordionButton, AccordionPanel, AccordionIcon, AccordionItem } from '@chakra-ui/react';
import React from 'react';
import ResultsAccordion from '../results-accordion.json'
import Results from '../results.json'
import './BulletinBoard.css'
import { SearchIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import {useState } from 'react'
import { useNavigate } from 'react-router-dom';


const IndividualResult = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
        <div className='main-mobile'>

            <h1>Din stemme er optalt</h1>
        
        <Box bg='var(--secondary_blue)' padding='1rem' borderRadius={'5px'} color='#599C2D' w={'100%'}>
         <Text className='info-text'>Hvis den optalte stemme herunder ikke svarer til det, du har angivet, bedes du kontakte valgstyrelsen <Link className='link-bold' onClick={()=> navigate('/qr-verification/kontakt')}>her</Link>.</Text>
         </Box>

         <Box width='100%'
         color={'var(--primary_blue)'} fontWeight='600' fontSize={'1.2rem'}
          paddingTop='3rem' marginTop='2rem' paddingBottom='3rem' 
          border='solid 1px #D9D9D9' paddingLeft={'1rem'} paddingRight={'0.5rem'} 
          justifyItems='center' display={'flex'} justifyContent={'center'}>
            <p >A. Socialdemokratiet</p>
        </Box>
        <Box className='intro-text' marginTop={'1rem'} marginBottom={'1rem'}>
        <p>Såfremt du ønsker at se hele resultatlisten, klik <Link className='link-bold' onClick={()=> navigate('/qr-verification/bulletinboard')}>her</Link>.</p>
        <p>Her kan du ligeledes tjekke, om din stemme er afgivet korrekt ved at bruge denne verifikationskode:</p>
        </Box>
        <p className='bold'>CWTL-DMDpLZDSvR</p>

< GridItem className='btn-container-vertical'>
<Button className='button' width='100%' bg={'var(--primary_blue)'}  color='var(--secondary_blue)'  onClick={()=> navigate('/qr-verification/home')} fontSize='0.9rem' marginTop={'2rem'}>Afslut</Button>
        </GridItem>
        </div>
        </div>
    );
};

export default IndividualResult;