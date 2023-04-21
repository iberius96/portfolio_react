import { createGlobalStyle } from 'styled-components';

const mobileSize = 768;

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-primary-color: #EAE3D4;
    --primary-color: black;
    --bg-negative-color: #3A3A3A;
    --negative-color: white;
    --image-height: 400px;
    --image-margin: 3em;
    --mobile-size: 768px;
  }

  html {
    font-size: 1em;
    background-color: var(--bg-primary-color);
  }

  .body-text-margin {
    margin: 3em 20% 5em 20%;
  }

  .body-margin {
    margin-top: 4em;
  }

  .primary-color,
  .primary-color a {
    color: var(--primary-color) !important;
    background-color: var(--bg-primary-color);
  }

  .negative-color,
  .negative-color a {
    color: var(--negative-color);
  }

  .header {
    margin-left: -3%;
    margin-bottom: 1em;
  }

  .header-initial {
    margin-top: 2em;
  }

  .header-padding {
    padding: 3em 20% 0em;
  }

  .header-bg {
    margin-top: -1px;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: var(--primary-color);
    border-bottom-left-radius: 70px;
  }

  .text-area {
    text-align: left;
    font-family: 'Goudy Bookletter 1911', serif;
    font-weight: normal;
    font-size: 1rem;
    line-height: 200%;
  }

  .text-area h1, h2, h3, h4 {
    font-weight: bold;
  }

  .text-area h1 {
    font-size: 3.5rem;
  }

  .text-area h2 {
    font-size: 2rem;
  }

  .text-area h3 {
    font-size: 1.5rem;
  }

  .text-area h4 {
    font-size: 1rem;
  }

  .img {
    position: relative;
    border-radius: 70px;
    width: 100%;
  }
  
  .dropdown {
    &:hover {
      cursor: pointer;
    }
  }

  .tab-pane.active,
  .text-area,
  .img {
    animation: default-transition 0.3s !important;
  }

  @keyframes default-transition {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* CSS for mobile devices */
  @media (max-width: ${mobileSize}px) {
    html {
      font-size: 0.7em;
    }

    .body-text-margin {
      margin: 3em 10% 5em 10%;
    }

    .header-padding {
      padding: 3em 10% 0em;
    }

    .header-bg {
      border-bottom-left-radius: 25px;
    }

    .text-area h1 {
      font-size: 2.3rem;
    }

    .text-area h2 {
      font-size: 1.8rem;
    }

    .text-area h3 {
      font-size: 1.3rem;
    }

    .img {
      border-radius: 25px;
    }
  }
`;

export default GlobalStyles;
export { mobileSize };