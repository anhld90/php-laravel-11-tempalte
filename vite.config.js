import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/style.css', 'resources/css/bootstrap.min.css', 'resources/lib/animate/animate.min.css',
            'resources/lib/owlcarousel/assets/owl.carousel.min.css', 'resources/js/app.js',
        ],
            refresh: true,
        }),
    ],
});
