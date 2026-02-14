import { Memory, ContractClause } from './types';

export const LETTER_CONTENT = `My Dearest Ayesha,

If you're reading this, it means you've officially unlocked my heart (again).

I wanted to create this little corner of the internet just for you because a simple text message doesn't do justice to how much you mean to me. You are the spark in my day, the calm in my chaos, and the only person who can make me smile just by existing.

Even when you're angry, you're still my favorite notification. I love the way you laugh, the way you look at me when you think I'm not noticing, and even the way you roll your eyes at my bad jokes.

I love you more than biryani… and you know that's serious. Like, incredibly serious.

Thank you for being my partner, my best friend, and my greatest adventure.

Forever yours,
[Your Name]`;

export const MEMORIES: Memory[] = [
  { id: 1, url: 'https://picsum.photos/seed/love1/300/350', caption: 'Our chaos moment', rotation: -3 },
  { id: 2, url: 'https://picsum.photos/seed/love2/300/350', caption: 'Proof we are cute', rotation: 4 },
  { id: 3, url: 'https://picsum.photos/seed/love3/300/350', caption: 'Still not tired of you', rotation: -2 },
  { id: 4, url: 'https://picsum.photos/seed/love4/300/350', caption: 'My favorite view', rotation: 5 },
];

export const CONTRACT_CLAUSES: ContractClause[] = [
  { id: 1, text: 'Unlimited hugs and cuddles are mandatory upon request.' },
  { id: 2, text: 'No staying mad for more than 30 minutes (okay, maybe 45).' },
  { id: 3, text: 'I admit that you are right 99% of the time (the 1% is reserved for my dignity).' },
  { id: 4, text: 'Food must always be shared, especially dessert.' },
  { id: 5, text: 'We promise to be each other’s biggest fans, forever.' },
];

// REPLACE THE URL BELOW WITH YOUR OWN MUSIC LINK
// Example: "https://www.mysite.com/song.mp3"
export const BACKGROUND_MUSIC_URL = "https://ddg21s9t062h4.cloudfront.net/0mhxf%2Ffile%2F32df4f37347e18de6eb531047b4377a5_ec7f352e4a1009961f06108c82433fa3.mp3";