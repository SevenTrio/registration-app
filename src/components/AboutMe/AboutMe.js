import React from "react";
import './AboutMe.scss'

function AboutMe() {
    return (
        <div className="AboutMe">
            <h1 className="AboutMe-Name">Dmytro Krykunov</h1>
            <h2 className="AboutMe-Position">Junior Front-end developer</h2>

            <div className="AboutMe-Contact">
                <h3 className="AboutMe-Heading">Contact information</h3>
                <ul className="AboutMe-ContactList">
                    <li className="AboutMe-ContactItem">Age: <span className="AboutMe-ContactItemValue">19 years</span></li>
                    <li className="AboutMe-ContactItem">City: <span className="AboutMe-ContactItemValue">Dnipro</span></li>
                    <li className="AboutMe-ContactItem">Email: <a href="mailto:dimakrikunov12@gmail.com" className="AboutMe-ContactItemValue">DimaKrikunov12@gmail.com</a></li>
                    <li className="AboutMe-ContactItem">Mobile phone: <a href="tel:+380668564920" className="AboutMe-ContactItemValue" >+38 (066) 856-49-20</a></li>
                    <li className="AboutMe-ContactItem">LinkedIn: <a href="https://www.linkedin.com/in/dmytro-krykunov/" className="AboutMe-ContactItemValue">linkedin.com/in/dmytro-krykunov</a></li>
                    <li className="AboutMe-ContactItem">Github: <a href="https://github.com/SevenTrio" className="AboutMe-ContactItemValue">github.com/SevenTrio</a></li>
                </ul>
            </div>

            <div className="AboutMe-Education">
                <h3 className="AboutMe-Heading">Education</h3>
                <div className="AboutMe-EducationContainer">
                    <p className="AboutMe-Specialty">Computer Engineering</p>
                    <p className="AboutMe-University">Dnipro National University of the Railway Transport</p>
                    <span className="AboutMe-ExpirationDate">09/2018 - Present</span>
                </div>
            </div>

            <div className="AboutMe-Skills">
                <h3 className="AboutMe-Heading">Professional skills</h3>
                <ul className="AboutMe-SkillsList">
                    <li className="AboutMe-SkillsItem">HTML5, CSS3, JS</li>
                    <li className="AboutMe-SkillsItem">React.js, Redux</li>
                    <li className="AboutMe-SkillsItem">Gulp, Webpack, Babel</li>
                    <li className="AboutMe-SkillsItem">Less, Sass/Scss</li>
                    <li className="AboutMe-SkillsItem">Node.js</li>
                    <li className="AboutMe-SkillsItem">Git</li>
                </ul>
            </div>

            <div className="AboutMe-Languages">
                <h3 className="AboutMe-Heading">Languages</h3>
                <ul className="AboutMe-LanguagesList">
                    <li className="AboutMe-LanguagesItem">Russian: <span className="AboutMe-LanguagesItemValue">Native or Bilingual Proficiency</span></li>
                    <li className="AboutMe-LanguagesItem">Ukrainian: <span className="AboutMe-LanguagesItemValue">Native or Bilingual Proficiency</span></li>
                    <li className="AboutMe-LanguagesItem">English: <span className="AboutMe-LanguagesItemValue">Pre-Intermediate</span></li>
                </ul>
            </div>

            <div className="AboutMe-About">
                <h3 className="AboutMe-Heading">About me</h3>
                <p className="AboutMe-AboutText">I love to study and learn new things, I want to improve my skills, master new technologies and tools. I quickly perceive new information and can apply it in practice. Great team player.</p>
            </div>
        </div>
    );
}

export default AboutMe;