/**
 * Проверяет, является ли число целым используя побитовые операторы.
 * @param {*} n
 * @returns {boolean}
 */
function isInteger(n) {
    return n === (n | 0);
}

/**
 * Возвращает массив четных чисел от 2 до 20 включительно.
 * @returns {number[]}
 */
function even() {
    return Array.from({ length: 10 }, (_, i) => (i + 1) * 2);
}

/**
 * Считает сумму чисел до заданного используя цикл.
 * @param {number} n
 * @returns {number}
 */
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Считает сумму чисел до заданного используя рекурсию.
 * @param {number} n
 * @returns {number}
 */
function recSumTo(n) {
    if (n === 1) return 1;
    return n + recSumTo(n - 1);
}

/**
 * Считает факториал заданного числа.
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

/**
 * Определяет, является ли число двойкой, возведенной в степень.
 * @param {number} n
 * @returns {boolean}
 */
function isBinary(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

/**
 * Находит N-е число Фибоначчи.
 * @param {number} n
 * @returns {number}
 */
function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

/**
 * Принимает начальное значение и функцию операции и возвращает функцию выполнения операции.
 * @param {number} initialValue
 * @param {function} [operatorFn]
 * @returns {function}
 */
function getOperationFn(initialValue, operatorFn) {
    let current = initialValue;
    return function (newValue) {
        if (!operatorFn) return current;
        current = operatorFn(current, newValue);
        return current;
    };
}

/**
 * Создает генератор арифметической последовательности.
 * @param {number} [start=0]
 * @param {number} [step=1]
 * @returns {function}
 */
function sequence(start = 0, step = 1) {
    let current = start;
    return function () {
        const value = current;
        current += step;
        return value;
    };
}

/**
 * Проверяет глубокое равенство двух значений, включая специфичные объекты (Date, RegExp).
 * @param {*} firstObject
 * @param {*} secondObject
 * @returns {boolean}
 */
function deepEqual(firstObject, secondObject) {
    // Проверка на null или не объекты
    if (
        firstObject == null ||
        secondObject == null ||
        typeof firstObject !== "object" ||
        typeof secondObject !== "object"
    ) {
        return false;
    }

    // Если значения идентичны (включая NaN)
    if (Object.is(firstObject, secondObject)) return true;

    // Обработка объектов типа Date
    if (firstObject instanceof Date && secondObject instanceof Date) {
        return firstObject.getTime() === secondObject.getTime();
    }

    // Обработка объектов типа RegExp
    if (firstObject instanceof RegExp && secondObject instanceof RegExp) {
        return firstObject.toString() === secondObject.toString();
    }

    // Проверка массивов
    if (Array.isArray(firstObject) && Array.isArray(secondObject)) {
        if (firstObject.length !== secondObject.length) return false;
        return firstObject.every((value, index) =>
            deepEqual(value, secondObject[index])
        );
    }

    // Проверка других объектов
    const keysA = Object.keys(firstObject);
    const keysB = Object.keys(secondObject);

    // Количество ключей должно совпадать
    if (keysA.length !== keysB.length) return false;

    // Сравнение значений для каждого ключа
    for (const key of keysA) {
        if (!keysB.includes(key) || !deepEqual(firstObject[key], secondObject[key])) {
            return false;
        }
    }

    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
