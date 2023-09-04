/**
 * This function uses regex to validate if the string includes posible html tags
 *
 * @param route string including path
 * @returns string including path formatted
 */
export function getPath(route) {
  let routePath;

  if (route !== '/') {
    const max = 50;
    const searchRegExp = new RegExp('-'.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const routePathWithoutline = route.replace(searchRegExp, ' ');

    routePath = routePathWithoutline.length > max ? `${routePathWithoutline.substring(0, max)}...` : routePathWithoutline;
  } else {
    routePath = 'home';
  }
  return routePath;
}
