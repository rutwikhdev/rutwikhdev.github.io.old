import Panda from "../assets/vectors/hipanda.png";
import Link from "../components/Link";
import Button from "../components/Button";
import List from "../components/List";
import Grid from "../components/Grid";

import Posts from "../data/posts.ts"
import Projects from "../data/projects.ts"

function Home() {
  const linkClasses = "underline decoration-indigo-400 hover:bg-indigo-400"
  
  const condition = (value: Object) => value["latest"] == true;

  const filterData = (object: Object) => Object.keys(object)
    .filter(key => condition(object[key]))
    .map(key => object[key])

  const filteredPosts = filterData(Posts)
  const filteredProjects = filterData(Projects)

  return (
    <>
      <div class="my-20 flex flex-col md:flex-row justify-between">
        <div class="flex flex-col my-auto">
          <span class="text-5xl font-black">Hey, I'm Rutwik!</span>
          <span class="my-8 font-semibold">Welcome to my digital jungle 🪴</span>
          <span class="text-lg font-medium">Human making 
          <Link class={linkClasses} label="open-source" link="/projects"></Link> software 
            for fun and <Link class={linkClasses} label="Frappe" link="https://frappe.io"></Link>!
          <br></br>
          Writing about stuff I find interesting. 
          I like drawing, sports, sci-fi, travelling and day-dreaming
          </span>
        </div>
        <img src={Panda} alt="Panda" class="mx-10 mt-10 sm:mt-0 sm:h-64 sm:w-auto rounded-lg"/>
      </div>

      <div class="my-4 flex justify-between">
        <span class="text-3xl font-semibold">Latest Posts</span>
        <Button label="View All" link="/blog" classes="dark:bg-neutral-800" />
      </div>
      <List items={filteredPosts}/>
      <div class="mt-20 my-4 flex justify-between">
        <span class="text-3xl font-semibold">Top Projects</span>
        <Button label="View All" link="/projects" classes="dark:bg-neutral-800" />
      </div>
      <Grid items={filteredProjects} />
    </>
  );
}

export default Home;
