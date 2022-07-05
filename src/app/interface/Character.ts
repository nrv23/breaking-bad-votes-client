export interface ICharacters {
  characters: Character[];
}

export interface ICharacter {
  character: Character;
}

export interface Character {
  id: string | number;
  name: string;
  actor?: string;
  description?: string;
  total_episodes?: number;
  photo?: string;
  votes: number;
  url?: string;
}
