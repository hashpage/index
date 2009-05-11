{#foreach $T as entry}
  <a target="_blank" href="{$T.entry.profileUrl}"><img class="presence-icon" alt="{$T.entry.name}" title="{$T.entry.name}" src="{$T.entry.iconUrl}"></a>
{#/foreach}