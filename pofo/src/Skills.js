import SkillsBanner from './SkillsBanner'

import R from './images/logos/R.png'
import CSS from './images/logos/CSS.png'
import HTML from './images/logos/HTML.png'
import java from './images/logos/java.png'
import python from './images/logos/python.png'
import golang from './images/logos/golang.png'
import matlab from './images/logos/MATLAB.png'
import javascript from './images/logos/javascript.png'
import React_logo from './images/logos/React.png'
import SQL from './images/logos/SQL.png'

import AWS from './images/logos/AWS.png'
import GCP from './images/logos/GCP.png'
import docker from './images/logos/docker.png'
import django from './images/logos/django.png'
import JAX from './images/logos/JAX.png'
import git from './images/logos/git.png'
import Keras from './images/logos/Keras.png'
import NodeJS from './images/logos/NodeJS.png'
import Numpy from './images/logos/Numpy.png'
import Pytorch from './images/logos/Pytorch.png'
import Ray from './images/logos/Ray.png'
import scikit from './images/logos/scikit.png'
import tensorflow from './images/logos/tensorflow.png'
import SQlite from './images/logos/sqlite.png'
import pandas from './images/logos/pandas.png'
import opencv from './images/logos/opencv.png'
import spacy from './images/logos/spacy.png'
import mongodb from './images/logos/MongoDB.png'
import flask from './images/logos/flask.png'
import postgresql from './images/logos/postgresql.png'
import mysql from './images/logos/mySQL.png'
import seaborn from './images/logos/seaborn.png'
import NLTK from './images/logos/NLTK.png'
import bokeh from './images/logos/bokeh.png'

import figma from './images/logos/figma.png'
import balsamiq from './images/logos/balsamiq.png'
import slack from './images/logos/slack.png'
import miro from './images/logos/miro.png'
import trello from './images/logos/trello.png'
import confluence from './images/logos/confluence.png'
import monday from './images/logos/monday.png'
import jira from './images/logos/jira.png'
import notion from './images/logos/notion.png'
import zapier from './images/logos/zapier.png'
import adobe from './images/logos/adobe.png'
import autodesk from './images/logos/autodesk.png'
import solidworks from './images/logos/solidworks.png'

const Skills = () => {
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
    ];
    return(
        <div className='skills-content'>
            <h1>Skills</h1>
            <div className='skills-banner'>
                <SkillsBanner text="Programing Languages" data={programing_languages}/>
                <SkillsBanner text="Programing Packages" data={programing_packages}/>
                <SkillsBanner text="Project Management" data={prject_management}/>
            </div>
        </div>
    );
}

export default Skills;