gsap.registerPlugin(ScrollTrigger);

const tiles = gsap.utils.toArray('.tile__row');
console.log(tiles);
tiles.forEach((tile, i) => {
    console.log(tile, i);
    if (i % 2 === 0) {
        gsap.to(tile, {
            scrollTrigger: {
                toggleActions: 'restart none none none',
                scrub: true
            },
            x: 300
        });
    } else {
        gsap.to(tile, {
            scrollTrigger: {
                toggleActions: 'restart none none none',
                scrub: true
            },
            x: -300
        });
    }
});