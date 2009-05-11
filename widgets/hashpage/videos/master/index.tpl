{#template MAIN}
  {#foreach $T as video}
    <div class="media">
      {#include video root=$T.video}
    </div>
  {#/for}
  <br clear="all"/>
  {#include paginator root=$T}
{#/template MAIN}