import ProjectsBanner from './ProjectsBanner'

const Projects = ({isHovered, setIsHovered}) => {
    return (
        <div className='projects-content'>
            <div id='PROJECTS_PAGE'>
                <h1>Projects</h1>
            </div>
            <ProjectsBanner isHovered={isHovered} setIsHovered={setIsHovered}></ProjectsBanner>
            <ProjectsBanner isHovered={isHovered} setIsHovered={setIsHovered}></ProjectsBanner>
            <ProjectsBanner isHovered={isHovered} setIsHovered={setIsHovered}></ProjectsBanner>
            <ProjectsBanner isHovered={isHovered} setIsHovered={setIsHovered}></ProjectsBanner>
            <ProjectsBanner isHovered={isHovered} setIsHovered={setIsHovered}></ProjectsBanner>
        </div>
    );
}

export default Projects;