<template>
    <main class="flex flex-col min-h-full w-full px-4 sm:px-6 max-w-3xl mx-auto">
        <header class="text-center pt-8 md:pt-12 lg:pt-16 border-b border-gray-300 shadow-bot-px">
            <div class="mb-12 uppercase">
                <h1 class="font-montserrat text-2xl mb-2">Anthony Marino</h1>
                <h2 class="font-lato font-light text-sm text-gray-600">Front End Developer</h2>
            </div>


            <nav class="mb-1 md:mb-4 flex flex-wrap justify-center">
                <inertia-link v-for="(link, index) in nav"
                    :key="index"
                    :href="link.href"
                    class="font-montserrat font-bold uppercase text-gray-500 link w-1/2 mb-3 transition-colors duration-300 ease-linear
                        sm:w-auto sm:mx-6
                        md:mb-0
                        hover:text-orange-500"
                >
                    {{ link.text }}
                </inertia-link>
            </nav>
        </header>

        <article>
            <slot />
        </article>

        <footer class="mt-auto border-t border-white shadow-top-px py-4 md:py-8 text-center">
            <p class="text-xs text-gray-700 tracking-loose">Copyright &copy; 2020 AJ Marino. All rights reserved.</p>
        </footer>
    </main>
</template>

<script>
export default {
    data() {
        return {
            menuIsOpen: false,
            nav: [
                { href: '/', text: 'Home' },
                { href: '/resume', text: 'Resume' },
                { href: '/work', text: 'Work' },
                { href: '/contact', text: 'Contact' },
            ],
        }
    },
}
</script>
