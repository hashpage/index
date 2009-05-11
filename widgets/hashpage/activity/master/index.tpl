<div>
  {#foreach $T as record}
    {#include activity root=$T.record}
  {#/for}
</div>
{#include paginator root=$T}