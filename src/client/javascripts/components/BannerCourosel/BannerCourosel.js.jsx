import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import './BannerCourosel.scss';

const defaultBannerData = [
  {
    img: 'asc/images/home_page_main.jpg',
    title: 'Health',
    color: '#5e89a5',
  },
  {
    img: 'asc/images/home_page_5.jpg',
    title: 'Health',
    color: '#FFF',
  },
  {
    img: 'asc/images/home_page_6.jpg',
    title: 'Health',
    color: '#FFF',
  },
  {
    img: 'asc/images/home_page_4.jpg',
    title: 'Health',
    color: '#FFF',
  },
];


function Item({ item, itemSection }) {
  return (
    <Paper elevation={8}>
      <div style={{ position: 'relative' }}>
        {itemSection && (
          <section style={{
            position: 'absolute', top: '15rem', left: '30%', fontWeight: 'bold', fontSize: '3rem', color: item.color,
          }}
          >
            Adyar Speciality Clinic
          </section>
        )}
        {itemSection && (
          <section style={{
            position: 'absolute', top: '19rem', left: '30%', fontWeight: 'bold', fontSize: '1rem', color: item.color,
          }}
          >
            Our Speciality is your Wellbeing
          </section>
        )}
        <img src={item.img} width="100%" height="700px" alt={item.title} />
      </div>

    </Paper>
  );
}

export default function BannerCarousel({
  bannerItems,
  itemSection = true,
  navButtonsAlwaysVisible = true,
}) {
  const itemData = bannerItems || defaultBannerData;
  return (
    <Carousel navButtonsAlwaysVisible={navButtonsAlwaysVisible} className="home_page_carousel">
      {
            itemData.map((item, i) => <Item key={i} item={item} itemSection={itemSection} />)
        }
    </Carousel>
  );
}
