import './Resume.css'
import ResumeBanner from './ResumeBanner'
import Amazon from './images/amazon.png'

const Resume = () =>{

    return(
        <div className='resume-content'>
            <ResumeBanner image={Amazon} company={"Amazon"} text={"I am part of the entertainment team"}/>
            <ResumeBanner image={Amazon} company={"Insitro"} text={"I am part of the entertainment team"}/>
            <ResumeBanner image={Amazon} company={"Center for Computational Biology"} text={"I am part of the entertainment team"}/>
            <ResumeBanner image={Amazon} company={"Brown University"} text={"I am part of the entertainment team"}/>
            <ResumeBanner image={Amazon} company={"Harvard University"} text={"I am part of the entertainment team"}/>
            <ResumeBanner image={Amazon} company={"UC Davis"} text={"I am part of the entertainment team"}/>
            <ResumeBanner image={Amazon} company={"One Wheel"} text={"I am part of the entertainment team"}/>
            <ResumeBanner image={Amazon} company={"Volumental"} text={"I am part of the entertainment team"}/>
        </div>
        
    );
}

export default Resume;