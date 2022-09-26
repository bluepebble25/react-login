export function getCookie(name) {
  const splited = document.cookie.split('; ');
  for (let cookie of splited) {
    let [key, value] = cookie.split('=');
    if (key === name) return value;
  }
}
