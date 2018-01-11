const key = 'chuncai';

interface IPoint {
    x: number,
    y: number
}

/**
 * 获取sessionStorage中存储的信息
 * 
 * @export
 * @returns {IPoint}
 */
export function getStorage(): IPoint {
    let content = sessionStorage[key] || '{}';
    return JSON.parse(content);
}
/**
 * 将信息存储到sessionStorage中
 * 
 * @export
 * @param {any} config 
 */
export function saveStorage(config: IPoint): void {
    let content = JSON.stringify(config);
    sessionStorage[key] = content;
}