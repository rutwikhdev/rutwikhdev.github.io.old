import Link from "../components/Link";
import Panda from "../assets/vectors/hipanda.png";
import Button from "../components/Button";
import List from "../components/List";
import { createEffect, createSignal } from "solid-js";
import Grid from "../components/Grid";

function Home() {
  const [posts, setPosts] = createSignal("");
  const [projects, setProjects] = createSignal("");
  const linkClasses = "underline decoration-indigo-400 hover:bg-indigo-400"

  async function fetchLatestPosts() {
    const path = (window.location.protocol === "http:" && window.location.port == "5173" ? "./src" : "") + "/data/posts.json"

    try {
      const response = await fetch(path);
      const text = await response.json();
      setPosts(text.posts.filter((item: any) => item.latest === true))
      setProjects(text.projects.filter((item: any) => item.home === true))
    } catch (error) {
      console.error("Error fetching Markdown content:", error);
    }
  }

  createEffect(() => fetchLatestPosts());

  return (
    <>
      <div class="my-20 flex justify-between">

          <div class="flex flex-col my-auto">
            <span class="text-5xl font-bold">Hey, I'm Rutwik!</span>
            <span class="my-8 font-semibold">Welcome to my digital jungle 🪴</span>
            <span class="text-lg font-medium">Human making 
            <Link class={linkClasses} label="open-source" link="/projects"></Link> software 
              for fun and <Link class={linkClasses} label="Frappe" link="https://frappe.io"></Link>!
            <br></br>
            Writing about stuff I find interesting. 
            I like drawing, sports, sci-fi, travelling and day-dreaming
            </span>
          </div>
          
        <img src={Panda} alt="Panda" class="mr-10 ml-10 h-60 rounded-lg"/>

      </div>

      <div class="my-4 flex justify-between">
        <span class="text-3xl font-semibold">Latest Posts</span>
        <Button label="View All" link="/blog" />
      </div>
      <List items={posts()}/>
      <div class="mt-20 my-4 flex justify-between">
        <span class="text-3xl font-semibold">Top Projects</span>
        <Button label="View All" link="/projects" />
      </div>
      <Grid items={projects()} />
    </>
  );
}

export default Home;
