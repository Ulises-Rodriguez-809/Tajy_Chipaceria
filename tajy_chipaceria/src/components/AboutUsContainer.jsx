import React from 'react'
import { TextBox } from './TextBox'

export const AboutUsContainer = ({ id, text = null, path, name, isScreenSmall, text1 = null, text2 = null, text3 = null, text4 = null }) => {

    return (
        <>
            {!isScreenSmall ? <div className='row mb-5'>
                <div className="col-lg-4 auImgContainer">
                    <img src={path} alt={name} className={name} />
                </div>
                <div className={(id === 1) ? "col-lg-8 order-lg-first" : "col-lg-8"}>
                    <TextBox key={id} text={text} />
                </div>
            </div> : <div className=' mb-5'>
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

            }
        </>
    )
}
