<template>
    <div class='product'>
        <div class='product-name'>{{ product.name }}</div>
        <img
            :alt='"Product Image of" + product.name'
            :src='"../assets/images/products/" + product.id + ".jpg"'
        />
        <p class='product-description'>{{ product.description }}</p>
        <div class='product-price'>{{ product.price }}</div>
    </div>
</template>

<script>
export default {
    name: "ShowProduct",
    props: ['product']
}
</script>

<style scoped>

</style>
