import Panda from "../assets/vectors/hipanda.png";
import Link from "../components/Link";
import Button from "../components/Button";
import List from "../components/List";
import Grid from "../components/Grid";

import Data from "../data/posts.ts"

function Home() {
  const linkClasses = "underline decoration-indigo-400 hover:bg-indigo-400"

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
        <img src={Panda} alt="Panda" class="mx-10 mt-10 sm:mt-0 h-60 w-fit rounded-lg"/>
      </div>

      <div class="my-4 flex justify-between">
        <span class="text-3xl font-semibold">Latest Posts</span>
        <Button label="View All" link="/blog" classes="dark:bg-neutral-800" />
      </div>
      <List items={Data.posts.filter((post) => post.latest == true)}/>
      <div class="mt-20 my-4 flex justify-between">
        <span class="text-3xl font-semibold">Top Projects</span>
        <Button label="View All" link="/projects" classes="dark:bg-neutral-800" />
      </div>
      <Grid items={Data.projects.filter((project) => project.home == true)} />
    </>
  );
}

export default Home;
