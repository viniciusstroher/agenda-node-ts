export interface Mapper<T> {
    static toDomain (t: <T>): <T>;
    static toPersistence (t: <T>): any;
    static toDTO (t: <T>): any;
}