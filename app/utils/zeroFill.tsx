export default function zeroFill(originalNumber: number, pad: number): string {
  return ("0".repeat(pad) + originalNumber).slice(-pad);
}
