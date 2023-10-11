// src/projectPages/ProjectItem.js
import React from 'react';
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
 

function ProjectItem({ image, name, description, languages, githubLink, appLink, readMoreLink }) {
  return (
    <div className="project-item">
      <div className="project-image">
        <img src={image} alt={name} />
        <div className="overlay">
        <a href={appLink} target="_blank" rel="noopener noreferrer" className="visit-button">Visit App</a>

    </div>
</div>

      <div className="project-details">
      <h3><a className="project-title" href={appLink}>{name}</a></h3>
        <p>{description} <a className="read-more-link" href={readMoreLink || appLink}>Read More...</a></p>
        <p>{languages.join(', ')}</p>
        <div className="project-links">

        <a href={githubLink}>
    <FontAwesomeIcon icon={faGithub} className="projects-icons" />
</a>

<a href={appLink}>
    <FontAwesomeIcon icon={faExternalLinkAlt} className="projects-icons" />
</a>
<a href={readMoreLink}>
    <FontAwesomeIcon icon={faInfoCircle} className="projects-icons" />
</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;

// import React from 'react';

// function ProjectItem({ image, name, description, languages, githubLink, appLink }) {
//   return (
//     <div className="project-item">
//       <img src={image} alt={name} />
//       <h3>{name}</h3>
//       <p>{description}</p>
//       <ul className="languages">
//         {languages.map((lang, index) => (
//           <li key={index}>{lang}</li>
//         ))}
//       </ul>
//       <div className="icons">
//         <a href={githubLink} target="_blank" rel="noopener noreferrer">
//           {<a href="https://github.com/JamesSymes" target="_blank" rel="noopener noreferrer">
//         <svg class="icon-github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//     <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.683-.217.683-.483 0-.237-.009-.866-.014-1.701-2.778.602-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.465-1.11-1.465-.908-.62.068-.608.068-.608 1.004.071 1.534 1.03 1.534 1.03.893 1.528 2.342 1.086 2.914.831.091-.647.35-1.086.636-1.337-2.218-.251-4.555-1.111-4.555-4.944 0-1.092.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.65 0 0 .84-.268 2.75 1.025A9.58 9.58 0 0112 6.839c.85 0 1.7.114 2.5.335 1.91-1.293 2.748-1.025 2.748-1.025.546 1.38.203 2.398.1 2.65.64.7 1.027 1.596 1.027 2.688 0 3.841-2.34 4.687-4.565 4.935.36.31.683.917.683 1.852 0 1.336-.012 2.415-.012 2.742 0 .269.18.577.688.479C19.132 20.166 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
// </svg>
// </a>}
//         </a>
//         <a href={appLink} target="_blank" rel="noopener noreferrer">
//           {<a href="https://jamessymes.github.io/E-Commerce-Movie-App/" target="_blank" rel="noopener noreferrer">
// <svg class="icon-external-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//     <path d="M16 16.67V19a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h2.33M8 3h8l3 3v8m-6-11L12 12M21 12l-9 9"/>
// </svg>
// </a>}
//         </a>
//       </div>
//     </div>
//   );
// }

// export default ProjectItem;
