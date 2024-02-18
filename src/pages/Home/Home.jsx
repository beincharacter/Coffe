// Home.jsx

import React from "react";
import { Header } from '../../components/Header/Header';
import { Text } from "../../components/Text";

export const Home = () => {
    return (
        <>
            <Header />
            <div className="hero_header mx-11">
                <div className="text_box w-1/2">
                    <Text
                        className='abrilFatface'
                        text={'Discover the Art of Perfect Coffee.'}
                        styles={{ fontSize: '110px', marginTop: '100px' }}
                    />
                    <Text
                        className='poppins'
                        text={'Experience the difference as we meticulously select and roast the finest beans to create a truly unforgettable cup of coffee. Join us on a journey of taste and awaken your senses, one sip at a time.'}
                        styles={{ fontSize: '16px' }}
                    />
                </div>
            </div>
        </>
    );
};
