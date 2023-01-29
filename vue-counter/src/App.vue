<script setup>
import { ref } from 'vue';
const count = ref(0);

const addCount = () => {
  console.log('increment count');
  count.value++;
};

const minusCount = () => {
  console.log('decrement count');
  count.value--;
};
</script>

<template>
  <main>
    <div>
      <h4>The current count is...</h4>
      <h1>{{ count }}</h1>
      <button @click="minusCount()">-</button>
      <button @click="addCount()">+</button>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: aliceblue;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

div {
  text-align: center;
}
</style>
