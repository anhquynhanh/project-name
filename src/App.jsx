import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './Accordion.css'
import Accordion from './features/Accordion'
import Footer from './features/footer/Footer'
import Header from './features/header/Header'
import Main from './features/main/Main'
// import Carousel from './features/carousel/carousel'

const products = [
  {
    thumbnail: '',
    id: 1,
    name: 'Fancy Product',
    price: 200.0,
    reviews: 4.2,
    variants: [
      { originPrice: 250.0 },
      { originPrice: 300.0, salePrice: 250.0 }
    ],
    isSale: true,
  },
  {
    thumbnail: '',
    id: 2,
    name: 'Special Item',
    price: 150.0,
    reviews: 4.5,
    variants: [
      { originPrice: 180.0 },
      { originPrice: 200.0, salePrice: 150.0 }
    ],
    isSale: false,
  },
  {
    thumbnail: '',
    id: 3,
    name: 'Sale Item',
    price: 99.0,
    reviews: 4.0,
    variants: [{ originPrice: 120.0, salePrice: 99.0 }],
    isSale: true,
  },
  {
    thumbnail: '',
    id: 4,
    name: 'Popular Item',
    price: 350.0,
    reviews: 4.8,
    variants: [{ originPrice: 400.0 }],
    isSale: false,
  },
  {
    thumbnail: '',
    id: 5,
    name: 'Sale Item',
    price: 75.0,
    reviews: 3.5,
    variants: [
      { originPrice: 90.0, salePrice: 75.0 },
      { originPrice: 100.0, salePrice: 80.0 }
    ],
    isSale: true,
  },
  {
    thumbnail: '',
    id: 6,
    name: 'Fancy Product',
    price: 180.0,
    reviews: 4.1,
    variants: [{ originPrice: 200.0, salePrice: 180.0 }],
    isSale: true,
  },
  {
    thumbnail: '',
    id: 7,
    name: 'Special Item',
    price: 299.0,
    reviews: 4.3,
    variants: [{ originPrice: 320.0, salePrice: 299.0 }],
    isSale: true,
  },
  {
    thumbnail: '',
    id: 8,
    name: 'Popular Item',
    price: 120.0,
    reviews: 4.6,
    variants: [{ originPrice: 140.0, salePrice: 120.0 }],
    isSale: true,
  }
]

const carousel = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnZJ7gTDmkou0D2Ey2lWaWLWoRg9vv4SUkJoOcZQd0YHmzGkPERyRqOg8Y3sJi8qndz90&usqp=CAU',
    title: 'picture-1.1',
    description: 'picture-1.2'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpRDn_O2uHFgr92UtMeAwUybn63A0SgVB-bY12st2I3ydXYy5yfs4_fC2FcIiNr-d8Dmw&usqp=CAU',
    title: 'picture-2.1',
    description: 'picture-2.2'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66rNJoXYMwoT34LmZ61gJRAcCrJ6IkaN6mVq8-xAFrr8WFfBTNGAIkRq9PyrMY_aF--E&usqp=CAU',
    title: 'picture-3.1',
    description: 'picture-3.2'
  }
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      
      {/* <Carousel items={carousel} /> */}

      <Header />

      <Accordion />

      <Accordion title="Section 1" content="Content of Section 1" />
      <Accordion title="Section 2" content="Content of Section 2" />
      <Accordion title="Section 3" content="Content of Section 3" />

      <Main products={products} />

      <Footer />
    </>
  )
}

export default App