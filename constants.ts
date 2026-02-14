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

// Using a reliable royalty-free romantic piano track from Pixabay
export const BACKGROUND_MUSIC_URL = "https://cdn.pixabay.com/audio/2022/02/07/audio_196f74a74a.mp3";