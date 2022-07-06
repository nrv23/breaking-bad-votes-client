import { Character } from './Character';

export interface IResponseAddVote {
  addVote: {
    characters?: Array<Character>;
    message: string;
    status: boolean;
  };
}
