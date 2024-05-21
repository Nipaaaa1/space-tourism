import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google"

export const bellefair = Bellefair({
    subsets: ['latin', 'latin-ext'],
    weight: '400',
    variable: '--font-bellefair'
  })
  
export  const barlow = Barlow({
    subsets: ['latin', 'latin-ext'],
    weight: '400',
    variable: '--font-barlow'
  })
  
 export const barlowCondensed = Barlow_Condensed({
    subsets: ['latin', 'latin-ext'],
    weight: '400',
    variable: '--font-barlow-condensed'
  })