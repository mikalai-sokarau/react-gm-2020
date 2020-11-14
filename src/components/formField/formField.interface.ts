export interface IFormField {
  name: string;
  type: string;
  value: string;
  text?: string;
  classes: { [key: string]: string },
}
