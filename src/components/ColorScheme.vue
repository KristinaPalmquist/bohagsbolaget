<script setup></script>

<template>
  <div class="boxes">
    <div class="first box"></div>
    <div class="second box"></div>
    <div class="third box"></div>
    <div class="fourth box"></div>
    <div class="fifth box"></div>
    <div class="sixth box"></div>

    <div class="seventh box"></div>
    <div class="eighth box"></div>
    <div class="ninth box"></div>
    <div class="tenth box"></div>
  </div>
</template>

<style scoped>
.boxes {
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  justify-content: center;
}
.box {
  height: 50px;
  width: 50px;
}

.first {
  background-color: var(--yellow);
}
.second {
  background-color: var(--orange);
}
.third {
  background-color: var(--pink);
}
.fourth {
  background-color: var(--green);
}
.fifth {
  background-color: var(--purple);
}
.sixth {
  background-color: var(--gray);
}

.seventh {
  background-color: var(--lilac);
}
.eighth {
  background-color: var(--lightest);
}

.ninth {
  background-color: var(--lighter);
}

.tenth {
  background-color: var(--darker);
}
</style>
