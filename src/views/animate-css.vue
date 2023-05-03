<template>
  <h1 class="animate__animated animate__bounce">An animated element</h1>
  <p class="element01">element01</p>
</template>

<style lang="postcss" scoped>
.element01 {
  display: inline-block;
  margin: 0 0.5rem;

  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}
</style>
