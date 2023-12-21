import './Resume.css'
import ResumeBanner from './ResumeBanner'
import Amazon from './images/amazon.png'
import Insitro from './images/insitro.png'
import CCMB from './images/CCMB.png'
import Brown from './images/Brown_University.png'
import alpert_med from './images/alpert_med.png'
import HMS from './images/HMS.png'
import UCD from './images/UCD.png'
import Pointz from './images/Pointz.png'
import NewWheel from './images/new_wheel.png'
import Volumental from './images/volumental.png'
import Fulcrum from './images/fulcrum.png'

const Resume = () =>{

    return(
        <div className='resume-content'>
            <h1>Resume</h1>
            <div className='resume-banners'>
                <ResumeBanner image={Amazon} company={"Amazon"} position={"Software Engineer"} text={"Software development engineer on the entertainment team in Seattle, WA. If you're in the Seattle area, let me know!"}/>
                <ResumeBanner image={Fulcrum} company={"Fulcrum"} position={"Founder"} text={"Developing a platform to reduce the computational overhead for biologists. Offers an intuitive low-code interface to access data cleaning software and complex AI algorithms for analytics and insights"}/>
                <ResumeBanner image={Insitro} company={"Insitro"} position={"Software Eningeer Intern"} text={"Developed, validated and implemented the Differential Phase Contrast imaging algorithm that allows for dynamic modification and parallel computing. The new implementation reduces the image reconstruction runtime by 70%"}/>
                <ResumeBanner image={CCMB} company={"Center for Computational Biology"} position={"Research Assistant"} text={"Developed and managed the counterfactual generation engine project deploying explainable artificial intelligence. The algorithm improves the interpretability of black box models for genomic data by 80%"}/>
                <ResumeBanner image={Brown} company={"Brown University"} position={"Teaching Assistant"} text={"Computational Linguistics: Developed projects focused on natural language processing such as transformers, sentiment analysis and machine translation. Computer Vision: Implemented workshops teaching feature detection, 3D image reconstruction, and convolutional neural networks"}/>
                <ResumeBanner image={alpert_med} company={"Alpert Medical School"} position={"Research Assistant"} text={"Awarded a research grant to predict the COVID mortality rate in the ICU by analyzing physician text and MRI datasets from hospitals. I implemented natural language processing and computer vision for multimodality"}/>
                <ResumeBanner image={HMS} company={"Harvard University"} position={"Research Assistant"} text={"Analyzed correlations between neurological activity and physical behavior in rats by designing a neural network to identify unmarked 3D rat joints using spatial, temporal, and behavioral data with 80% accuracy"}/>
                <ResumeBanner image={UCD} company={"UC Davis"} position={"Research Assistant"} text={"Determined optimal cell confluence to grow COVID vaccines, reducing laboratory resources and time by 50%. Analyzed antibody generation efficacy by designing plasmids, operating flow cytometry, and performing ELISA tests on COVID-infected monkeys"}/>
                <ResumeBanner image={Pointz} company={"Pointz"} position={"Fullstack developer"} text={"I am part of the entertainment team"}/>
                <ResumeBanner image={NewWheel} company={"New Wheel"} position={"Mechanic"} text={"I am part of the entertainment team"}/>
                <ResumeBanner image={Volumental} company={"Volumental"} position={"Software Engineer Intern"} text={"I am part of the entertainment team"}/>
            </div>
        </div>        
    );
}

export default Resume;