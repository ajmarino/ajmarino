<template>
    <main>
        <header>
            <inertia-link href="/">Home</inertia-link>
            <inertia-link href="/resume">Resume</inertia-link>
            <inertia-link href="/projects">Projects</inertia-link>
            <inertia-link href="/contact">Contact</inertia-link>
        </header>

        <article>
            <slot />
        </article>
    </main>
</template>

<script>
export default {
    data() {
        return {
            menuIsOpen: false,
        }
    },
}
</script>
