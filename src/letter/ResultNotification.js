import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Folketinget_of_Denmark.svg";
import QRcode from "../assets/qr-code.png";
import "./Letter.css";

const ResultNotification = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="main">
        <div className="letter">
          <div className="letter-logo">
            <img src={Logo} />
          </div>

          <h2 className="letter-headline">
            Resultatet af folketingsvalget 2022
          </h2>
          <div className="letter-body">
            <p>Resultatet af folketingsvalget er nu offentliggjort.</p>

            <p>
              Det er vigtigt, at du tjekker, at din stemme er afgivet korrekt.
              Dette gør du ved enten at scanne QR-koden i boks 1, eller ved at
              klikke på linket i boks 2 og se din verifikationskode.
            </p>

            <Grid
              templateColumns={"1fr 1fr"}
              templateRows={"auto auto"}
              gap="1rem"
              bg="#F4F4F4"
              paddingLeft={"2rem"}
              paddingRight={"2rem"}
              paddingTop="1rem"
              paddingBottom="2rem"
              className="letter-body"
              marginTop={"3rem"}
            >
              <GridItem gridColumn={"1/3"}>
                <p>
                  <b>Boks 1</b>
                </p>
              </GridItem>
              <GridItem>
                <p>
                  Scan din QR-kode for at tjekke, at din stemme er afgivet
                  korrekt.
                </p>
              </GridItem>
              <GridItem>
                <img src={QRcode} />
              </GridItem>
            </Grid>
            <Box
              bg="#F4F4F4"
              paddingLeft={"2rem"}
              paddingRight={"2rem"}
              paddingTop="1rem"
              paddingBottom="2rem"
              className="letter-body"
              marginBottom={"2rem"}
            >
              <p>
                <b>Boks 2</b>
              </p>
              <p>Brug denne verifikationskode:</p>
              <p className="bold">CWTL-DMDpLZDSvR</p>
              <p>
                til at tjekke, at din stemme er afgivet korrekt på
                resultatlisten. Klik på følgende link:
                <span>
                  {" "}
                  <a
                    className="link-bold"
                    onClick={() => navigate("/bulletinboard")}
                  >
                    {" "}
                    Se resultatet
                  </a>
                </span>
                .
              </p>
            </Box>
          </div>

          <div className="letter-margin">
            <p className="bold">2. december</p>
            <p>Sagsnummer: 2022-0310787</p>
            <p>Dokumentnummer: 2022-0310787-4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultNotification;
