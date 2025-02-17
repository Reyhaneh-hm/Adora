import Inspect from "vite-plugin-inspect";
import { defineConfig } from "vite"; // ✅ اضافه کردن defineConfig
import { resolve } from "path";

export default defineConfig({ // ✅ استفاده از defineConfig
    server: {
        host: '0.0.0.0',
        port: 5173,
    },

    plugins: [Inspect()],
    base: "./",
    css: {
        devSourcemap: true, // ✅ فعال کردن سورس‌مپ برای CSS
        postcss: "./postcss.config.js",
    },
    build: {
        sourcemap: true, // ✅ فعال کردن سورس‌مپ در بیلد
        rollupOptions: {
            input: {
                help: resolve(__dirname, "./index.html"),
                landing: resolve(__dirname, "./landing.html")
            },
            output: {
                assetFileNames: (assetInfo) => {
                    // تنظیم خروجی فایل برای تصاویر به عنوان فایل جداگانه
                    if (/\.(png|jpe?g|gif|svg)$/.test(assetInfo.name)) {
                        return 'images/[name][extname]';
                    }
                    return 'assets/[name][extname]';
                },
            },
        },
        assetsInlineLimit: 0,
    },
});
