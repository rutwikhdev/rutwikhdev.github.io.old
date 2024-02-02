import Grid from "../components/Grid";
import ProjectsData from "../data/projects"


function Projects() {
  return (
    <div class="flex">
      <div class="flex flex-col w-full">
        <h1 class="text-4xl font-bold mb-8">Projects</h1>
        <Grid items={Object.values(ProjectsData)} />
      </div>
    </div>
  )
}

export default Projects;
