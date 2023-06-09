<script setup>
import {computed, ref} from 'vue'

const item = ref('')
const items = ref([])
const addItem = () => {
  items.value.push(item.value)
  item.value = ''
}
const itemEmpty = computed(() => item.value === '' || item.value === null)
</script>

<template>
  <header>
    <input type="text"  v-model="item" placeholder="Item to add" />
    <button @click="addItem" :disabled="itemEmpty">Add</button>
  </header>

  <main>
    <ul>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
