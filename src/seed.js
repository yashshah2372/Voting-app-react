const Seed = (function () {
    function generateVoteCount() {
        return Math.floor((Math.random() * 50) + 15);
    }

    const products = [
        {
            id: 1,
            title: 'NotionForm',
            description: 'A Simple and beautiful form builder for Notion',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: 'images/avatars/daniel.jpg',
            productImageUrl: 'images/products/image-aqua.png',
        },
        {
            id: 2,
            title: 'Formula Studio',
            description: 'The first code editor for Google sheets formulas',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: 'images/avatars/kristy.png',
            productImageUrl: 'images/products/image-rose.png',
        },
        {
            id: 3,
            title: 'Flatfile',
            description: 'A powerful, fast data onboarding platform, engineered for growth',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: 'images/avatars/veronika.jpg',
            productImageUrl: 'images/products/image-steel.png',
        },
        {
            id: 4,
            title: 'Strelka',
            description: 'Train your dog in just 10 minutes a day',
            url: '#',
            votes: generateVoteCount(),
            submitterAvatarUrl: 'images/avatars/molly.png',
            productImageUrl: 'images/products/image-yellow.png',
        }
    ];

    return { products: products };
}());

export default Seed;