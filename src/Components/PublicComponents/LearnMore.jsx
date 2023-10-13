import React from "react";
import { Link } from "react-router-dom";

import Heading from "../../Components/PublicComponents/Heading";

import ButtonChevron from "../../Components/PublicComponents/ButtonChevron";
import { useTranslation } from "../../Lang/Translater";
const LearnMore = () => {
  const { translate, language } = useTranslation();
  return (
    <div data-aos="fade-up" data-aos-offset="150" data-aos-delay="100">
      <Heading
        head={translate("Learn More About")}
        headtwo={translate("AddisSystems?")}
        para={translate("Feel free to ask us")}
      />
      <div className="-mt-8 mb-8 text-center text-lg">
        <Link to="contact" className="inline-block">
          <ButtonChevron text={translate("Contact us")} py={10} px={28} />
        </Link>
      </div>
    </div>
  );
};

export default LearnMore;
