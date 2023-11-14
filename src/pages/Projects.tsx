import Grid from "../components/Grid";
import Data from "../data/posts"


function Projects() {
  return (
    <div class="flex">
      <div class="flex flex-col w-full">
        <h1 class="text-5xl font-bold mb-8">Projects</h1>
        <Grid items={Data.projects} />
      </div>
    </div>
  )
}

export default Projects;
