import React from 'react'

export const AboutUsSmallScreen = ({path, name, text1, text2, text3, text4}) => {
    return (
        <div className=' mb-5'>
            <div className={name === "imgSmallScreenLeft" ? `textAU textRigth` : `textAU textLeft`}>
                {text1}
            </div>
            <div>
                <img src={path} alt={name} className={name === "imgSmallScreenLeft" ? `imgSmallScreen ${name}` : `imgSmallScreen ${name}`} hspace="5" vspace="5" />
            </div>
            <div>
                <div>
                    <div className={name === "imgSmallScreenLeft" ? `textAU textRigth` : `textAU textLeft`}>
                        {text2}
                    </div>
                    <div className={name === "imgSmallScreenLeft" ? `textAU textRigth` : `textAU textLeft`}>
                        {text3}
                    </div>
                </div>
            </div>
            <div className={name === "imgSmallScreenLeft" ? `textAU textRigth` : `textAU textLeft`}>
                {text4}
            </div>
        </div>
    )
}
