<script>
	import blockIpsum from 'block-ipsum'

  const blocks = [ '█', '▉', '▊', '▋', '▌', '▍', '▎', '▏', '▐', '▀', '▁', '▂', '▃', '▄', '▅', '▆', '▇', '░', '▒', '▓', '▔', '▕', '▖', '▗', '▘', '▙', '▚', '▛', '▜', '▝', '▞', '▟' ]

  let length = 1
  let type
  let character = blocks[0]
  let result = ''

  function generate() {
    result = blockIpsum({
      length: length,
      type: type,
      character: character,
    })
  }

  let copyText = 'copy'

  function copy() {
    if (typeof window !== 'undefined') {
      var result = document.getElementById('result')
      result.focus()
      result.select()
      document.execCommand('copy')
      copyText = 'copied!'
      setTimeout(() => { copyText = 'copy' }, 2000);
    }
  }
</script>

<svelte:head>
  <title>█████-ipsum </title>
  <meta name='author' content='www.ryanfiller.com'>
  <meta name='description' content='Have you ever wanted to use lorem ipsum but found the fake Latin still too distracting? Maybe you just want to make it look like your placeholder text is all redacted-like. Either way, this is the text generator for you.'>
  <meta name='keywords' content='lorem ipsum block redacted'>
</svelte:head>

<header>
	<h1>
		<code>█████-ipsum </code>
	</h1>
	<p>
		Have you ever wanted to use <a href="https://en.wikipedia.org/wiki/Lorem_ipsum">lorem ipsum</a>
		but found the fake Latin still <em>too</em> distracting?
	</p>
	<p>Maybe you just want to make it look like your placeholder text is all redacted-like.</p>
	<p>Either way, this is the text generator for you.</p>
</header>

<main>

  <fieldset class='options'>
    <legend>options: </legend>

    <label for='length'>
      <span>length: </span>
      <input
        name='length'
        id='length'
        type='number'
        min='1'
        bind:value={length}
      />
    </label>
  
    <label for='type'>
      <span>type: </span>
      <select
        name='type'
        id='type'
        bind:value={type}
      >
        <option>
          paragraphs
        </option>
        <option>
          sentences
        </option>
        <option>
          words
        </option>
      </select>
    </label>
  
    <label for='character'>
      <span>character: </span>
      <select
        name='character'
        id='character'
        bind:value={character}
      >
        {#each blocks as block}
          <option>
            {block}
          </option>
        {/each}
      </select>
    </label>
  
    <button on:click={generate}>
      generate
    </button>
  
  </fieldset>

  <fieldset class='result'>
    <legend>result: </legend>

    <label for='result'>
      <textarea
        name='result'
        id='result'
        value={result}
      />
    </label>

    <button
      disabled={!result}
      on:click={copy}
    >
      <span>
        {copyText}
      </span>
    </button>
    
  </fieldset>
  
</main>

<footer>
  made with <a href='https://svelte.dev/'>svelte</a> and ♥ | <a href='https://www.ryanfiller.com?src=block-ipsum/'>www.ryanfiller.com</a>
</footer>


<style>
  :root {
    --space: 1rem;
    --width: 50rem;
    --text: black;
    --background: white;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --text: white;
      --background: black;
    }
  }

  :global(*) {
    box-sizing: border-box;
    font-family: monospace;
    color: var(--text);
    background-color: var(--background);
  }
  :global(body),
  :global(html) {
    margin: 0;
    padding: 0;
  }

  :global(#svelte) {
    height: 100vh;
    width: 100vw;
    overflow: auto;
    display: grid;
    padding: var(--space);
    gap: var(--space);
    grid-template-columns: 1fr minmax(min-content, var(--width)) 1fr;
    grid-template-rows: min-content minmax(50vh, min-content) 1fr min-content;
    grid-template-areas:
    '. header .'
    '. main   .'
    '. .      .'
    '. footer .';
  }

  header {
    grid-area: header;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
    text-align: right;
  }

  label {
    display: flex;
    flex-direction: column;
  }


  button,
  a {
    cursor: pointer;
  }

  button,
  button span {
    background-color: var(--text);
    color: var(--background);
    font-weight: bold;
  }

  button[disabled] {
    cursor: not-allowed;
  }

  button[disabled] span {
    opacity: 0.5;
  }

  fieldset,
  input,
  select,
  textarea,
  button {
    border: 1px solid var(--text);
  }

  input,
  select,
  textarea,
  button {
    padding: calc(0.5 * var(--space)) var(--space);
  }

  fieldset {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    padding: calc(1 * var(--space));
    gap: var(--space);
  }

  legend {
    font-weight: bold;
    font-size: 1.25em;
  }

  fieldset + fieldset {
    margin-top: var(--space);
  }

  fieldset.result {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  label[for='result'] {
    width: 100%;
    flex: 1;
    margin: 0;
  }
  
  textarea {
    overflow: auto;
    width: 100%;
    height: 100%;
    resize: none;
  }

  fieldset.result button {
    width: 100%;
  }
</style>
