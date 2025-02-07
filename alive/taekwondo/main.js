document.addEventListener('DOMContentLoaded', () => {
    const beltSections = [
        { id: 'white-belt', storageKey: 'whiteBeltVideo' },
        { id: 'yellow-belt', storageKey: 'yellowBeltVideo' },
        { id: 'yellow-stripe-belt', storageKey: 'yellowStripeBeltVideo' },
        { id: 'green-belt', storageKey: 'greenBeltVideo' },
        { id: 'green-stripe-belt', storageKey: 'greenStripeBeltVideo' },
        { id: 'blue-belt', storageKey: 'blueBeltVideo' },
        { id: 'blue-stripe-belt', storageKey: 'blueStripeBeltVideo' },
        { id: 'red-belt', storageKey: 'redBeltVideo' },
        { id: 'red-stripe-belt', storageKey: 'redStripeBeltVideo' },
        { id: 'black-belt', storageKey: 'blackBeltVideo' }
    ];

    beltSections.forEach(section => {
        const sectionElement = document.getElementById(section.id);
        const iframe = sectionElement.querySelector('iframe');
        const linkElement = sectionElement.querySelector('a');

        // Ambil URL video dari localStorage jika ada
        const storedVideo = localStorage.getItem(section.storageKey);
        if (storedVideo) {
            iframe.src = storedVideo;
            linkElement.href = storedVideo;
        }

        // Jika tidak ada URL dalam localStorage, jangan ubah link
    });

    // Observer untuk mengubah opacity saat section muncul
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target); // Hentikan observasi setelah elemen muncul
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
