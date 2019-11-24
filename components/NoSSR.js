// REACT & NEXT
import React from 'react'
import Head from 'next/head'

// STATE
import { StateProvider } from '../state/state'
import InitialState from '../state/initialState'
import Reducer from '../state/reducer'
import PageContents from './PageContents'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <StateProvider initialState={InitialState} reducer={Reducer}>
      <PageContents />
    </StateProvider >
    <style jsx>{`
      @font-face {
        font-family: 'roobert';
        src: url("../fonts/Roobert-Regular.eot");
        src: url("../fonts/Roobert-Regular.woff") format("woff");
      }

      @font-face {
        font-family: 'roobert';
        src: url("../fonts/Roobert-Bold.eot");
        src: url("../fonts/Roobert-Bold.woff") format("woff");
        font-weight: bold;
      }

      @font-face {
        font-family: 'roobert';
        src: url("../fonts/Roobert-Light.eot");
        src: url("../fonts/Roobert-Light.woff") format("woff");
        font-weight: 100;
      }
    `}</style>
  </div>
)

export default Home



