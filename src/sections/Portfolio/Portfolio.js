import React from 'react'
import NavigationBar from "../NavigationBar";
import Body from "../Body";
import Headline from "../Headline/Headline";
import bonappetit from "./bonappetit.png";
import aptitude from "./aptitude-thumbnail.png";
import fetch from "./fetch.png";
import portal from "./portal.png";
import scrumble from "./scrumble.png";
import xandy500 from "./xandy500.png";

const Portfolio = () => {
return (
    <section id="portfolio" className="row">
        <article className="project-one">
            <img src={bonappetit} alt="landing page of bon appetit application"/>
            <a href="https://github.com/xz-dice/2021-mar-food-app-fe" target="_blank"><h2>Bon Appétit</h2>
            </a><p>
                Bon Appétit is a restaurant front-end project that was built using React. We created a high fidelity wireframe and used CDD to plan the architecture of the application. This application uses hooks to manage the states, React Router to navigate between components, and Materialize for CSS styling. For our routes, we connected to an API that was being built by another team simultaneously. As such, this project required us to communicate continuously about bugs and the functionality that we required from the API. </p>
        </article>
        <article className="project-two">
            <img src={aptitude} alt="aptitude test landing page"/>
            <a href=" https://github.com/xz-dice/aptitude-test" target="_blank"><h2>Aptitude Test</h2></a>
            <p>This was a team project to add new frontend features and bug fixes within a legacy project. We used GULP as a taskrunner to compile our TypeScript and used Handlebars for JavaScript templating. As scrum master for this project, I supported team members and communicated with our partner team to ensure there were no conflicts between any stories with dependencies.</p>
        </article>
        <article className="project-three">
            <img src={fetch} alt="landing page with a cartoon image of a dog"/>
            <a href="https://github.com/xz-dice/2021-march-fetch" target="_blank"><h2>Fetch</h2></a>
            <p>Fetch is an OOP PHP app which scrapes data from an API into a MySQL database and displays dogs so that you can get an idea of which dog is best for you. This project was managed in Scrum and we used Git for version control. We followed an agreed upon wireframe, used SOLID principles, and the hydrator design pattern to develop this app. This app’s dependencies are managed by Composer and it was unit tested with PHPUnit.</p>
        </article>
        <article className="project-four">
            <img src={portal} alt="iO Academy landing page"/>
            <a href="https://github.com/xz-dice/AcademyPortal" target="_blank"><h2>iO Academy Portal</h2></a>
            <p>For this project we were required to add extra functionality to the iO Academy Portal, which is a legacy codebase. We used PHP, MVC, Slim and MySQL for the back-end and data was
                displayed to the front-end using JavaScript and HTML.
            </p>
        </article>
        <article className="project-five">
            <img src={scrumble} alt="scrumble landing page"/>
            <a href="https://dev.io-academy.uk/projects/2021-march/scrumble/" target="_blank"><h2>Scrumble</h2></a>
            <p>Scrumble is an anagram game built using vanilla JavaScript, CSS and HTML.
            </p>
        </article>
        <article className="project-six">
            <img src={xandy500} alt="xandy 500 landing page"/>
            <a href="https://2021-xandicea.dev.io-academy.uk/xandy500/" target="_blank"><h2>Xandy 500</h2></a>
            <p>Xandy 500 is a functional PHP collection app that retrieves data from a MySQL database and displays an (unranked) definitive list of 500 of my all-time favourite songs, with Spotify links, album artwork, and song previews when the album artwork is selected.
            </p>
        </article>
    </section>
)
}

export default Portfolio