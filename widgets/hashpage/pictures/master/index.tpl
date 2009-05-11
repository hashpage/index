{#template MAIN}
  {#foreach $T as picture}
    <div class="media">
      {#include picture root=$T.picture}
    </div>
  {#/for}
  <br clear="all"/>
  {#include paginator root=$T}
{#/template MAIN}