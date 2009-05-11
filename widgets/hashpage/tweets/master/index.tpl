{#template MAIN}
  <div>
    {#foreach $T as activity}
      {#include tweet root=$T.activity}
    {#/for}
  </div>
  {#include paginator root=$T}
{#/template MAIN}

{#template tweet}
<div class="tweet">
  <div class="icon">
    <a href="{$T.user.profileUrl}?service={$T.service.id}">
      <img src="{$T.service.iconUrl}" alt="{$T.service.name}" class="icon" />
    </a>
  </div>
  <div class="body">
    <span class="title">
      {#if $T.link}
        <a href="{$T.link}" class="main">{$T.title}</a>
      {#else}
        {$T.title}
      {#/if}
    </span>
    <span class="date">
      {humane_date($T.updated)}
    </span>
  </div>
</div>
{#/template tweet}
