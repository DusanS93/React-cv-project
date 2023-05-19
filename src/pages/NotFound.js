import { useEffect } from 'react';

function NotFound() {

    useEffect(() => {
        document.title = 'CV | NotFound';
    }, []);

    return(
      <article className="center-article">
            <div className="centerArticleWrapper">
                <div id="errorPage">
                    <h1>Ooops, page not found!</h1>
                </div>
            </div>
      </article>
    )
};

export default NotFound;