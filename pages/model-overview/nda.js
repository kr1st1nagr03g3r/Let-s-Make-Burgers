import React from 'react';
import Navigation from '../../components/Navigation'
import Image from 'next/image'
import CardLast from '../../components/CardLast'
import Footer from '../../components/Footer'
import GreenSpacer from '../../components/GreenSpacer';
import CarouselPC from '../../components/CarouselNDA';
import Card from '../../components/Card'
import NDAbHurdles from "../../public/images/06NDA/NDAbHurdles.svg"
import NDAregAgency from "../../public/images/06NDA/NDAregAgency.svg"



const NDA = () => {

  return (

    <>
      <Navigation />
      <CarouselPC />
      <div>
        <div className="bg-[#00a122] mt-[-10px] relative flex flex-col content-center px-0">
          <p className="containerGlobal text-center px-[50px] py-[60px]">If in P3 trials the drug is found to be safe and effective for its intended use, the investigator may submit a New Drug Application (NDA) to their regulatory oversight body.The NDA includes all data compiled at each stage, from discovery through P3 trials, and information related to labeling, safety, prescribing, and patents.Once received by the regulatory agency, the NDA is reviewed and either approved or denied for marketing and distribution within a particular jurisdiction.</p>
        </div>
      </div>

      <Card>
        <div id="regAgency" className="basis-1/4 justify-center align-center content-center flex" >
          <Image src={NDAregAgency} height="100" width="100" alt="" />
        </div>
        <div className="basis-3/4">
          <p><b className="bolder">Regulatory Agency</b>: At the NDA (or analogous) stage, regulatory agencies are responsible for reviewing all data compiled at each previous stage of research and development, from discovery through P3 trials, including information related to labeling, safety, prescribing, and patents. Following review, a regulatory agency will either approve or deny the new drug application for marketing and distribution.</p>
        </div>
      </Card>

      <CardLast>
        <div id="NDAHurdles" className="basis-1/4 justify-center align-center content-center flex">
          <Image src={NDAbHurdles} width="100" height="100" alt="" />
        </div>
        <div className="basis-3/4">
          <p><b className="bolder">Bureaucratic Hurdles</b>: Regulatory compliance in and of itself presents a barrier, simply given the sheer volume of data required by regulatory agencies to demonstrate the safety and efficacy of a drug for clinical use in humans. </p>
        </div>
      </CardLast>



      <GreenSpacer />
      <Footer />
    </>

  );
}


export default NDA