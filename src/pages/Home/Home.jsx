import React from "react";
import './Home.scss';
import { Header } from '../../components/Header/Header';
import { Text } from "../../components/Text";
import { Icon } from "../../assets/Icons";
import { Card } from "../../components/Cards/Card";

export const Home = () => {
    return (
        <>
            <Header />
            <div className="hero_header flex ml-40">
                <div className="left_box w-1/2">
                    <Text
                        className='abrilFatface'
                        text={'Discover the Art of Perfect Coffee.'}
                        styles={{ fontSize: '110px', marginTop: '100px' }}
                    />
                    <Text
                        className='poppins'
                        text={'Experience the difference as we meticulously select and roast the finest beans to create a truly unforgettable cup of coffee. Join us on a journey of taste and awaken your senses, one sip at a time.'}
                        styles={{ fontSize: '20px' }}
                    />
                    <button className="flex justify-center items-center pl-4 h-11 bg-432010 text-white rounded-full mt-5">
                        <p className="flex ml-0 mr-5">Order Now</p>
                        <Icon iconName='arrow' styles={{ height: '84%' }} />
                    </button>
                    <div className="mt-6 flex">
                        <div className="mr-12">
                            <div  className="text-5xl font-bold">
                                <span>1K</span><span className="text-golden">+</span>
                            </div>
                            <div className="flex text-18 justify-center">Reviews</div>
                        </div>
                        <div className="mr-12">
                            <div  className="text-5xl font-bold">
                                <span>3K</span><span className="text-golden">+</span>
                            </div>
                            <div className="flex text-18 justify-center">Best Sell</div>
                        </div>
                        <div className="mr-12">
                            <div  className="text-5xl font-bold">
                                <span>150K</span><span className="text-golden">+</span>
                            </div>
                            <div className="flex text-18 justify-center">Menu</div>
                        </div>
                    </div>
                </div>


                
                <div className="relative right_box w-1/2">
                    <Text 
                        text={'Coffee'}
                        className='abrilFatface'
                        styles={{ fontSize: '110px', position: 'absolute', right: '10px', top: '20%', zIndex: '1' }}
                    />
                    <Text 
                        text={'Coffee'}
                        className='abrilFatface'
                        styles={{ fontSize: '110px', position: 'absolute', right: '10px', top: '40%'  }}
                    />
                    <Text 
                        text={'Coffee'}
                        className='abrilFatface'
                        styles={{ fontSize: '110px', position: 'absolute', right: '10px', top: '60%'  }}
                    />
                    <Icon iconName='cup' styles={{ width: '100%', height: '100%', zIndex: '5', position: 'relative', backgroundColor:' rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(1px)' }} />
                </div>
            </div>

            <div className="bg-F4EFF1 pt-6 pb-56 relative">

                <div className="flex justify-center font-semibold">
                    <Text
                        className='poppins'
                        text={'OUR DELICIOUS SERVICES'}
                        styles={{ fontSize: '40px' }}
                    />
                </div>

                <div className="flex justify-center mb-20">
                    <Text
                        className='poppins text-center mx-96'
                        text={'we offer a carefully curated collection that showcases the distinct characteristics of beans sourced from specific regions.'}
                        styles={{ fontSize: '20px', marginLeft: '540px', marginRight: '540px' }}
                    />
                </div>

                <div className="flex justify-between  items-center mx-52">
                    <Card img='hotcup' textHeading='Coffee Types' textPara='We offer a tantalizing variety of coffee types to cater to your unique preferences' />
                    <Card img='beans' textHeading='Different Beans' textPara=' We take pride in sourcing and roasting the finest quality beans from around the world.' />
                    <Card img='longcup' textHeading='Cold Coffee' textPara=' We offer a variety of cold coffee options to satisfy your cravings.' />
                </div>

                <Icon iconName='coffeeStrip' styles={{ width: '100%', bottom: '-50%' }} className='my-16 absolute z-10' />

            </div>

            

            <div className=" relative pt-96">

                <div className="flex justify-center font-semibold">
                    <Text
                        className='poppins'
                        text={'ENJOY A NEW BLEND OF COFFEE STYLE'}
                        styles={{ fontSize: '40px' }}
                    />
                </div>

                <div className="flex justify-center mb-20">
                    <Text
                        className='poppins text-center'
                        text={'Explore all flavours of coffee with us. There is always a new cup worth experiencing'}
                        styles={{ fontSize: '20px', marginLeft: '700px', marginRight: '700px' }}
                    />
                </div>

            </div>
        </>
    );
};
