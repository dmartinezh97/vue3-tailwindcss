<script lang="ts" setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import logo from '@core/assets/img/favicon.png'

</script>

<template>
    <aside class="layout-vertical-nav">
        <div class="nav-header">
            <slot name="nav-header">
                <RouterLink to="/" class="app-logo app-title-wrapper">
                    <img :src="logo" alt="">
                    <h1 class="app-logo-title leading-normal">Test app</h1>
                </RouterLink>
            </slot>
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