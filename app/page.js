"use client"
import Header from './components/header'
import SearchFlats from './components/searchFlats'
import Buildings from './components/buildings'
import Town from './components/town'
import Contact from './components/contact'
import { useEffect, useState } from 'react'
import PageLayout from './components/PageLayout'

const headerInfo = {
  title: 'Zamieszkaj in house',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a purus a mauris tincidunt fringilla et tincidunt justo. Praesent luctus pellentesque dui, vitae sodales augue tristique eu.',
  img: 'https://img.freepik.com/darmowe-zdjecie/3d-rendering-loft-luksusowy-zywy-pokoj-z-polka-na-ksiazki_105762-2099.jpg?w=1380&t=st=1705484660~exp=1705485260~hmac=7a90fd58a9c0c80864362fd010059be41566ba4bbf14b4b0a534ac8c284608c5'
}

const searchFlatsInfo = {
  id: 'searchFlats',
  title: 'Znajdź swoje wymarzone mieszkanie',
  img1: 'https://img.freepik.com/darmowe-zdjecie/3d-rendering-loft-luksusowy-zywy-pokoj-z-polka-na-ksiazki_105762-2099.jpg?w=1380&t=st=1705484660~exp=1705485260~hmac=7a90fd58a9c0c80864362fd010059be41566ba4bbf14b4b0a534ac8c284608c5',
  img2: 'https://img.freepik.com/darmowe-zdjecie/3d-rendering-loft-luksusowy-zywy-pokoj-z-polka-na-ksiazki_105762-2099.jpg?w=1380&t=st=1705484660~exp=1705485260~hmac=7a90fd58a9c0c80864362fd010059be41566ba4bbf14b4b0a534ac8c284608c5'
}

const buildingsInfo = {
  id: 'town',
  title: 'Dostępne oferty',
  desc: 'wybierz interesujący Cię budynek',
  items: [
    {
      id: 1,
      title: `Budynek 001`,
      street: `ul. Akacjowa`,
      availableNumber: 15,
      maxNumber: 20
    },
    {
      id: 2,
      title: `Budynek 002`,
      street: `ul. Akacjowa`,
      availableNumber: 12,
      maxNumber: 20
    },
    {
      id: 3,
      title: `Budynek 003`,
      street: `ul. Akacjowa`,
      availableNumber: 19,
      maxNumber: 20
    }
  ]
}

const okolicaInfo = {
  id: 'discover-town',
  title: 'Poznaj okolicę',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a purus a mauris tincidunt fringilla et tincidunt justo. Praesent luctus pellentesque dui, vitae sodales augue tristique eu.',
  img1: 'https://img.freepik.com/darmowe-zdjecie/3d-rendering-loft-luksusowy-zywy-pokoj-z-polka-na-ksiazki_105762-2099.jpg?w=1380&t=st=1705484660~exp=1705485260~hmac=7a90fd58a9c0c80864362fd010059be41566ba4bbf14b4b0a534ac8c284608c5',
  img2: 'https://img.freepik.com/darmowe-zdjecie/3d-rendering-loft-luksusowy-zywy-pokoj-z-polka-na-ksiazki_105762-2099.jpg?w=1380&t=st=1705484660~exp=1705485260~hmac=7a90fd58a9c0c80864362fd010059be41566ba4bbf14b4b0a534ac8c284608c5'
}

const contactInfo = {
  title: 'Skontaktuj się z nami!',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a purus a mauris tincidunt fringilla et tincidunt justo. Praesent luctus pellentesque dui, vitae sodales augue tristique eu.',
  mail: `contact@inhouse.test`,
  tel: `+48 122 122 122`
}

export default function Home() {
  const [headerDetails, setHeaderDetails] = useState(headerInfo)
  const [searchFlatsDetails, setSearchFlatsDetails] = useState(searchFlatsInfo)
  const [buildingsDetails, setBuildingsDetails] = useState(buildingsInfo)
  const [okolicaDetails, setOkolicaDetails] = useState(okolicaInfo)
  const [contactDetails, setContactDetails] = useState(contactInfo)

  return (
    <PageLayout>
      <Header title={headerDetails.title} 
              desc={headerDetails.description} 
              img={headerDetails.img}/>
      <SearchFlats anchor={searchFlatsDetails.id}
                   title={searchFlatsDetails.title}
                   desc={searchFlatsDetails.desc}/>
      <Buildings anchor={buildingsDetails.id}
                 title={buildingsDetails.title}
                 desc={buildingsDetails.desc}
                 items={buildingsDetails.items}/>
      <Town anchor={okolicaDetails.id}
            title={okolicaDetails.title}
            desc={okolicaDetails.description}/>
      <Contact anchor={contactDetails.id}
              title={contactDetails.title}
              desc={contactDetails.description}
              tel={contactDetails.tel}
              mail={contactDetails.mail}/>
    </PageLayout>
  )
}
