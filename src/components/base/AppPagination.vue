
<script setup>
  import { useRouter } from 'vue-router'


</script>

<template>
  <div class="pagination-container"> 
    <div class="pagination-row">
      <label for="per-page" class="pagination-label">Rows per page:</label>
      <select id="per-page" class="pagination-select">
        <option>5</option>
        <option>10</option>
        <option>20</option>
        <option>50</option>
      </select>
    </div>

    <div class="pagination">
      <button class="pagination-btn" disabled>&laquo; Prev</button>
      <button class="pagination-btn active">1</button>
      <button class="pagination-btn">2</button>
      <button class="pagination-btn">3</button>
      <span class="dots">…</span>
      <button class="pagination-btn">10</button>
      <button class="pagination-btn">Next &raquo;</button>
    </div>
  </div>
</template>