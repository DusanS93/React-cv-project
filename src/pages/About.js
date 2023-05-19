import { useEffect } from 'react';

function About() {

    useEffect(() => {
      document.title = 'CV | About';
    }, []);

    return(
        <article className="center-article">
            <div className="centerArticleWrapper">
              <div id="aboutDiv">
                <h1>About me</h1>
                <p>My name is Dušan and I come from the Vinča area of ​​Belgrade.I graduated from the IT Academy in Zemun for 1 year, majoring in PHP. I also completed a two-month Advanced JavaScript course (also at the IT Academy). I learned how to work in JavaScript (advanced level-ES6), with MySQL databases,PHP (procedural and OOP),HTML5, CSS... I also learned about frameworks such as Vue, React, Angular and Laravel. Other technologies I listed on my skills page. I consider myself a very valuable and responsible person of the desired further learning, work and improvement. I also consider myself to have the quality for both individual and team work. I am interested in working in the backend and in the frontend. I was employed in a company (for 5 months) where the job was mainly content administration (entering new, changing old...) and at that place I did not succeed nor would I succeed in doing anything more specific regarding programming.</p>
              </div>
            </div>
        </article>
    )
}

export default About;