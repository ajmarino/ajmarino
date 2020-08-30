<template>
    <div>
        <h1>{{ this.title }}</h1>
    </div>
</template>

<script>
import Default from '../Layouts/Default'

export default {
    props: [],

    layout: Default,

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
