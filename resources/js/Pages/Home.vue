<template>
    <div>
        <h1>{{ this.title }}</h1>
    </div>
</template>

<script>
import Layout from '../Layouts/App'

export default {
    props: [],

    layout: Layout,

    metaInfo() {
        return {
            titleTemplate: null,
        }
    },

    data() {
        return {
            title: 'Home',
        }
    },
}
</script>
