import { useEffect } from 'react';

function Skills() {

    useEffect(() => {
        document.title = 'CV | Skills';
    }, []);

    return(
        <article className="center-article">
           <div className="centerArticleWrapper">
              <div id="skillsDiv">
                <h1>Skills</h1>
                <p><strong>Advanced skills:</strong> JavaScript (ES6), HTML5, CSS3, PHP (oop an procedrual) and MySql databases</p>
                <p><strong>Begginer skills:</strong> React JS, Vue JS, Angular, Svelte JS, Node JS, TypeScript, TailwindCSS, Bootstrap, jQuery, Laravel, GIT, AJAX, JSON, XML, Word Press, Web services</p>
                <p><strong>English language:</strong> intermediate</p>
              </div>
           </div>
        </article>
    )
};

export default Skills;