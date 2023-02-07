// 判断当前是否是移动设备
export const isMobile = (): boolean => {
  if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) return true;
  return false;
};
