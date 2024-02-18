import React from "react";
import { Icon } from "../../assets/Icons";
import { Text } from "../Text";

export const Card = ({ img, textHeading, textPara }) => {
    return (
        <>
            <div className="flex items-center justify-center flex-col px-11 border-b border py-6 text-center w-96 rounded-2xl shadow-sm h-96">
                <Icon iconName={img} className='my-6' />
                <Text text={textHeading} styles={{ fontSize: '25px' }} className='my-3 poppins'  />
                <Text text={textPara} className='mb-3'  />
                
                <button className="flex justify-center items-center mb-3">Learn More <Icon iconName='rightarrow' /> </button>
            </div>
        </>
    )
}