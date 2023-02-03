export interface IWord{
  word:string;
  phonetic:string;
  meanings:Meaning[];

}

export interface Meaning{
  partOfSpeech:string,
  definitions:Definition[]
}

export interface Definition{
  definition:string
}