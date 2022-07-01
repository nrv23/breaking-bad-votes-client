export interface ICharacters  {
  
    characters: {
        id: string | number;
        name: string;
        actor: string;
        description: string;
        total_episodes: number;
        photo: string;
        votes: number;
        url: string
    }[]
}

export interface ICharacter  {
  
    character: {
        id: string | number;
        name: string;
        actor: string;
        description: string;
        total_episodes: number;
        photo: string;
        votes: number;
        url: string
    }
}