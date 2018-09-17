export default function rangeColorSwitch(value: number) {
  if (1 <= value && value <= 10) {
    return "#ffff00";
  } else if (11 <= value && value <= 20) {
    return "#039be5";
  } else if (21 <= value && value <= 30) {
    return "#e53935";
  } else if (31 <= value && value <= 40) {
    return "#757575";
  } else {
    return "#4caf50";
  }
}
