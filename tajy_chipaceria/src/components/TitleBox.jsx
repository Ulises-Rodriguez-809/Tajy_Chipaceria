import React from 'react'

export const TitleBox = ({ topic, title, textPosition }) => {
    return (
        <>
            <div>
                <p className={textPosition ? "topic fontStyle text-center" : "topic fontStyle"}>{topic}</p>
            </div>
            <div>
                <p className={textPosition ? "title fontStyle text-center" : "title fontStyle"}>{title}</p>
            </div>
        </>
    )
}
