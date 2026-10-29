export function convertKhmerDigitsInString(str) {
  const khmerDigits = {
    "\u17E0": "0",
    "\u17E1": "1",
    "\u17E2": "2",
    "\u17E3": "3",
    "\u17E4": "4",
    "\u17E5": "5",
    "\u17E6": "6",
    "\u17E7": "7",
    "\u17E8": "8",
    "\u17E9": "9"
  };
  return str.replace(/[\u17E0-\u17E9]/g, (ch) => khmerDigits[ch] || ch);
}

export function deepConvertKhmerDigits(obj) {
  if (typeof obj === "string") {
    return convertKhmerDigitsInString(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map(deepConvertKhmerDigits);
  }
  if (obj && typeof obj === "object") {
    const result = {};
    for (const [k, v] of Object.entries(obj)) {
      result[k] = deepConvertKhmerDigits(v);
    }
    return result;
  }
  return obj;
}

