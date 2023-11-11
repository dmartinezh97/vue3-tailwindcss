<script lang="ts" setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
</script>

<template>
    <aside>
        <div class="nav-header">
            <slot name="nav-header"></slot>
        </div>
        <slot name="nav-items">
            <PerfectScrollbar tag="ul" class="nav-items">
                <li>Hola 1</li>
                <li>Hola 2</li>
                <li>Hola 3</li>
                <li>Hola 4</li>
                <li>Hola 5</li>
            </PerfectScrollbar>
        </slot>
    </aside>
</template>