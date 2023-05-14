export const handleActiveClass = (
 className: string,
 isActive: boolean
): string => {
 if (isActive) {
  return className;
 }
 return "";
};
