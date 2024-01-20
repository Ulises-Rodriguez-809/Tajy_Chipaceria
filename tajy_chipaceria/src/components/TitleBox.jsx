import React from 'react'

export const TitleBox = ({ topic = "", title = "", title2 = "", textPosition}) => {
    return (
        <>
            <div>
                <p className={textPosition ? "topic fontStyle text-center" : "topic fontStyle"}>{topic}</p>
            </div>
            <div>
                <div className={textPosition ? "title fontStyle text-center" : "title fontStyle"}>
                    <p className='titleText'>
                        {title}
                    </p>
                    <p className='titleText'>
                        {title2}
                    </p>
                </div>
            </div>
        </>
    )
}
