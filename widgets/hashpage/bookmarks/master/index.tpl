{#template MAIN}
  <div>
    {#foreach $T as activity}
      {#include activity root=$T.activity}
    {#/for}
  </div>
  {#include paginator root=$T}
{#/template MAIN}