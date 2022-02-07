export const handleCheckEmailValidity = (value) => new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value);
