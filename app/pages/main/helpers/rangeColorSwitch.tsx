export default function rangeColorSwitch(value: string) {
  const num = parseInt(value, 10);

  if (1 <= num && num <= 10) {
    return "#ffff00";
  } else if (11 <= num && num <= 20) {
    return "#039be5";
  } else if (21 <= num && num <= 30) {
    return "#e53935";
  } else if (31 <= num && num <= 40) {
    return "#757575";
  } else {
    return "#4caf50";
  }
}
