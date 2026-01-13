export type PageType = 'title' | 'dedication' | 'story' | 'music' | 'end';
export type PageLayout = 'image-top' | 'image-bottom' | 'image-left' | 'image-right' | 'text-only' | 'full-image' | 'zebra-strip' | 'multi-image';

export interface StoryImage {
  src: string;
  altText: string;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
}

export interface StoryPage {
  id: number;
  type: PageType;
  layout: PageLayout;
  content: string[];
  imageSrc?: string; // For single image layouts (backward compatibility)
  altText?: string; // For single image layouts
  images?: StoryImage[]; // For multi-image layouts
  audioSrc?: string;
}

export const storyContent: StoryPage[] = [
  // COVER
  {
    id: 1,
    type: 'title',
    layout: 'multi-image',
    content: [],
    images: [
      {
        src: '/assets/logo.png',
        altText: 'Little Lost Note title logo',
        position: 'top'
      },
      {
        src: '/assets/little-lost-note-cover.png',
        altText: 'A little musical note',
        position: 'center'
      }
    ]
  },
  // ABOUT
  {
    id: 2,
    type: 'story',
    layout: 'text-only',
    content: [
      'This book was written in the Fall of 1957 as a final paper for a child development class. We did not want to take the book apart. The following pages are scans of the pages of the book. We hope you enjoy this introduction to the orchestra.',
      'Suzy'
    ]
  },
  // ATTRIBUTION
  {
    id: 3,
    type: 'dedication',
    layout: 'multi-image',
    content: [
      'To Mother and Dad',
      '',
      'Thanks for all tender teaching and loving,',
      'And for lots of TLC.',
      'Thanks for faith and understanding;',
      'For letting me be me.'
    ],
    images: [
      {
        src: '/assets/suzy.jpg',
        altText: 'Suzy',
        position: 'bottom'
      },
      {
        src: '/assets/attribution-1.png',
        altText: 'A girl waving, with several birds, dogs, cats, and chickens around her',
        position: 'bottom'
      }
    ]
  },
  // PAGE 1
  {
    id: 4,
    type: 'story',
    layout: 'image-bottom',
    content: [
      'There once was a Little Lost Note. He was lost and didn\'t know where he lived in the music. He couldn\'t find his Mommy, or his Daddy, or any of his brothers or sisters.',
      'So Little Lost Note sat down on top of the staff and cried.'
    ],
    imageSrc: '/assets/1-1.png',
    altText: 'Little Lost Note sitting on staff crying'
  },
  // PAGE 2
  {
    id: 5,
    type: 'story',
    layout: 'multi-image',
    content: [
      'The next thing he knew, he heard, "Tap! Tap! Tap!" He looked up and there was a stick tapping on the staff. "Who are you?" asked Little Lost Note.',
      '"I am Mr. Baton," said the stick. "The man needs me to conduct the orchestra and tell each instrument when it is his turn to play. Why are you crying?"',
      '"I am lost," said Little Lost Note. "I can\'t even remember my name. Why I don\'t even remember whether I live on Treble Cleff Street or Bass Cleff Street. I can\'t find my place in the music."',
      '"We won\'t be able to play without you. But don\'t cry. I\'ll help you find your place in the music," said Mr. Baton.'
    ],
    images: [
      {
        src: '/assets/2-1.png',
        altText: 'Little Lost Note sitting on staff crying, Mr. Baton tapping staff with baton',
        position: 'left'
      },
      {
        src: '/assets/2-2.png',
        altText: 'Mr. Baton conducting orchestra',
        position: 'right'
      }
    ]
  },
  // PAGE 3
  {
    id: 6,
    type: 'story',
    layout: 'multi-image',
    content: [
      '"We will go visit some of the instruments. One of them must know where you live. One of them must play your part in the music."',
      'So off they went to visit the instruments of the symphony orchestra. First they visited the String family. They were busy tuning up for the concert, but they stopped when they saw Mr. Baton and Little Lost Note.',
      '"I have here a Little Lost Note and we must find where he belongs in the music. Do any of you know where he lives?" asked Mr. Baton.'
    ],
    images: [
      {
        src: '/assets/3-1.png',
        altText: 'Mr. Baton and Little Lost Note standing in front of string instruments mailbox',
        position: 'left'
      },
      {
        src: '/assets/3-2.png',
        altText: 'bass, cello, violins and violas',
        position: 'bottom'
      }
    ]
  },
  // PAGE 4
  {
    id: 7,
    type: 'story',
    layout: 'multi-image',
    content: [
      '"Do you live way down here?" song the deep, deep voice of the bass fiddle, who was the biggest and the Daddy of all the strings.',
      '"No, I don\'t believe so," wept Little Lost Note.',
      '"I don\'t think I know you," came the beautiful, low song of the cello, who was the Mommy of the Strings.',
      '"No, I don\'t think so," said Little Lost Note. "Your music is very beautiful, but I do not live here."',
      'And the String children, the violins and violas, played for him, but he just could not remember where he belonged in the music.'
    ],
    images: [
      {
        src: '/assets/4-1.png',
        altText: 'bass fiddle',
        position: 'top-left'
      },
      {
        src: '/assets/4-2.png',
        altText: 'cello',
        position: 'center'
      },
      {
        src: '/assets/4-3.png',
        altText: 'violins and violas',
        position: 'bottom-right'
      }
    ]
  },
  // PAGE 5 - THE PERCUSSIONS
  {
    id: 8,
    type: 'story',
    layout: 'full-image',
    content: [],
    imageSrc: '/assets/5-1.png',
    altText: 'drums, triangle, cymbals, xylophone'
  },
  // PAGE 6
  {
    id: 9,
    type: 'story',
    layout: 'image-bottom',
    content: [
      'Next, Mr. Baton took him to visit the Percussion family. "They make their music when someone hits them," explained Mr. Baton. "They are very important sound effects for the music. There are drums, triangles, cymbols, and xylophones."',
      'Just then Mr. Baton opened the door to the home of the Percussions, but everyone was practicing at once and the noise was so frightening that Little Lost Note hurried and closed the door. He was sure that he did not live among that loud bang! bang! bang!'
    ],
    imageSrc: '/assets/6-1.png',
    altText: 'Lost Note and Mr. Baton covering their ears in front of door at the Percussion house'
  },
  // PAGE 7
  {
    id: 10,
    type: 'story',
    layout: 'image-bottom',
    content: [
      'So Mr. Baton and Little Lost Note continued on their way to visit the Woodwind family. These instruments play when someone blows on them and they have many keys to push to play different notes.',
      'They met Freddie Flute and PeeWee Piccalo, playing in the front yard. Their voices were high and shrill, like birds singing. Little Lost Note listened and he liked their songs, but he knew he didn\'t live with them.'
    ],
    imageSrc: '/assets/7-1.png',
    altText: 'Freddie Flute and PeeWee Piccalo playing in front yard'
  },
  // PAGE 8
  {
    id: 11,
    type: 'story',
    layout: 'image-bottom',
    content: [
      'The other Woodwinds came outside to meet their guests.',
      '"I am lost," said Little Lost Note. "I don\'t remember my name or my address. Can you help me?"',
      'Mr. Oboe song every note he knew. He song up the scale and down. His voice was strange and had a far away and exciting sound. It reminded Little Lost Note of having an adventure in some far-off land. Little Lost Note liked Mr. Oboe\'s song, but when Mr. Oboe finished his song, Little Lost Note hung his head and wept. "No I don\'t live here."'
    ],
    imageSrc: '/assets/8-1.png',
    altText: 'Mr. Oboe playing music for Little Lost Note and Mr. Baton'
  },
  // PAGE 9
  {
    id: 12,
    type: 'story',
    layout: 'image-bottom',
    content: [
      'Then Mrs. Clarinet played for him, and then her husband, Mr. Bass Clarinet, and Uncle English Horn played for him. They all came out and played for him. They played up the scale and down, they played high and low. Little Lost Note liked their songs, but when they finished, Little Lost Note hung his head and wept, "No, I don\'t live here either."'
    ],
    imageSrc: '/assets/9-1.png',
    altText: 'Mrs. Clarinet, Mr. Bass Clarinet, and Uncle English Horn playing for Little Lost Note and Mr. Baton'
  },
  // PAGE 10
  {
    id: 13,
    type: 'story',
    layout: 'multi-image',
    content: [
      'And Mr. Bassoon came out and played for Little Lost Note. His voice was deep and his song was slow. Little Lost Note liked this strange music, too. But Little Lost Note didn\'t live here.',
      'Little Lost Note was getting very worried. He wanted his Mommy and Daddy, and his brothers and sisters.'
    ],
    images: [
      {
        src: '/assets/10-1.png',
        altText: 'Mr. Bassoon playing music',
        position: 'bottom-left'
      },
      {
        src: '/assets/10-2.png',
        altText: 'Little Lost Note and Mr. Baton looking sad',
        position: 'bottom-right'
      }
    ]
  },
  // PAGE 11
  {
    id: 14,
    type: 'story',
    layout: 'multi-image',
    content: [
      'Mr. Baton took him next to visit the Brass family. He met Sargent trumpet, who was a real soldier. His voice was loud and sharp. There was Miss Terry Trombone. Her voice was sometimes very loud and sometimes very soft and sweet.'
    ],
    images: [
      {
        src: '/assets/11-1.png',
        altText: 'Sargent Trumpet, Little Lost Note, and Mr. Baton saluting',
        position: 'top'
      },
      {
        src: '/assets/11-2.png',
        altText: 'Miss Terry Trombone playing music',
        position: 'bottom'
      }
    ]
  },
  // PAGE 12
  {
    id: 15,
    type: 'story',
    layout: 'multi-image',
    content: [
      'And he met Mimi, the French Horn, and Tommy Tuba. They all played for him, but Little Lost Note just could not remember where he lived.'
    ],
    images: [
      {
        src: '/assets/12-1.png',
        altText: 'Mimi the French Horn sitting on a pink pillow',
        position: 'top-left'
      },
      {
        src: '/assets/12-2.png',
        altText: 'Tommy Tuba',
        position: 'bottom'
      }
    ]
  },
  // PAGE 13
  {
    id: 16,
    type: 'story',
    layout: 'image-bottom',
    content: [
      'Mr. Baton sat down. "I just do not known anywhere else to go," he said. "I have taken you to see all four families in my orchestra. We visited the String, the Percussions, the Woodwinds, and the Brass. We won\'t be able to perform the concert tonight without your part in our music."',
      '"I guess I\'ll never remember where I live," said Little Lost Note. And he cried, and cried, and cried.',
      'Mr. Baton said, "Don\'t cry," but he couldn\'t think of any place else to look. He sat down on top of the staff and he thought, and thought, and thought.'
    ],
    imageSrc: '/assets/13-1.png',
    altText: 'Mr. Baton and Little Lost Note sitting on staff looking sad'
  },
  // PAGE 14
  {
    id: 17,
    type: 'story',
    layout: 'image-bottom',
    content: [
      'Then they heard the String family. They were running down the street. "We know who you could ask," they cried. "You forgot our cousin, Miss Harp."',
      '"Lets go find her," shouted Mr. Baton, and he jump up and ran for Miss Harp\'s house, pulling Little Lost Note after him.'
    ],
    imageSrc: '/assets/14-1.png',
    altText: 'String family running down the street'
  },
  // PAGE 15
  {
    id: 18,
    type: 'story',
    layout: 'image-bottom',
    content: [
      'When they got close to Miss Harp\'s house they stopped. There was Miss Harp sitting on the front porch. There was beautiful music coming from the house.',
      '"I\'m home!" shouted Little Lost Note. "This is where I live! I\'m home! I\'m home! Miss Harp plays my note in the music! Now we can play the music! Now we can have the concert!"'
    ],
    imageSrc: '/assets/15-1.png',
    altText: 'Miss Harp sitting on front porch playing music, Little Lost Note and Mr. Baton standing in front of house'
  },
  // PAGE 16 - Sheet Music 1
  {
    id: 19,
    type: 'story',
    layout: 'full-image',
    content: [],
    imageSrc: '/assets/sheet-music-1.png',
    altText: 'Sheet music page 1 - Little Lost Note song'
  },
  // PAGE 17 - Sheet Music 2
  {
    id: 20,
    type: 'story',
    layout: 'full-image',
    content: [],
    imageSrc: '/assets/sheet-music-2.png',
    altText: 'Sheet music page 2 - Little Lost Note song'
  },
  // PAGE 18 - End Slide
  {
    id: 21,
    type: 'end',
    layout: 'full-image',
    content: [],
    imageSrc: '/assets/20-1.png',
    altText: 'Little Lost Note character'
  }
];
