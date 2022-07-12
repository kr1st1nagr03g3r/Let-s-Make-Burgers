import React from 'react';
import Navigation from '../../components/Navigation'
import Image from 'next/image'
import CardLast from '../../components/CardLast'
import Footer from '../../components/Footer'
import GreenSpacer from '../../components/GreenSpacer';
import CarouselDD from '../../components/CarouselDD';
import RedHumanCapital from '../../public/images/01drugDiscovery/redTTO.svg'
import Card from '../../components/Card'


class Drugdiscovery extends React.PureComponent {
    state = {}
    render() {
        return (

            <>
                <Navigation />
                <CarouselDD />
                <div>
                    <div className="bg-[#00a122] mt-[-10px] relative flex flex-col content-center px-0">
                        <p className="containerGlobal text-center px-[50px] py-[60px]">Drug discovery is the first phase of pharmaceutical R&D. At this stage, therapeutic targets and their molecular mechanisms are identified, isolated, and characterized. If a target is demonstrated to have a functional role in the disease, a chemical lead with an affinity and selectivity for the target is identified and optimized. Researchers test whether the compound is  “druggable” and can bind to the target by evaluating its pharmacokinetic profile, specifically in terms of absorption, metabolism, and excretion. The compound and additional drug components are then formulated to produce a bioavailable, stable dosage for a specific route administration. </p>
                    </div>
                </div>




                <Card>
                    <div className="basis-1/4 justify-center align-center content-center flex">
                        <Image src={RedHumanCapital} height="100" width="100" alt="" />
                    </div>
                    <div className="basis-3/4">
                        <p><b className="bolder">TTO</b>: Technology Transfer Offices (TTOs) facilitate the protection and management of intellectual property (IP) produced at a particular institution (most often in academic institutions). In the drug discovery stage, they expedite the commercialization of IP created via research by licensing, patenting, or creating spin-offs. </p>
                    </div>
                </Card>

                <Card>
                    <div className="basis-1/4 justify-center align-center content-center flex">
                        <Image src={RedHumanCapital} height="100" width="100" alt="" /></div>
                    <div className="basis-3/4">
                        <p><b className="bolder">Human Capital</b>: Human capital refers to the individual expertise and skills understood to be invaluable for a particular organization or endeavor. In the drug discovery stage, this refers to the institutional ability to hire and retain excellent scientists (including graduate students, post-doctoral researchers, faculty, and lab techs), as well as the ability to execute necessary non-scientific work (e.g. reviewing contracts and IP filings at TTOs). Human capital also includes human subject volunteers who participate in clinical trials.</p>
                    </div>
                </Card>

                <Card>
                    <div className="basis-1/4 justify-center align-center content-center flex">
                        <Image width="60" height="60" alt="" src="https://raw.githubusercontent.com/kr1st1nagr03g3r/Let-s-Make-Burgers/a1647d5f7799390dbafc9856a626724f8daabcdc/public/images/01drugDiscovery/redBeurocraticHurdles.svg" />
                    </div>
                    <div className="basis-3/4">
                        <p><b className="bolder">Bureaucratic Hurdles</b>: Bureaucratic hurdles in the drug discovery stage include but are not limited to filing for human subjects approval, negotiating contracts, managing IP filings, and other organizational issues. Hurdles often occur at points of interaction between different stakeholders (e.g. scientists acquiring lab space within a university, research teams partnering with a contract research organization, TTOs mediating between research teams, administrative staff managing funding and research group members).
                        </p>
                    </div>
                </Card>

                <Card>
                    <div className="basis-1/4 justify-center align-center content-center flex">
                        <Image width="100" height="100" alt="" src="https://raw.githubusercontent.com/kr1st1nagr03g3r/Let-s-Make-Burgers/a1647d5f7799390dbafc9856a626724f8daabcdc/public/images/01drugDiscovery/redBasicScience.svg" />
                    </div>
                    <div className="basis-3/4">
                        <p><b className="bolder">Basic Science</b>: This broad term encompasses includes but is not limited to the scientific process of identifying targets, proof-of-concept studies, in vitro/in vivo testing, species selection, etc.</p>
                    </div>
                </Card>

                <CardLast>
                    <div className="basis-1/4 justify-center align-center content-center flex">
                        <Image width="100" height="100" alt="" src="https://raw.githubusercontent.com/kr1st1nagr03g3r/Let-s-Make-Burgers/a1647d5f7799390dbafc9856a626724f8daabcdc/public/images/01drugDiscovery/redDataSharingPylons.svg" />
                    </div>
                    <div className="basis-3/4">
                        <p><b className="bolder">Data Sharing</b>: Data sharing is critical in the pre-competitive stage, particularly in the context of rare diseases and pediatrics as there are limited patients and few trials and consequently less basic knowledge of diseases, pathways, and drugs. The competitive nature of academic publishing may create a reluctance among scientists to share data for fear of being scooped. Researchers may also encounter challenges to sharing data and know-how within the broader scientific community due to onerous legal agreements, and/or costly or nonexistent sharing platforms/infrastructure (e.g. contracts between CROs or industry partners, NDAs, proprietary sharing platforms and libraries). </p>
                    </div>
                </CardLast>



                {/* <Card>
                        <div className="basis-1/4 justify-center align-center content-center flex">
                            <Image width="100" height="100" alt="" src="" />
                        </div>
                        <div className="basis-3/4">
                        <p><b className="bolder"></b></p>
                        </div>
                    </Card> */}


                <GreenSpacer />
                <Footer />
            </>

        );
    }
}

export default Drugdiscovery;