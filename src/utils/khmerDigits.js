// src/utils/khmerDigits.js
// Utility to convert Khmer numerals (U+17E0‑U+17E9) to Arabic digits (0‑9).
// This also handles the specific request to map Khmer "៤" to Arabic "4".

const khmerToArabicMap = {
  "\u17E0": "0",
  "\u17E1": "1",
  "\u17E2": "2",
  "\u17E3": "3",
  "\u17E4": "4",
  "\u17E5": "5",
  "\u17E6": "6",
  "\u17E7": "7",
  "\u17E8": "8",
  "\u17E9": "9",
};

/**
 * Replace any Khmer numeral characters in the given string with their Arabic equivalents.
 * @param {string} text – The text possibly containing Khmer digits.
 * @returns {string} The text with Khmer digits converted to Arabic digits.
 */
export function convertKhmerDigits(text) {
  if (typeof text !== "string") return text;
  return text.replace(/[\u17E0-\u17E9]/g, (ch) => khmerToArabicMap[ch] || ch);
}

