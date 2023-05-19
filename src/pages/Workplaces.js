import { useEffect } from 'react';

function Workplaces() {

    useEffect(() => {
        document.title = 'CV | Workplaces';
    }, []);

    return(
        <article className="center-article">
            <div className="centerArticleWrapper"> 
                <div id="workplaces">
                    <h1>My Workplaces</h1>
                    <p id="company">&#42;Awards International | <i>January 2022</i> - <i>June 2022</i></p>
                    <p>- Frontend web developer <i>(Intern)</i></p>
                </div>
            </div> 
        </article>
    )
}

export default Workplaces;