import {  createSignal } from 'solid-js'

import { useParams } from "@solidjs/router";
import { Renderer, marked } from 'marked'

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
      <div id="markdown" innerHTML={marked(post(), { gfm: true })}></div>
    </>
  )
}

export default Post;
