<template>
    <div>
        <div class="menu">
            <router-link to="/">HOME</router-link>
            <router-link to="/shop">SHOP</router-link>
            <router-link to="/about">ABOUT</router-link>
        </div>

        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>