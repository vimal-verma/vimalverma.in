export default function manifest() {
    return {
        name: 'Vimal Kumar Portfolio',
        short_name: 'VimalVerma',
        description: 'Personal portfolio of Vimal Kumar showcasing skills in JavaScript, React, Next.js, and projects like NFCBuzz and WebNfc.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/profile.jpg',
                sizes: 'any',
                type: 'image/jpeg',
            },
        ],
    };
}