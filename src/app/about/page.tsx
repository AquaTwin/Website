'use client'

import Container from '@/components/container'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const AboutPage = () => {
    return (
        <main className='bg-primary-1'>
            <Header />
            <h1 className='text-center text-title text-5xl font-semibold'>About AQUATWIN</h1>
            <section>
                <Container>
                    <div className='md:flex gap-7'>
                        <div className=''>
                            <Image src='/digital-twin.jpeg' alt="digital twin" width="900" height="400" className='w-full'></Image>
                        </div>
                        <div>
                            <h2 className='text-title text-3xl font-semibold'>What is a digital twin</h2>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque cupiditate vero dolore atque? Laboriosam omnis aperiam eaque, libero fuga sequi molestiae sed error molestias quidem officia quasi exercitationem non.</p>
                        </div>

                    </div>
                </Container>
            </section>
            <section>
                <Container >
                    <div className='relative gap-7 mx-auto max-h-[450px] lg:max-h-[600px] overflow-clip'>

                        <div className='absolute flex flex-col items-center justify-center z-10 bg-[#37373799] text-white w-full h-full'>
                            <h2>Challenges</h2>
                            <p>Lorem, ipsum dolor Lorem, ipsum..</p>
                            <p>Lorem, ipsum dolor Lorem, ipsum..</p>
                            <p>Lorem, ipsum dolor Lorem, ipsum..</p>
                        </div>
                        <div>
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                plugins={[
                                    Autoplay({
                                        delay: 2500,
                                    }),
                                ]}
                            >
                                <CarouselContent className=''>

                                    <CarouselItem className="">
                                        <Image className='object-none object-center h-full w-auto  mx-auto' alt='river usage' width={400} height={400} src="/flooded-river.jpeg"></Image>
                                    </CarouselItem>

                                    <CarouselItem className="">
                                        <Image className='object-cover h-full w-auto' alt='river usage ' width={400} height={400} src="/destroyed-banks1.jpeg"></Image>
                                    </CarouselItem>

                                    <CarouselItem className="">
                                        <Image className='h-full w-auto object-cover' alt='river usage' width={400} height={400} src="/flooded-house.jpeg"></Image>
                                    </CarouselItem>

                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </Container>
            </section>

            <section>
                <Container>
                    <h2 className='text-center text-title text-3xl font-semibold'>Our solution</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempora nobis, ipsum laudantium dolorum quasi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, libero deleniti fugiat dolorum ex aspernatur molestias possimus commodi voluptate! Natus velit dicta dolor quidem accusantium! commodi ducimus rem obcaecati voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, eius facere. Similique, fuga voluptatibus dicta non itaque illum necessitatibus impedit.</p>

                </Container>
            </section>

            <section>
                <Container>
                    <h2 className='text-center text-title text-3xl font-semibold'>River basins of interest</h2>
                    <div className='flex flex-wrap justify-around'>
                        <h2>Omo ---- River basin</h2>
                        <h2>Omo ---- River basin</h2>
                        <h2>Omo ---- River basin</h2>
                        <h2>Omo ---- River basin</h2>
                        <h2>Omo ---- River basin</h2>

                    </div>

                </Container>
            </section>

            <Footer />
        </main>
    )
}

export default AboutPage
