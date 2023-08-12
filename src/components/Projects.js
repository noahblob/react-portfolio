import Fade from 'react-reveal/Fade';

export default function Projects() {
  return (
    <div className='fullscreen'>

      <section className='container-fluid text-left w-50'>
        <Fade top>
          <h1 className='text-center pb-3'><strong>My Projects</strong></h1>
          <div className='mb-5'>
            <a className='underline-link' href='https://github.com/noahblob/react-portfolio'><h2>This Portfolio</h2></a>
            <p className='nice-border p-3'>Made with HTML, CSS and JavaScript using the React library and Bootstrap framework for responsive styling.</p>
          </div>

          <div className='mb-5'>
            <a className='underline-link' href='https://github.com/noahblob/url-shortener'><h2>URL Shortener</h2></a>
            <p className='nice-border p-3'>A React app to shorten URLs using the shrtcode API.</p>
          </div>

          <div className='mb-5'>
            <a className='underline-link' href='https://github.com/noahblob/linkbranch'><h2>Linkbranch</h2></a>
            <p className='nice-border p-3'>A Linktree clone to store and display all my relevant links. Made using HTML, CSS, JavaScript and Vanta.js.</p>
          </div>

          <div className='mb-5'>
            <a className='underline-link' href='https://github.com/noahblob/GraphCalculator'><h2>Graph Calculator</h2></a>
            <p className='nice-border p-3'>A tool to calcualte graph properties such as reflexivity, transitivity, symmetry and antisymmetry as well as perform depth-first and breadth-first searches on graphs. Made in Java.</p>
          </div>

          <div className='mb-5'>
            <a className='underline-link' href='https://github.com/noahblob/Morra'><h2>Morra</h2></a>
            <p className='nice-border p-3'>A Java implementation of the classic italian hand game Morra, where you can play against varying difficulty of AI. Made with design patterns.</p>
          </div>

          <div className='mb-5'>
            <a className='underline-link' href='https://github.com/noahblob/Plagiarism-Checker'><h2>Plagiarism Checker</h2></a>
            <p className='nice-border p-3'>A MATLAB program used to compare two pieces of code and calculate similarity. Uses the winnowing algorithm to find alike elements and returns a similarity score.</p>
          </div>
        </Fade>
      </section>
    </div>
  );
}