<template>
    <h1>Postcss-nesting</h1>
    <button class="primary">Press me</button>
</template>

<style lang="postcss" scoped>
button {
  display: block;
  color: #fff;
  outline: none;
  font-size: 20px;
  padding: 10px 50px;

  &.primary {
    border-color: #7367f0;
    background-color: #7367f0;
  }
}
</style>
