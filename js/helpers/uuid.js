export default function uuid() {
  return `${Math.trunc(Math.random() * 10000) + Date.now()}`;
}
