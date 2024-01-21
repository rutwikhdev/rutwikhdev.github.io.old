import {  createSignal } from 'solid-js'

import { useParams } from "@solidjs/router"
import { Renderer, marked } from 'marked'

import PostData from '../data/posts'

import hljs from 'highlight.js'
import 'highlight.js/styles/base16/gruvbox-dark-hard.css'

const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};

function escapeForHTML(input: any) {
  return input.replace(/([&<>'"])/g, (char: any) => escapeMap[char]);
}

function Post() {
  const params = useParams();
  const [post, setPost] = createSignal('')

  const renderer = new Renderer();

  renderer.link = function (href, _, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
  }

  renderer.code = (code, language) => {
  const validLang = !!(language && hljs.getLanguage(language));

  const highlighted = validLang
    ? hljs.highlight(language, code).value
    : escapeForHTML(code);

    return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
  };
  marked.setOptions({ renderer: renderer })


  async function fetchMarkdownContent() {
    const path = (window.location.protocol === "http:" && window.location.port == "5173" ? "../src" : "") + "/posts/"
    try {
      const response = await fetch(path + params.name + ".md");
      const text = await response.text();
      setPost(text);
    } catch (error) {
      console.error("Error fetching Markdown content:", error);
    }
  }
  fetchMarkdownContent()

  return (
    <>
      <div class="text-center text-4xl font-semibold mb-4">{ PostData[params.name]['title'] }</div>
      <div class="text-center text-lg dark:text-gray-300 text-neutral-600 mb-10">
          { PostData[params.name]['subtitle'] }
      </div>
      <div class="border-b dark:border-yellow-200 border-neutral-300 w-20 mb-20 m-auto"></div>
      <div class="mx-20" id="markdown" innerHTML={marked(post(), { gfm: true })}></div>
      <div class="border-b dark:border-yellow-200 border-neutral-300 w-20 my-20 m-auto"></div>
    </>
  )
}

export default Post;
