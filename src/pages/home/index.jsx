import React from 'react';
import './style.css';


export const Home = () => {
  return (

        // <title>Rachael Yonoff Portfolio</title>

        // <link href="/style.css" rel="stylesheet" />
        // <script defer src="/main.js"></script>
        // <script
        //   defer
        //   src="https://kit.fontawesome.com/6fa78451e4.js"
        //   crossorigin="anonymous"
        // ></script>
        // <link
        //   rel="stylesheet"
        //   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        // />
        // <link
        //   rel="shortcut icon"
        //   type="image/jpg"
        //   href="/images/favicon.png"
        // />
    
<div className= "portfolioContainer"> Portfolio Container
    <div className="titleContainer"> <h1 className='portfolioTitle'>Title container</h1></div>
    <div className="contentContainer"> Content Container
        <div className="linksContainer">Links Container</div>
        <div className="introContainer">Intro Container</div>
    <div className="skillsContainer">
        <div className="skillsBox">Skills</div>
        <div className="qualificationsBox">Qualifications</div>
        <div className="projectsBox">Projects</div>
    </div>
    </div>
    <div className="backgroundContainer">
        <div className="springButton">Spring</div>
        <div className="summerButton">Summer</div>
        <div className="autumnButton">Autumn</div>
        <div className="winterButton">Winter</div>
    </div>
</div>
    //   <div className="autumn-theme">
    //     <section id="screen1" className="screen screen_num_1">
    //       <h1 id="name" className="screen__header header header_lvl_1">
    //         Rachael Yonoff
    //       </h1>
    //       <span
    //         id="currentTitle"
    //         className="current_title slogan "
    //       >
    //         Trainee Full-Stack Developer
    //       </span>

    //       <article className="screen__step intro_background introduction">
    //         <h2 className="screen__header header header_lvl_2">Introduction</h2>
    //         <div className="iconLinks">
    //           <a
    //             href="https://github.com/Rachiey"
    //             target="_blank"
    //             className="home__social-icon"
    //           >
    //             <i className="fab fa-github"></i>
    //           </a>
    //           <a
    //             href="https://www.linkedin.com/in/rachaelyonoff/"
    //             target="_blank"
    //             className="home__social-icon"
    //           >
    //             <i className="fab fa-linkedin"></i>
    //           </a>
    //           <a href="mailto:rachaelyonoff@gmail.com" className="home__social-icon">
    //             {' '}
    //             <i className="fas fa-envelope"></i>
    //           </a>
    //         </div>

    //         <p className="intro">
    //           Welcome to my portfolio! I am a recent Digital Culture graduate from King's College London (KCL) breaking into the world of tech. Currently partaking in a 13 week coding course provided by Futureproof to assist me in my journey. Toggle the buttons bottom-right to change the season.{' '}
    //         </p>
    //       </article>

    //       <article className="screen__step skills_background skills">
    //         <h2 className="screen__header skills_background header_lvl_2">skills</h2>
    //         <h2 className="skills">SKILLS</h2>

    //         <div className="skills__container container grid">
    //           <div>
    //             <div className="skills__content skills__close">
    //               <div className="skills__header">
    //                 <i className="fas fa-database skills__icon"></i>

    //                 <div>
    //                   <h1 className="skills__title">Backend </h1>
    //                 </div>

    //                 <i className="fas fa-sort-down skills__arrow"></i>
    //               </div>

    //               <div className="skills__list grid">
    //                 <div className="skills__data">
    //                   <div className="skills__titles">
    //                     <h3 className="skills__name">Express</h3>
    //                   </div>
    //                 </div>

    //                 <div className="skills__data">
    //                   <div className="skills__titles">
    //                     <h3 className="skills__name">NodeJS</h3>
    //                   </div>
    //                 </div>

    //                 <div className="skills__data">
    //                   <div className="skills__titles">
    //                     <h3 className="skills__name">PostgreSQL</h3>
    //                   </div>
    //                 </div>

    //                 <div className="skills__data">
    //                   <div className="skills__titles">
    //                     <h3 className="skills__name">MongoDB</h3>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>

    //             <div className="skills__content skills__close">
    //               <div className="skills__header">
    //                 <i className="fas fa-code skills__icon"></i>

    //                 <div>
    //                   <h1 className="skills__title">Frontend</h1>
    //                 </div>

    //                 <i className="fas fa-sort-down skills__arrow"></i>
    //               </div>

    //               <div className="skills__list grid">
    //                 <div className="skills__data">
    //                   <div className="skills__titles">
    //                     <h3 className="skills__name">HTML</h3>
    //                   </div>
    //                 </div>

    //                 <div className="skills__data">
    //                   <div className="skills__titles">
    //                     <h3 className="skills__name">CSS</h3>
    //                   </div>
    //                 </div>

    //                 <div className="skills__data">
    //                   <div className="skills__titles">
    //                     <h3 className="skills__name">Javascript</h3>
    //                   </div>
    //                 </div>

    //                 <div className="skills__data">
    //                   <div className="skills__titles">
    //                     <h3 className="skills__name">React</h3>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>

    //             <div>
    //               <div className="skills__content skills__close">
    //                 <div className="skills__header">
    //                   <i className="fas fa-cogs skills__icon"></i>

    //                   <div>
    //                     <h1 className="skills__title">General</h1>
    //                   </div>

    //                   <i className="fas fa-sort-down skills__arrow"></i>
    //                 </div>

    //                 <div className="skills__list grid">
    //                   <div className="skills__data">
    //                     <div className="skills__titles">
    //                       <h3 className="skills__name">VSCode</h3>
    //                     </div>
    //                   </div>
    //                   <div className="skills__data">
    //                     <div className="skills__titles">
    //                       <h3 className="skills__name">Docker</h3>
    //                     </div>
    //                   </div>
    //                   <div className="skills__data">
    //                     <div className="skills__titles">
    //                       <h3 className="skills__name">Node</h3>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </article>

    //       <article className="screen__step education_background education">
    //         <h2 className="education">QUALIFICATIONS</h2>
    //         <section className="qualification section">
    //           <div className="qualification__container container">
    //             <div className="qualification__tabs">
    //               <div
    //                 className="qualification__button button--flex qualification__active"
    //                 data-target="#education"
    //               >
    //                 <i className="uil uil-graduation-cap qualification__icon"></i>
    //                 Education
    //               </div>

    //               <div
    //                 className="qualification__button button--flex"
    //                 data-target="#work"
    //               >
    //                 <i className="uil uil-briefcase-alt qualification__icon"></i>
    //                 Work
    //               </div>
    //             </div>

    //             <div className="qualification__sections">
    //               <div
    //                 className="qualification__content qualification__active"
    //                 data-content
    //                 id="education"
    //               >
    //                 <div className="qualification__data">
    //                   <div>
    //                     <h3 className="qualification__title">
    //                       13 Week Fullstack Developer Coding Program
    //                     </h3>
    //                     <span className="qualification__subtitle">Futureproof</span>
    //                     <div className="qualification__calendar">
    //                       <i className="uil uil-calendar-alt"></i>
    //                       Sepetember, 2021 - December, 2021
    //                     </div>
    //                   </div>

    //                   <div>
    //                     <span className="qualification__rounder"></span>
    //                     <span className="qualification__line"></span>
    //                   </div>
    //                 </div>

    //                 <div className="qualification__data">
    //                   <div></div>
    //                   <div>
    //                     <span className="qualification__rounder"></span>
    //                     <span className="qualification__line"></span>
    //                   </div>

    //                   <div>
    //                     <h3 className="qualification__title">BA in Digital Culture</h3>
    //                     <span className="qualification__subtitle">
    //                       King's College London
    //                     </span>
    //                     <div className="qualification__calendar">
    //                       <i className="uil uil-calendar-alt"></i>
    //                       September, 2017 - July, 2020
    //                     </div>
    //                   </div>
    //                 </div>

    //                 <div className="qualification__data">
    //                   <div>
    //                     <h3 className="qualification__title">
    //                       English Language, English Literature, Sociology (A Levels) and Media Production (Level 3 Subsidiary Diploma)
    //                     </h3>
    //                     <span className="qualification__subtitle">
    //                       Richard Taunton Sixth Form College
    //                     </span>
    //                     <div className="qualification__calendar">
    //                       <i className="uil uil-calendar-alt"></i>
    //                       September, 2013 - July, 2015
    //                     </div>
    //                   </div>

    //                   <div>
    //                     <span className="qualification__rounder"></span>
    //                   </div>
    //                 </div>
    //               </div>

    //               <div
    //                 className="qualification__content"
    //                 data-content
    //                 id="work"
    //               >
    //                 <div className="qualification__data">
    //                   <div>
    //                     <h3 className="qualification__title">Recruitment Coordinator</h3>
    //                     <span className="qualification__subtitle">
    //                       <a href="https://workadvisor.co.uk/" target="_blank">WorkAdvisor</a>
    //                     </span>
    //                     <div className="qualification__calendar">
    //                       <i className="uil uil-calendar-alt"></i>
    //                       March, 2021 - September, 2021
    //                     </div>
    //                   </div>

    //                   <div>
    //                     <span className="qualification__rounder"></span>
    //                     <span className="qualification__line"></span>
    //                   </div>
    //                 </div>

    //                 <div className="qualification__data">
    //                   <div></div>
    //                   <div>
    //                     <span className="qualification__rounder"></span>
    //                     <span className="qualification__line"></span>
    //                   </div>

    //                   <div>
    //                     <h3 className="qualification__title">Compliance Administrator</h3>
    //                     <span className="qualification__subtitle">
    //                       <a href="https://www.viavan.com/" target="_blank">ViaVan</a>
    //                     </span>
    //                     <div className="qualification__calendar">
    //                       <i className="uil uil-calendar-alt"></i>
    //                       June, 2019 - March, 2020
    //                     </div>
    //                   </div>
    //                 </div>

    //                 <div className="qualification__data">
    //                   <div>
    //                     <h3 className="qualification__title">Hostess and Housekeeping</h3>
    //                     <span className="qualification__subtitle">
    //                       <a href="https://www.reddotdigital.net/" target="_blank">Boathouse Hotel and Restaurant</a>
    //                     </span>
    //                     <div className="qualification__calendar">
    //                       <i className="uil uil-calendar-alt"></i>
    //                       July, 2014 - August 2018
    //                     </div>
    //                   </div>

    //                   <div>
    //                     <span className="qualification__rounder"></span>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </section>
    //       </article>

    //       <article className="screen__step project_background projects">
    //         <a href="./projects.html" id="projectsPage">
    //           <h2 className="projects">PROJECTS</h2>
    //         </a>
    //       </article>
    //     </section>

    //     <div className="indicator" id="indicator"></div>

    //     <div className="season-container">
    //       <div className="spring-season">
    //         <i id="spring" className="fas fa-seedling" title="spring theme"></i>
    //       </div>
    //       <div className="summer-season">
    //         <i id="summer" className="fas fa-sun" title="summer theme"></i>
    //       </div>

    //       <div className="autumn-season">
    //         <i id="autumn" className="fas fa-coffee" title="autumn theme"></i>
    //       </div>

    //       <div className="winter-season">
    //         <i id="winter" className="fas fa-snowflake" title="winter theme"></i>
    //       </div>
    //     </div>

    //     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
    //     <script src="https://rawgit.com/Promo/scrollissimo/master/dist/scrollissimo.min.js"></script>
 
  );
};

export default Home;
