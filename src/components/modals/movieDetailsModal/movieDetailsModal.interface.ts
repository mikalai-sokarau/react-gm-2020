export interface IValidationState {
  description: boolean;
  duration: boolean;
  genre: boolean;
  releaseDate: boolean;
  title: boolean;
  url: boolean;
}

export const VALIDATION_DEFAULT_STATE: IValidationState = {
  description: false,
  duration: false,
  genre: false,
  releaseDate: false,
  title: false,
  url: false,
};
