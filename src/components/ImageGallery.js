import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImageGallery = () => {
  const itemData = [
    {
      img: 'DSC01574.JPG',
      title: 'Reloj 6 dig. 7 segmentos',
    },
    {
      img: 'DSC01707.JPG',
      title: 'SMPS',
    },
    {
      img: 'DSC01710.JPG',
      title: '555',
    },
    {
      img: 'DSC01711.JPG',
      title: '555',
    },
    {
      img: 'DSC01832.JPG',
      title: 'LEDS',
    },
    {
      img: 'DSC01715.JPG',
      title: 'LEDS VERDES',
    },
    {
      img: 'DSC01719.JPG',
      title: 'contador de décadas',
    },
    {
      img: 'DSC01732.JPG',
      title: 'AMPLIFICADOR',
    },
    {
      img: 'DSC01733.JPG',
      title: 'Mesa de trabajo',
    },
    {
      img: 'DSC01735.JPG',
      title: 'Osciloscopio',
    },
    {
      img: 'DSC01736.JPG',
      title: 'Sea star',
    },
    {
      img: 'DSC01827.JPG',
      title: 'Bike',
    },
  ];

  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageGallery;
