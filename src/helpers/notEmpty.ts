export default function notEmpty<T>(obj: T): boolean {
    return Object.keys(obj).length !== 0;
}
