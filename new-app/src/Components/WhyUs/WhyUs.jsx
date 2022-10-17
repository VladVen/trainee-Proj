import './WhyUs.css'
import peoples from "../../assets/WhyUsImg/img.png"
import flight from "../../assets/WhyUsImg/img_1.png"
import accomodation from "../../assets/WhyUsImg/img_2.png"
import tours from "../../assets/WhyUsImg/img_3.png"
import another from "../../assets/WhyUsImg/img_4.png"

export const WhyUs = () => {
  return(
      <div className="section">
          <div className="leftSide">
              <img src={peoples} alt="peoples" />
          </div>
          <div className="rightSide">
              <div className="titleSection">
                  <div>
                      Why Choose Us
                  </div>
                  <div>
                      Enjoy different experiences in every place you visit and discover new and affordable adventures of
                      course.
                  </div>
              </div>
              <div className="sectionList">
                  <img src={flight} alt="flight Tickets" />
                      <img src={accomodation} alt="Accomodation" />
                          <img src={tours} alt="Packaged tour" />
                              <img src={another} alt="another" />
              </div>
          </div>
      </div>
  )
}