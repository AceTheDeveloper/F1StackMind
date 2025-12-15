import React from 'react'
import hero_image from '../src/assets/img/F1 STACKMIND.png'

function Hero() {
  return (
    <section id="home"
            className="bg-neutral-900 text-white min-h-[calc(100vh-80px)] flex items-center px-6 py-16 md:py-0"
            data-aos="fade-up">
            <div
                className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">

                <div className="flex-1 text-center md:text-left" data-aos="fade-right" data-aos-delay="100">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 tracking-tight" data-aos="fade-up"
                        data-aos-delay="200">
                        Fueling Innovation Through Technology
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-400 mb-6" data-aos="fade-up" data-aos-delay="300">
                        F1StackMind is more than a tech org — we're a community of forward-thinkers, coders, and
                        builders shaping the future.
                    </p>
                    <a href="#about"
                        className="inline-block px-6 py-3 text-lg font-semibold border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300"
                        data-aos="fade-up" data-aos-delay="400">
                        Learn More
                    </a>
                </div>

                <div className="flex-1" data-aos="zoom-in" data-aos-delay="500">
                    <img src={hero_image}
                        className="w-full max-w-md mx-auto object-contain" />
                </div>
            </div>
        </section>
  )
}

export default Hero