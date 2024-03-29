export type MovieDescription = {
      name: string;
      posterImage: string;
      previewImage: string;
      backgroundImage: string;
      backgroundColor: string;
      description: string;
      rating: number;
      scoresCount: number;
      director: string;
      starring: string[];
      runTime: number;
      genre: string;
      released: number;
      id: number;
      isFavorite: boolean;
      videoLink: string;
      previewVideoLink: string;
  }

export type ReviewDescription ={
      id: number;
      user: {
        id: number;
        name: string;
      };
      rating: number;
      comment: string;
      date: string;
  }

export type Genre = string;

