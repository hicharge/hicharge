import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography } from '@mui/material';

const SliderCarasouel = () => {
  const [items, setitems] = useState([
    {
      name: 'Mobile EV charging has revolutionized the way we charge electric vehicle',
      description: 'Probably the most random thing you have ever seen!',
      image:
        'https://images.unsplash.com/photo-1623079398118-11b5da627a00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80',
      opacity: 0.9,
    },
    {
      name: 'Offering a fast and convenient solution on the go',
      description: 'Hello World!',
      image:
        'https://images.unsplash.com/photo-1617886322207-6f504e7472c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      opacity: 0.4,
    },
    {
      name: 'Providing drivers with the ability to quickly and efficiently charge their vehicles when needed.',
      description: 'Hello World!',
      image:
        'https://images.unsplash.com/photo-1567777176186-dfa735f1fe20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80',
      opacity: 0.4,
    },
  ]);
  return (
    <Carousel autoPlay interval={2000}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default SliderCarasouel;
function Item(props) {
  return (
    <Paper style={{ maxHeight: 610, backgroundColor: 'black' }}>
      <div style={{ position: 'absolute', zIndex: 1 }}>
        <a href={'http://www.hicharge.in'} style={{}}>
          <img
            style={{
              width: 'auto',
              height: '72px',
              paddingTop: 21,
              paddingLeft: 21,
            }}
            alt="slide1"
            src={
              'https://hicharge.in/admin/wp-content/uploads/2023/03/final-hi-charze.png'
            }
          ></img>
        </a>
        <Typography
          sx={{
            fontSize: 31,
            color: '#fff',
          }}
          style={{
            bottom: 9,

            fontFamily: 'Playfair Display',
            marginLeft: 21,

            width: '70%',
          }}
        >
          {props.item.name}
        </Typography>
        {/* <p style={{ top: 70 }}>{props.item.description}</p> */}
        {/* <button onClick={() => console.warn('hello')}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            style={{
              width: 51,
              height: 'auto',

              zIndex: 1,

              marginLeft: 51,
            }}
          />
        </button> */}
      </div>

      <img
        style={{
          width: '100%',
          height: 'auto',
          opacity: props.item.opacity,
          left: '0',
        }}
        src={props.item.image}
        alt="CheckButton"
      />

      {/* <Button className="CheckButton">Check it out!</Button> */}
    </Paper>
  );
}
