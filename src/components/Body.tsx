import React, { useState, useEffect } from 'react';
import { Box, Grid, Button, Typography, TextField } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { CartItem, PackItem } from '../types';
import { formatPrice, getTotalPrice } from '../helpers';
import imageProduct from '../assets/img/image-products.png';

function Body() {
    const [total, setTotal] = useState<number>(0);
    const [cartItems, setCartItems] = useState<CartItem[]>(
        [
            {
                id: 1,
                title: 'My Christmas pack',
                quantity: 50,
                image_url: imageProduct,
                sku_price: 71.20,
                isPack: true,
                packItems: [
                    {
                        title: 'Cardboard box',
                        attributes: ['container']
                    },
                    {
                        title: 'Unisex Short Sleeve T-Shirt',
                        attributes: ['Green', 'Small']
                    },
                    {
                        title: 'Basic bottle',
                        attributes: ['Blue']
                    }
                ]
            },
            {
                id: 2,
                title: 'Basic T-shirt',
                quantity: 10,
                image_url: null,
                sku_price: 13.50,
                isPack: false
            },
            {
                id: 3,
                title: 'Woman bottle',
                quantity: 20,
                image_url: null,
                sku_price: 36.50,
                isPack: false,
            }
        ]);
    
  useEffect(() => {
    setTotal(getTotalPrice(cartItems));
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;
    if (isNaN(Number(key)) && key !== 'Backspace' && key !== 'Delete' && key !== 'ArrowLeft' && key !== 'ArrowRight') {
        e.preventDefault();
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, cartItem: CartItem) => {
    let value = e.target.value;
    if (Number(value) < 1) {
        value = e.target.value = "1";
    }
    const index = cartItems.findIndex((cItem: CartItem) => cItem.id === cartItem.id);
    if (index !== -1) {
        let cartItemsAux = cartItems;
        cartItemsAux[index] = {
            ...cartItemsAux[index],
            quantity: Number(value)
        }
        setCartItems(cartItemsAux);
        setTotal(getTotalPrice(cartItemsAux));
    }
  }

  const removeCartItem = (cartItemId: number) => {
    const cartItemsAux = cartItems.filter((cItem: CartItem) => cItem.id !== cartItemId);
    setCartItems(cartItemsAux);
    setTotal(getTotalPrice(cartItemsAux));
  }

  return (
      <Box>
        <Box display='flex' flexDirection='column' justifyContent='start' alignItems='center' bgcolor='#ffffff'>
          <Box sx={{width: '80vw', height: '100%'}}>
            <Grid container spacing={1} columns={14} height='100%' padding="10px 0px 15px" margin='0px'>
                <Grid id="container-cart-items" item xs={10} height='100%'>
                    <Box sx={{width: '100%', paddingBottom: '10px'}} fontSize='18px' fontWeight='700' display='flex' flexDirection='row' justifyContent='start' alignItems='center'>
                        You cart&nbsp;<Typography color='#6B737C' fontSize='13px' marginTop='2px'>({cartItems.length})</Typography>
                    </Box>
                    {
                        cartItems.length === 0 && (
                            <Typography color='#757575' fontSize='20px' marginTop='20px'>There are no products in your cart, please add products to cart and enjoy the experience.</Typography>
                        )
                    }
                    {
                        cartItems.length !== 0 && (
                            <Box sx={{width: 'calc(100% - 30px)', paddingBottom: '10px', paddingRight: '30px'}}>
                                {
                                    cartItems.map((cartItem: CartItem, index) => (
                                        <Grid container columns={12} key={index} sx={{ borderBottom: 'solid 1px #CED0D3', paddingBottom: '18px', marginBottom: '18px' }}>
                                          <Grid item xs={9} display='flex' flexDirection='row' justifyContent='start' alignItems='start'>
                                            <Box sx={{ paddingRight: '12px' }} display='flex' flexDirection='column' justifyContent='start' alignItems='center'>
                                                <Box width='120px' height='120px' bgcolor='#E6E8E9' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                                                    {
                                                        cartItem.image_url !== null && (
                                                            <img src={cartItem.image_url} alt="" style={{ maxWidth: '120px', maxHeight: '120px' }} />
                                                        )
                                                    }
                                                </Box>
                                                {
                                                    cartItem.isPack && (
                                                        <Box sx={{ padding: '1px 5px', borderRadius: '2px', color: '#848A92', background: '#E6E8E9', marginTop: '10px' }}>
                                                            Pack
                                                        </Box>
                                                    )
                                                }
                                            </Box>
                                            <Box display='flex' flexDirection='column' justifyContent='start' alignItems='start'>
                                                <Typography color='#091625' fontSize='18px'>{cartItem.title}</Typography>
                                                <Box display='flex' flexDirection='row' justifyContent='start' alignItems='center'>
                                                    <Typography color='#091625' fontSize='15px'>Quantity:</Typography>&nbsp;
                                                    <TextField
                                                      variant="filled"
                                                      type="number"
                                                      size="small"
                                                      sx={{width: '70px', height: '32px'}}
                                                      value={cartItem.quantity}
                                                      onChange={(e) => handleChange(e, cartItem)}
                                                      onKeyDown={(e) => handleKeyDown(e)}
                                                      InputLabelProps={{
                                                        shrink: true,
                                                      }}
                                                      className="outlined-number"
                                                      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                                    />
                                                </Box>
                                                {
                                                    cartItem.isPack && (
                                                        <Box sx={{ padding: '3px 5px', color: '#848A92' }}>
                                                            {
                                                                cartItem.packItems && cartItem.packItems.length!==0 && (
                                                                    <Box display='flex' flexDirection='column' justifyContent='start' alignItems='start'>
                                                                        {
                                                                            cartItem.packItems.map((packItem: PackItem, ind) => (
                                                                                <Box key={ind} sx={{width: '100%', color: '#091625'}} fontSize='14px' fontWeight='600' display='flex' flexDirection='row' justifyContent='start' alignItems='center'>
                                                                                    · {packItem.title}&nbsp;
                                                                                    {
                                                                                        packItem.attributes.length!==0 && (
                                                                                            <Typography color='#6B737C' fontSize='13px' marginTop='2px'>({packItem.attributes.join(', ')})</Typography>
                                                                                        )
                                                                                    }
                                                                                </Box>
                                                                            ))
                                                                        }
                                                                    </Box>
                                                                )
                                                            }
                                                            <Box sx={{ padding: '20px 0px 5px' }} display='flex' flexDirection='row' justifyContent='start' alignItems='start'>
                                                                <Typography color='#091625' fontSize='12px' fontWeight='700' sx={{cursor: 'pointer'}}>Edit pack</Typography>
                                                                <Typography color='#6B737C' fontSize='12px' padding='0 12px' fontWeight='700'>|</Typography>
                                                                <Typography color='#091625' fontSize='12px' fontWeight='700' sx={{cursor: 'pointer'}} onClick={() => removeCartItem(cartItem.id)}>Remove</Typography>
                                                            </Box>
                                                        </Box>
                                                    )
                                                }
                                                {
                                                    !cartItem.isPack && (
                                                        <Box display='flex' flexDirection='row' justifyContent='center' alignItems='start' sx={{cursor: 'pointer', paddingTop: '5px'}}>
                                                            <DeleteOutline sx={{height: '16px', width: '16px', color: '#091625', marginRight: '5px'}} />
                                                            <Typography fontSize='12px' fontWeight='700' color='#091625' onClick={() => removeCartItem(cartItem.id)}>Remove</Typography>
                                                        </Box>
                                                    )
                                                }
                                            </Box>
                                          </Grid>
                                          <Grid item xs={3}>
                                            <Typography color='#091625' fontSize='18px' textAlign='right'>${formatPrice(cartItem.sku_price)}</Typography>
                                            <Typography color='#091625' fontSize='18px' marginTop='3px' textAlign='right'>Total: ${formatPrice(cartItem.sku_price * cartItem.quantity)}</Typography>
                                          </Grid>
                                        </Grid>
                                    ))
                                }
                            </Box>
                        )
                    }
                </Grid>
                <Grid item xs={4} height='100%' fontSize='18px' display='flex' flexDirection='column' justifyContent='center' alignItems='start'>
                    <Box sx={{width: '100%', paddingBottom: '18px'}} fontSize='18px' fontWeight='700' display='flex' flexDirection='row' justifyContent='start' alignItems='center'>
                        Order Summary
                    </Box>
                    <Grid container columns={12} sx={{paddingTop: '2px', paddingBottom: '12px', marginBottom: '10px', borderBottom: 'solid 1px #E6E8E9' }}>
                        <Grid item xs={6} display='flex' flexDirection='row' justifyContent='start' alignItems='center'>
                            <Typography color='#6B737C' fontSize='16px' marginTop='2px'>Number of items</Typography>
                        </Grid>
                        <Grid item xs={6} display='flex' flexDirection='row' justifyContent='end' alignItems='center'>
                            <Typography color='#6B737C' fontSize='16px' marginTop='2px'>{cartItems.length}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container columns={12} sx={{paddingTop: '0px', paddingBottom: '15px' }}>
                        <Grid item xs={6} display='flex' flexDirection='row' justifyContent='start' alignItems='center'>
                            <Typography color='#091625' fontSize='18px' marginTop='2px'>Total:</Typography>
                        </Grid>
                        <Grid item xs={6} display='flex' flexDirection='row' justifyContent='end' alignItems='center'>
                            <Typography color='#091625' fontSize='24px' marginTop='2px'>${formatPrice(total)}</Typography>
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" sx={{background: '#3A4451', color: 'white', fontSize: '16px', fontWeight: '600', borderRadius: '8px', marginBottom: '12px', width: '100%', textTransform: 'none'}}>
                      Proceed to Checkout
                    </Button>
                    <Button sx={{background: 'white', border: '2px solid #091625', color: '#091625', fontSize: '16px', fontWeight: '600', borderRadius: '8px', width: '100%', textTransform: 'none'}}>
                      Continue shopping
                    </Button>
                </Grid>
            </Grid>
            <Box sx={{width: '100%', paddingBottom: '8px'}} fontSize='18px' fontWeight='700' display='flex' flexDirection='row' justifyContent='start' alignItems='center'>
                You might also like
            </Box>
            <Grid container columns={12} paddingBottom='50px'>
                {Array.from(Array(4)).map((_, i) => (
                    <Grid key={i} item xs={3} sx={{paddingRight: '12px'}} display='flex' flexDirection='column' justifyContent='start' alignItems='start'>
                        <Box width='100%' bgcolor='#E6E8E9' marginBottom='5px' sx={{height: 'calc((80vw - 36px) / 4)'}} display='flex' flexDirection='column' justifyContent='center' alignItems='center'></Box>
                        <Typography color='#091625' fontSize='15px' fontWeight={600} paddingBottom='5px'>Unisex Short Sleeve T-Shirt</Typography>
                        <Grid container columns={12} sx={{paddingTop: '2px' }}>
                            <Grid item xs={6} display='flex' flexDirection='row' justifyContent='start' alignItems='center'>
                                <Typography color='#091625' fontWeight={600} fontSize='15px' marginTop='2px'>$10.00 - $24.00</Typography>
                            </Grid>
                            <Grid item xs={6} display='flex' flexDirection='row' justifyContent='start' alignItems='center'>
                                <Typography color='#6B737C' fontWeight={400} fontSize='14px' marginTop='2px'>Minimum:</Typography>&nbsp;
                                <Typography color='#091625' fontWeight={400} fontSize='14px' marginTop='2px'>24</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      </Box>
  );
}

export default Body;