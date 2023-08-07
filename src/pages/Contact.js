import { useEffect } from 'react';

function Contact() {

    useEffect(() => {
        document.title = 'CV | Contact';
    }, []);

    return(
        <article className="center-article">
                <div className="centerArticleWrapper"> 
                    <div id="contact">
                        <h1>Contact</h1>
                        <p>Email: dusanstojanovic890@gmail.com</p>
                        <p>Phone number: 0612066494</p>
                        <p>GitHub account with mini projectes: https://github.com/DusanS93</p>
                        <p>LinkedIn: https://www.linkedin.com/in/dusan-stojanovic-2b817b21b/</p>
                        <p>Location: Vinca, Grocka (Belgrade)</p>
                    </div>
                </div> 
        </article>
    )
};

export default Contact;