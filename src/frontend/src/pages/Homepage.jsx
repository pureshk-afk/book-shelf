import React from 'react'
import { HomepageContent } from "../components/pageComponents/homepage/HomepageContent";
import { Header } from '../components/common/Header'
import "../styles/homepage.css"

export const Homepage = () => {
  return (
    <>
        <Header />
        <HomepageContent />
    </>
  )
}
