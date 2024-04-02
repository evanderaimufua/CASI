export class SurveyAnswer {
  private readonly _id: number;
  private readonly _questionId: number;
  private readonly _userId: string;
  private _answer: string;
  private _note: string;
  private _isDirty: boolean;
    
  public constructor(userId: string, id: number, answer: string, questionId: number, note?: string)
  public constructor(userId: string, id: number, answer: string, questionId: number, note: string) {
    this._id = id;
    this._answer = answer;
    this._questionId = questionId;
    this._note = note ?? null;
    this._userId = userId;
    this._isDirty = false;
  }
    
  public get id(): number {       
    return this._id;
  }

  public get answer(): string {
    return this._answer;
  }
      
  public set answer(newAnswer: string) {
    if (this._answer !== newAnswer) {
      this._answer = newAnswer;
      this._isDirty = true;
    }
  }

  public get questionId(): number {
    return this._questionId;
  }
  
  public set note(newNote: string) {
    if (this._note !== newNote) {
      this._note = newNote;
      this._isDirty = true;
    }
  }

  public get note(): string {
    return this._note;
  }

  public get userId(): string {
    return this._userId;
  }
}
