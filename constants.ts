import { Memory, ContractClause } from './types';

export const LETTER_CONTENT = `My Dearest Ayesha,

If you're reading this, it means you've officially unlocked my heart (again).

I wanted to create this little corner of the internet just for you because a simple text message doesn't do justice to how much you mean to me. You are the spark in my day, the calm in my chaos, and the only person who can make me smile just by existing.

Even when you're angry, you're still my favorite notification. I love the way you laugh, the way you look at me when you think I'm not noticing, and even the way you roll your eyes at my bad jokes.

I love you more than biryani… and you know that's serious. Like, incredibly serious.

Thank you for being my partner, my best friend, and my greatest adventure.

Forever yours,
Atif`;

export const MEMORIES: Memory[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop', caption: 'Our chaos moment', rotation: -3 },
  { id: 2, url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600&auto=format&fit=crop', caption: 'Proof we are cute', rotation: 4 },
  { id: 3, url: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=600&auto=format&fit=crop', caption: 'Still not tired of you', rotation: -2 },
  { id: 4, url: 'https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=600&auto=format&fit=crop', caption: 'My favorite view', rotation: 5 },
];

export const CONTRACT_CLAUSES: ContractClause[] = [
  { id: 1, text: 'Unlimited hugs and cuddles are mandatory upon request.' },
  { id: 2, text: 'No staying mad for more than 30 minutes (okay, maybe 45).' },
  { id: 3, text: 'I admit that you are right 99% of the time (the 1% is reserved for my dignity).' },
  { id: 4, text: 'Food must always be shared, especially dessert.' },
  { id: 5, text: 'We promise to be each other’s biggest fans, forever.' },
];

// Using a new, reliable royalty-free romantic piano track
export const BACKGROUND_MUSIC_URL = "https://ddg21s9t062h4.cloudfront.net/0mhxf%2Ffile%2F32df4f37347e18de6eb531047b4377a5_ec7f352e4a1009961f06108c82433fa3.mp3?response-content-disposition=inline%3Bfilename%3D%2232df4f37347e18de6eb531047b4377a5_ec7f352e4a1009961f06108c82433fa3.mp3%22%3B&response-content-type=audio%2Fmpeg&Expires=1771080328&Signature=hQ5b7d1WbIun1TjuMiCZ1z7hwR0NJiBj1ATZ2-ejX~yXAeTVzUbJwuRNe8SWFLgwi9-11ANRZbdyRYCIixBZf6mSmeB3-PiSV8ipS11mPJoaskl6Si7UAkLkMjIHAIiNKBYsvznBaiLs9E~GWenbgkCaQU9yFfqW4VYGMZHx2rvsjSws3Z3nTVaBLEeCgPDNJZdMx736LvY4s3Bo~iVQJyBreZQ8tJhYFyYg9W04X5CeurcD-QE2OZZvsGmortcsBDbFcnIlKwOTGFrgwz0DfVKrGrko~EbL5PGEsP9XZGY760B2sEVTPkW5Z05bLu2m7UZ11FgL~lCvw1WpGoqTmg__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ";