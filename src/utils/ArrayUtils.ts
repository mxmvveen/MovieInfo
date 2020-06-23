export class ArrayUtils {
    public static addToNonDuplicateArray = <T>(array: T[], item: T): T[] => Array.from(new Set([...array, item]));
};