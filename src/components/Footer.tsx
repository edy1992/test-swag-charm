import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { LocalPhone, KeyboardArrowDown  } from '@mui/icons-material';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import linkedin from '../assets/icons/linkedin.svg';
import twitter from '../assets/icons/twitter.svg';
import youtube from '../assets/icons/youtube.svg';
import eeuu from '../assets/img/eeuu_flag.png';

function Footer() {
  const [ourCompany, setOurCompany] = useState<string[]>([]);
  const [help, setHelp] = useState<string[]>([]);
  const [information, setInformation] = useState<string[]>([]);
  const [socialMedia, setSocialMedia] = useState<string[]>([]);

  useEffect(() => {
    setOurCompany(['About us', 'FAQ', 'Partnerships', 'Sustainability', 'Blog']);
    setHelp(['Place a ticket', 'Track your order', 'Help center']);
    setInformation(['Contact us', 'Live chat', 'Privacy', 'Terms of use']);
    setSocialMedia([facebook, twitter, instagram, linkedin, youtube]);
  }, []);
  
  return (
      <Box bgcolor='#E6E8E9' paddingTop={'50px'}>
        <Box display='flex' flexDirection='column' justifyContent='start' alignItems='center'>
          <Box sx={{width: '80vw'}}>
            <Grid container columns={12} paddingBottom={'40px'}>
                <Grid item xs={3} sx={{paddingRight: '0px'}} display='flex' flexDirection='column' justifyContent='start' alignItems='start'>
                    <Box sx={{width: '172px', height: '48px'}} bgcolor='#CED0D3'  display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Typography color={'#848A92'} fontSize={'13px'}>LOGO</Typography>
                    </Box>
                    <Typography color={'#6B737C'} fontSize={'15px'} paddingTop={'12px'} paddingBottom={'12px'}>We sell custom products for all your <br />needs. Packs and bulk products that <br />you will enjoy.</Typography>
                    <Box display='flex' flexDirection='row' justifyContent='center' alignItems='start' paddingBottom={'15px'}>
                        <LocalPhone sx={{height: '16px', width: '16px', color: '#091625', marginRight: '5px'}} />
                        <Typography fontSize={'15px'} color={'#091625'} fontWeight={'600'} marginTop={'-4px'}>+1-202-555-0129</Typography>
                    </Box>
                    <Box display='flex' flexDirection='row' justifyContent='center' alignItems='start'>
                        {socialMedia.map((sm, i) => (
                            <img key={i} src={sm} height={'28px'} style={{marginRight: '10px', cursor: 'pointer'}} alt="" />
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={3} sx={{paddingRight: '0px'}} display='flex' flexDirection='column' justifyContent='start' alignItems='start'>
                    <Typography fontSize={'16px'} color={'#091625'} fontWeight={'700'} sx={{paddingBottom: '3px'}}>Our company</Typography>
                    {ourCompany.map((oc, i) => (
                        <Typography key={i} fontSize={'15px'} color={'#3A4451'} fontWeight={'400'} sx={{cursor: 'pointer', paddingTop: '8px'}}>{oc}</Typography>
                    ))}
                </Grid>
                <Grid item xs={3} sx={{paddingRight: '0px'}} display='flex' flexDirection='column' justifyContent='start' alignItems='start'>
                    <Typography fontSize={'16px'} color={'#091625'} fontWeight={'700'} sx={{paddingBottom: '3px'}}>How can we help</Typography>
                    {help.map((h, i) => (
                        <Typography key={i} fontSize={'15px'} color={'#3A4451'} fontWeight={'400'} sx={{cursor: 'pointer', paddingTop: '8px'}}>{h}</Typography>
                    ))}
                </Grid>
                <Grid item xs={3} sx={{paddingRight: '0px'}} display='flex' flexDirection='column' justifyContent='start' alignItems='start'>
                    <Typography fontSize={'16px'} color={'#091625'} fontWeight={'700'} sx={{paddingBottom: '3px'}}>Information</Typography>
                    {information.map((inf, i) => (
                        <Typography key={i} fontSize={'15px'} color={'#3A4451'} fontWeight={'400'} sx={{cursor: 'pointer', paddingTop: '8px'}}>{inf}</Typography>
                    ))}
                </Grid>
                <Grid item xs={8} sx={{paddingTop: '50px'}} display='flex' flexDirection='column' justifyContent='start' alignItems='start'>
                    <Typography color={'#535C67'} fontSize={'14px'} fontWeight={'400'}>© 2022 Customer products. All rights reserved.</Typography>
                </Grid>
                <Grid item xs={4} sx={{paddingTop: '50px'}} display='flex' flexDirection='row' justifyContent='center' alignItems='start'>
                    <Typography color={'#535C67'} fontSize={'14px'} fontWeight={'400'} sx={{marginRight: '5px'}}>Region:</Typography>
                    <img src={eeuu} height={'11px'} style={{marginRight: '3px', marginTop: '4px'}} alt="" />
                    <Typography color={'#091625'} fontSize={'14px'} fontWeight={'600'}>United States</Typography>
                    <KeyboardArrowDown sx={{height: '15px', width: '15px', color: '#091625', marginRight: '20px', marginTop: '3px'}} />
                    <Typography color={'#535C67'} fontSize={'14px'} fontWeight={'400'} sx={{marginRight: '5px'}}>Language:</Typography>
                    <Typography color={'#091625'} fontSize={'14px'} fontWeight={'600'}>English</Typography>
                    <KeyboardArrowDown sx={{height: '15px', width: '15px', color: '#091625', marginTop: '3px'}} />
                </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
  );
}

export default Footer;