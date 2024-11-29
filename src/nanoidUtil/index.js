import { nanoid, customAlphabet } from "nanoid";

/**
 * 随机生成指定长度的id
 * @param {*} size 长度
 * @returns 
 */
function generateId(size = 6) {
  return nanoid(size);
}

/**
 * 随机生成指定长度的id，且不包含特殊符号
 * @param {*} size 长度
 * @returns 
 */
function generateIdWithoutSpecificSymbol(size = 6) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const customNanoid = customAlphabet(alphabet, size);
  return customNanoid();
}

export default {
  generateId,
  generateIdWithoutSpecificSymbol
}