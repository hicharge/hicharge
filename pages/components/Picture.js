import PhotoAlbum from 'react-photo-album';

import { Typography } from '@mui/material';
import { useState } from 'react';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: '8gVv6nxq6gY', width: 1080, height: 800 },
  { id: 'Dhmn6ete6g8', width: 1080, height: 1620 },
  { id: 'RkBTPqPEGDo', width: 1080, height: 720 },
  { id: 'Yizrl9N_eDA', width: 1080, height: 721 },
  { id: 'KG3TyFi0iTU', width: 1080, height: 1620 },
  { id: 'Jztmx9yqjBw', width: 1080, height: 607 },
  { id: '-heLWtuAN3c', width: 1080, height: 608 },
];

const photos = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));

export default function Picture() {
  const [photo, setphoto] = useState([
    {
      src: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      width: 1080,
      height: 800,
    },
    {
      src: 'https://images.pexels.com/photos/8827011/pexels-photo-8827011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      width: 1080,
      height: 1620,
    },
    {
      src: 'https://images.pexels.com/photos/8349487/pexels-photo-8349487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      width: 1080,
      height: 720,
    },
    {
      src: 'https://images.unsplash.com/photo-1625870605450-40b1803df06d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
      width: 1080,
      height: 721,
    },
    {
      src: 'https://images.pexels.com/photos/4699781/pexels-photo-4699781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      width: 1080,
      height: 1620,
    },
    {
      src: 'https://images.unsplash.com/photo-1567409378873-888d6fa7debc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      width: 1080,
      height: 607,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1679389667224-47934a5fecb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
      width: 1080,
      height: 608,
    },
  ]);
  return (
    <>
      <h1 style={{ marginLeft: 21 }}>Applications</h1>
      {/* <div>{JSON.stringify(photo)}</div> */}
      <PhotoAlbum photos={photo} layout="rows" />
    </>
  );
}
