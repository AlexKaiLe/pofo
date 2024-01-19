import './Resume.css'
import Button from '@mui/material/Button';

import ResumeBanner from './ResumeBanner'
import Amazon from './images/resume/amazon.png'
import Insitro from './images/resume/insitro.png'
import CCMB from './images/resume/CCMB.png'
import Brown from './images/resume/Brown_University.png'
import alpert_med from './images/resume/alpert_med.png'
import HMS from './images/resume/HMS.png'
import UCD from './images/resume/UCD.png'
import Pointz from './images/resume/Pointz.png'
import NewWheel from './images/resume/new_wheel.png'
import Volumental from './images/resume/volumental.png'
import Fulcrum from './images/resume/fulcrum.png'
import ResumePDF from './images/resume/Alexander_Le_Resume.pdf';

const AmazonComponent = () => {
    return (
        <div className='banner'>
            <div className="image-container">
                <img src={Amazon} alt="Work Experience"/>
                <h2>Amazon</h2>
                <p>Software Development Engineer</p>
            </div>
            <div className='description'>
                <p><u>Jan 2024 - Present</u></p>
                <ul>
                    <li>Software development engineer on the entertainment team in Seattle, WA.</li>
                    <li>If you're in the Seattle area, let me know!</li>
                </ul>
            </div>
        </div>
    );
}
const FulcrumComponent = () => {
    return (
        <div className='banner'>
            <div className="image-container">
                <img src={Fulcrum} alt="Work Experience"/>
                <h2>Fulcrum Bionet</h2>
                <p>Founder</p>
            </div>
            
            <div className='description'>
                <p><u>Jan 2024 - Present</u></p>
                <ul>
                    <li>Developing a platform to reduce the computational overhead for biologists.</li>
                    <li>Offers an intuitive low-code interface to access data cleaning software and complex AI algorithms for analytics and insights.</li>
                </ul>
            </div>
        </div>
    );
}

const InsitroComponent = () => {
    return (
        <div className='banner'>
            <div className="image-container">
                <img src={Insitro} alt="Work Experience"/>
                <h2>Insitro</h2>
                <p>Software Eningeering Imaging Intern</p>
            </div>
            
            <div className='description'>
                <p><u>Jan 2024 - Present</u></p>
                <ul>
                    <li>Developed, validated and implemented the Differential Phase Contrast imaging algorithm that allows for dynamic modification and parallel computing.</li>
                    <li>The new implementation reduces the image reconstruction runtime by 70%.</li>
                </ul>
            </div>
        </div>
    );
}

const CCMBComponent = () => {
    return (
        <div className='banner'>
            <div className="image-container">
                <img src={CCMB} alt="Work Experience"/>
                <h2>Center for Computational Biology</h2>
                <p>Deep Learning Research Assistant</p>
            </div>
            
            <div className='description'>
                <p><u>Jan 2024 - Present</u></p>
                <ul>
                    <li>Developed and managed the counterfactual generation engine project deploying explainable artificial intelligence.</li>
                    <li>The algorithm improves the interpretability of black box models for genomic data by 80%.</li>
                </ul>
            </div>
        </div>
    );
}

const BrownComponent = () => {
    return (
        <div className='banner'>
            <div className="image-container">
                <img src={Brown} alt="Work Experience"/>
                <h2>Brown University</h2>
                <p>CS Teaching Assistant</p>
            </div>
            
            <div className='description'>
                <p><u>Jan 2024 - Present</u></p>
                <ul>
                    <li><b>Computational Linguistics:</b> Developed projects focused on natural language processing such as transformers, sentiment analysis and machine translation.</li>
                    <li><b>Computer Vision:</b> Implemented workshops teaching feature detection, 3D image reconstruction, and convolutional neural networks.</li>
                </ul>
            </div>
        </div>
    );
}

const AlpertComponent = () => {
    return (
        <div className='banner'>
            <div className="image-container">
                <img src={alpert_med} alt="Work Experience"/>
                <h2>Warren Alpert Medical School</h2>
                <p>Radiology ML Research Assistant</p>
            </div>
            
            <div className='description'>
                <p><u>Jan 2024 - Present</u></p>
                <ul>
                    <li>Awarded the UTRA research grant to predict the COVID mortality rate in the ICU by analyzing physician text and MRI datasets from hospitals.</li>
                    <li>I implemented natural language processing and computer vision for multimodality</li>
                </ul>
            </div>
        </div>
    );
}

const HMSComponent = () => {
    return (
        <div className='banner'>
            <div className="image-container">
                <img src={HMS} alt="Work Experience"/>
                <h2>Harvard University</h2>
                <p>NSF Neuroscience Artificial Intelligence Research Assistant</p>
            </div>
            
            <div className='description'>
                <p><u>Jan 2024 - Present</u></p>
                <ul>
                    <li>Analyzed correlations between neurological activity and physical behavior in rats by designing a neural network.</li>
                    <li>Identified unmarked 3D rat joints using spatial, temporal, and behavioral data with 80% accuracy.</li>
                </ul>
            </div>
        </div>
    );
}

const UCDComponent = () => {
    return (
        <div className='banner'>
            <div className="image-container">
                <img src={UCD} alt="Work Experience"/>
                <h2>UC Davis</h2>
                <p>HIV & COVID Vaccine Research Assistant</p>
            </div>
            
            <div className='description'>
                <p><u>Jan 2024 - Present</u></p>
                <ul>
                    <li>Determined optimal cell confluence to grow COVID vaccines, reducing laboratory resources and time by 50%.</li>
                    <li>Analyzed antibody generation efficacy by designing plasmids, operating flow cytometry, and performing ELISA tests on COVID-infected monkeys.</li>
                </ul>
            </div>
        </div>
    );
}

const PointzComponent = () => {
    return (
        <div className='banner'>
            <div className="image-container">
                <img src={Pointz} alt="Work Experience"/>
                <h2>Pointz</h2>
                <p>HIV & COVID Vaccine Research Assistant</p>
            </div>
            
            <div className='description'>
                <p><u>Jan 2024 - Present</u></p>
                <ul>
                    <li>Determined optimal cell confluence to grow COVID vaccines, reducing laboratory resources and time by 50%.</li>
                    <li>Analyzed antibody generation efficacy by designing plasmids, operating flow cytometry, and performing ELISA tests on COVID-infected monkeys.</li>
                </ul>
            </div>
        </div>
    );
}
const NewWheelComponent = () => {
    return (
        <div className='banner'>
            <div className="image-container">
                <img src={NewWheel} alt="Work Experience"/>
                <h2>New Wheel</h2>
                <p>HIV & COVID Vaccine Research Assistant</p>
            </div>
            
            <div className='description'>
                <p><u>Jan 2024 - Present</u></p>
                <ul>
                    <li>Determined optimal cell confluence to grow COVID vaccines, reducing laboratory resources and time by 50%.</li>
                    <li>Analyzed antibody generation efficacy by designing plasmids, operating flow cytometry, and performing ELISA tests on COVID-infected monkeys.</li>
                </ul>
            </div>
        </div>
    );
}
const VolumentalComponent = () => {
    return (
        <div className='banner'>
            <div className="image-container">
                <img src={Volumental} alt="Work Experience"/>
                <h2>Volumental</h2>
                <p>HIV & COVID Vaccine Research Assistant</p>
            </div>
            
            <div className='description'>
                <p><u>Jan 2024 - Present</u></p>
                <ul>
                    <li>Determined optimal cell confluence to grow COVID vaccines, reducing laboratory resources and time by 50%.</li>
                    <li>Analyzed antibody generation efficacy by designing plasmids, operating flow cytometry, and performing ELISA tests on COVID-infected monkeys.</li>
                </ul>
            </div>
        </div>
    );
}

const buttonStyle = {
    border: 'none',
    margin: '5px 0',
    cursor: 'pointer',
    borderRadius: '5px',
    textTransform: 'none',
    '&:hover': {
    },
  };

const ResumeComponent = () => {
    const pdfViewerLink = ResumePDF; // Replace this with the appropriate PDF viewer link

    const handleViewPDF = () => {
      window.open(pdfViewerLink, '_blank');
    };
  
    const handleDownloadPDF = () => {
      window.location.href = ResumePDF; // Directly trigger the download
    };
    return (
        <div className='download-resume'>
            <iframe
                title="PDF Preview"
                className='pdf-iframe'
                src={ResumePDF}
            ></iframe>
            <div className='resume-container'>
                <Button variant="contained" sx={buttonStyle} onClick={handleViewPDF}>
                    View Resume
                </Button>
                <Button variant="contained" sx={buttonStyle} onClick={handleDownloadPDF}>
                    Download Resume
                </Button>
            </div>
        </div>
    );
}

const Resume = ({theme}) =>{

    return(
        <div className='resume-content'>
            <div id='RESUME_PAGE' className='Resume-Page' style={{color: theme.palette.light_dark.main}}>
                <h1>Resume</h1>
            </div>
            <div className='resume-center'>
                <div className='resume-banners'>
                    <ResumeBanner Component={AmazonComponent} BannerStyle='banner-container'/>
                    <ResumeBanner Component={FulcrumComponent} BannerStyle='banner-container'/>
                    <ResumeBanner Component={InsitroComponent} BannerStyle='banner-container'/>
                    <ResumeBanner Component={CCMBComponent} BannerStyle='banner-container'/>
                    <ResumeBanner Component={BrownComponent} BannerStyle='banner-container'/>
                    <ResumeBanner Component={AlpertComponent} BannerStyle='banner-container'/>
                    <ResumeBanner Component={HMSComponent} BannerStyle='banner-container'/>
                    <ResumeBanner Component={UCDComponent} BannerStyle='banner-container'/>
                    <ResumeBanner Component={PointzComponent} BannerStyle='banner-container'/>
                    <ResumeBanner Component={NewWheelComponent} BannerStyle='banner-container'/>
                    <ResumeBanner Component={VolumentalComponent} BannerStyle='banner-container'/>
                    <ResumeBanner Component={ResumeComponent} BannerStyle='banner-container-resume'/>
                </div>
            </div>
        </div>        
    );
}

export default Resume;