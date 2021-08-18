let heroImages = () => ({ default: '' });

try {
   heroImages = require.context('../assets/heroes', true);
} catch (e) { };

export const loadImage = (image) => (heroImages(`./${image}`).default);