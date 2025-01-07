import React from 'react'
import Searchbar from "@/components/Searchbar"
import HeroCarousel from "@/components/HeroCarousel"

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Track Amazon's Best Prices Here:
            </p>
            <h1 className="head-text">
            Save more on your favorite products
            </h1>
            <p className="mt-6">Stay ahead of every deal with real-time price tracking, historical price analysis, and smart alerts to ensure you never miss out on the best discounts.</p>

            <Searchbar></Searchbar>
          </div>

          <HeroCarousel></HeroCarousel>

        </div>
      </section>
    </>
  )
}

export default Home