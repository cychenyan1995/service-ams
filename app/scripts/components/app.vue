<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
/* 覆盖默认样式 */
html, body {
  margin: 0;
}
div,
h1,
h2,
h3,
h4,
p,
span,
ul,
li {
  margin: 0;
  padding: 0;
  border: 0;
}
body,
html {
  height: 100%;
}
input {
  outline: none;
  width: 100%;
}
#app {
  position: relative;
  height: 100%;
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: border-box;
}
</style>
