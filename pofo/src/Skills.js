import SkillsBanner from './SkillsBanner'

import R from './images/skills-icons/R.png'
import CSS from './images/skills-icons/CSS.png'
import HTML from './images/skills-icons/HTML.png'
import java from './images/skills-icons/java.png'
import python from './images/skills-icons/python.png'
import golang from './images/skills-icons/golang.png'
import matlab from './images/skills-icons/MATLAB.png'
import javascript from './images/skills-icons/javascript.png'
import React_logo from './images/skills-icons/React.png'
import SQL from './images/skills-icons/SQL.png'

import AWS from './images/skills-icons/AWS.png'
import GCP from './images/skills-icons/GCP.png'
import docker from './images/skills-icons/docker.png'
import django from './images/skills-icons/django.png'
import JAX from './images/skills-icons/JAX.png'
import git from './images/skills-icons/git.png'
import Keras from './images/skills-icons/Keras.png'
import NodeJS from './images/skills-icons/NodeJS.png'
import Numpy from './images/skills-icons/Numpy.png'
import Pytorch from './images/skills-icons/Pytorch.png'
import Ray from './images/skills-icons/Ray.png'
import scikit from './images/skills-icons/scikit.png'
import tensorflow from './images/skills-icons/tensorflow.png'
import SQlite from './images/skills-icons/sqlite.png'
import pandas from './images/skills-icons/pandas.png'
import opencv from './images/skills-icons/opencv.png'
import spacy from './images/skills-icons/spacy.png'
import mongodb from './images/skills-icons/MongoDB.png'
import flask from './images/skills-icons/flask.png'
import postgresql from './images/skills-icons/postgresql.png'
import mysql from './images/skills-icons/mySQL.png'
import seaborn from './images/skills-icons/seaborn.png'
import NLTK from './images/skills-icons/NLTK.png'
import bokeh from './images/skills-icons/bokeh.png'

import figma from './images/skills-icons/figma.png'
import balsamiq from './images/skills-icons/balsamiq.png'
import slack from './images/skills-icons/slack.png'
import miro from './images/skills-icons/miro.png'
import trello from './images/skills-icons/trello.png'
import confluence from './images/skills-icons/confluence.png'
import monday from './images/skills-icons/monday.png'
import jira from './images/skills-icons/jira.png'
import notion from './images/skills-icons/notion.png'
import zapier from './images/skills-icons/zapier.png'
import adobe from './images/skills-icons/adobe.png'
import autodesk from './images/skills-icons/autodesk.png'
import solidworks from './images/skills-icons/solidworks.png'
import google from './images/skills-icons/g-suite.png'
import microsoft from './images/skills-icons/microsoft-suite.png'

const programing_languages = [
    { imageUrl: python, description: 'Python' },
    { imageUrl: R, description: 'R Studio' },
    { imageUrl: java, description: 'Java' },
    { imageUrl: javascript, description: 'Javascript' },
    { imageUrl: golang, description: 'Golang' },
    { imageUrl: matlab, description: 'MATLAB' },
    { imageUrl: React_logo, description: 'React' },
    { imageUrl: SQL, description: 'SQL' },
    { imageUrl: HTML, description: 'HTML' },
    { imageUrl: CSS, description: 'CSS' }
];

const programing_packages = [
    { imageUrl: AWS, description: 'Amazon Web Services' },
    { imageUrl: GCP, description: 'Google Cloud Computing' },
    { imageUrl: docker, description: 'Docker' },
    { imageUrl: django, description: 'django' },
    { imageUrl: JAX, description: 'JAX' },
    { imageUrl: git, description: 'git' },
    { imageUrl: Keras, description: 'Keras' },
    { imageUrl: NodeJS, description: 'NodeJS' },
    { imageUrl: Numpy, description: 'Numpy' },
    { imageUrl: Pytorch, description: 'Pytorch' },
    { imageUrl: Ray, description: 'Ray' },
    { imageUrl: scikit, description: 'scikit' },
    { imageUrl: tensorflow, description: 'tensorflow' },
    { imageUrl: SQlite, description: 'SQlite' },
    { imageUrl: pandas, description: 'pandas' },
    { imageUrl: opencv, description: 'opencv' },
    { imageUrl: spacy, description: 'spacy' },
    { imageUrl: mongodb, description: 'mongodb' },
    { imageUrl: flask, description: 'flask' },
    { imageUrl: postgresql, description: 'postgresql' },
    { imageUrl: mysql, description: 'mysql' },
    { imageUrl: seaborn, description: 'seaborn' },
    { imageUrl: NLTK, description: 'NLTK' },
    { imageUrl: bokeh, description: 'bokeh' },
];

const prject_management = [
    { imageUrl: figma, description: 'figma' },
    { imageUrl: balsamiq, description: 'balsamiq' },
    { imageUrl: slack, description: 'slack' },
    { imageUrl: miro, description: 'miro' },
    { imageUrl: trello, description: 'trello' },
    { imageUrl: confluence, description: 'confluence' },
    { imageUrl: monday, description: 'monday' },
    { imageUrl: jira, description: 'jira' },
    { imageUrl: notion, description: 'notion' },
    { imageUrl: zapier, description: 'zapier' },
    { imageUrl: adobe, description: 'adobe' },
    { imageUrl: autodesk, description: 'autodesk' },
    { imageUrl: solidworks, description: 'solidworks' },
    { imageUrl: google, description: 'google' },
    { imageUrl: microsoft, description: 'microsoft' },
];

const Component = ({data}) => {
    return (<div className='skills-box'>
        {data && data.map((item, index) => (
            <div className='skills' key={index}>
                <img className='skills-img' src={item.imageUrl} alt={`${index + 1}`} />
                <p>{item.description}</p>
            </div>
            ))}
    </div>);
}

const Skills = () => {

    return(
        <div className='skills-content'>
            <div id='SKILLS_PAGE' className='skills-page'>
                <h1>Skills</h1>
            </div>
            <div className='skills-banner'>
                <SkillsBanner text="Programing Languages" Component={() => <Component data={programing_languages} />}/>
                <SkillsBanner text="Programing Packages" Component={() => <Component data={programing_packages} />}/>
                <SkillsBanner text="Project Management & Design" Component={() => <Component data={prject_management} />}/>
                {/* <SkillsBanner text="Programing Packages" data={programing_packages}/>
                <SkillsBanner text="Project Management & Design" data={prject_management}/> */}
            </div>
        </div>
    );
}

export default Skills;