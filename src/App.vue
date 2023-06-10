<script setup>
import {computed, ref, onMounted} from 'vue'
import {registerListener} from "@/scanner/scanner";

const item = ref('')
const items = ref([])
const addItem = (value) => {
  items.value.push(value)
}

const addItemAction = () => {
  addItem(item.value)
};

const itemEmpty = computed(() => item.value === '' || item.value === null)

onMounted(() => {
  registerListener(addItem)
})
</script>

<template>
  <header>
    <input type="text"  v-model="item" placeholder="Item to add" />
    <button @click="addItemAction" :disabled="itemEmpty">Add</button>
  </header>

  <main>
    <ul>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
  </main>
</template>

