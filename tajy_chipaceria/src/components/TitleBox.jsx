import React from 'react'

export const TitleBox = ({ topic = "", title = "", title2 = "", textPosition, colorText = true }) => {


    return (
        <>
        {colorText && <div>
            {topic && <div>
                <p className={textPosition ? "topic fontStyle text-center" : "topic fontStyle"}>{topic}</p>
            </div>}

            {title && <div>
                <div className={textPosition ? "title fontStyle text-center" : "title fontStyle"}>
                    <p className='titleText' style={{color : colorText.color1}}>
                    {title}
                    </p>
                    <p className='titleText' style={{color : colorText.color2}}>
                    {title2}
                    </p>
                </div>
            </div>}
        </div>}
        </>
    )
}
