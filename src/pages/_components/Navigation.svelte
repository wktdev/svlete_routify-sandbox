<script>
  import {isActive, url} from '@sveltech/routify'

  const links =
  [
    ['./home', 'Home'], //add index if you don't want siblings to be considered children
    ['./todo-app', 'Todo'],
    ['./fetch-on-load', 'Fetch On Load'],
    ['./fetch-on-event', 'Fetch On Event']
  ]
</script>

<style>
  .active {font-weight: bold}
</style>

<ul>
  {#each links as [path, name]}
    <!-- Svelte magic. If isActive is true, the "active" class is applied. -->
    <li class:active={$isActive(path)}>
      <a href={$url(path)}>
        {name}
      </a>
    </li>
  {/each}
</ul>