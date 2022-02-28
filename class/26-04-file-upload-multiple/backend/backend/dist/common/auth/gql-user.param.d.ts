export interface ICurrentUser {
    id: string;
    email: string;
}
export declare const CurrentUser: (...dataOrPipes: any[]) => ParameterDecorator;
