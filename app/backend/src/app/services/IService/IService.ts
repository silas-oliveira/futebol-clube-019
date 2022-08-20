export interface IService<T> {
  login(body: { [key: string]: string }): Promise<void | T>;
}
