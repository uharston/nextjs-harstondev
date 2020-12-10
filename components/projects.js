import ProjectCards from './projectCards.js'

function Projects() {
    return(
            <section className='project-section' id="project-section">
              <div className='text-center'>
                      <h1 className='title'>My Projects</h1>
              </div>
              <ProjectCards />
            </section>
    )
}

export default Projects