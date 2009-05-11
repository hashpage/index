{#foreach $T as entry}
  {#include feed-item root=$T.entry}
{#/for}
{#include paginator root=$T}