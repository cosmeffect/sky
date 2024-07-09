import type { Component } from 'solid-js';
import BskyEmbed from './BskyEmbed';
import './globals.css'

const App: Component = () => {
  const options = {
    username: "cosmeffect.com",
    feed: "at://did:plc:4egnewfez762d63m5msz6tvp/app.bsky.feed.generator/astro",
    search: "#buildinpublic",
    mode: "",
    limit: 32,
    linkTarget: "_self"
  }

  return (
    <main class={options.mode === 'dark' ? 'bg-cyan-200' : 'bg-cyan-200'}>
      <div class="">
        <BskyEmbed
          // username={options.username}
          // feed={options.feed}
          search={options.search}
          limit={options.limit}
          mode={options.mode}
          linkImage={true}
          linkTarget={options.linkTarget}
          // customStyles=".border-cyan-200 { color: cyan; }"
        />
      </div>
    </main>
  );
};

export default App;
