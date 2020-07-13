export default interface Database {
    connect(): any
    close(): void
    getConnection(): any
}