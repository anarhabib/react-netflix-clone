import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
      <Main/>
      <Row RowID='1' title="Upcoming" fetchURL={requests.requestUpcoming}/>
      <Row RowID='2' title="Popular" fetchURL={requests.requestPopular}/>
      <Row RowID='3' title="Top Rated" fetchURL={requests.requestTopRated}/>
      <Row RowID='4' title="Horror" fetchURL={requests.requestHorror}/>
      <Row RowID='5' title="Trending" fetchURL={requests.requestTrending}/>
    </>
  )
}

export default Home