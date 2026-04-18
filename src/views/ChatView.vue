<script setup lang="ts">
import { ref } from "vue";
import { explainCode } from "../request";

const inputCode = ref("");
const result = ref("");

const handleSend = async () => {
  try {const res = await explainCode(inputCode.value);
  result.value = res;
}
    catch(e){
        result.value = (e as Error).message
    }
}
</script>

<template>
  <textarea v-model="inputCode"></textarea>
  <button @click="handleSend">发送</button>
  <pre>{{ result }}</pre>
</template>
