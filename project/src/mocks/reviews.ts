import { ReviewDescription } from '../types/movie';

export const reviews: ReviewDescription[] = [
  {
    id: 1,
    user: {
      id: 18,
      name: 'Sophie'
    },
    rating: 8,
    comment: 'This movie is perfect in all its categories: credits, sound track, production, casting, writing, photography, editing, acting, and direction.\nI was amazed with the freedom of the use of the camera. This movie will change the way movies are made. Slow-mo, stills, black and white, and color were all used to brilliant effect.',
    date: '2023-03-04T07:31:25.015Z'
  },
  {
    id: 2,
    user: {
      id: 15,
      name: 'Kendall'
    },
    rating: 8.4,
    comment: 'The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics. ',
    date: '2023-03-09T07:31:25.015Z'
  },
  {
    id: 3,
    user: {
      id: 12,
      name: 'Isaac'
    },
    rating: 7.4,
    comment: 'Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.',
    date: '2023-02-10T07:31:25.015Z'
  }
];

