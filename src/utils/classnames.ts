export const handleActiveClass = (
 className: string,
 isActive: boolean
): string => {
 if (isActive) {
  return className;
 }
 return "";
};

interface ClassnameObj {
 [key: string]: boolean
}

export const classnames = (toValidatedList: ClassnameObj[]) => {
 const test = toValidatedList.map((toValidated) => [...Object.entries(toValidated)])

 const classes = test.map(([item]) => handleActiveClass(item[0], item[1])).filter(c => c).join(' ')
 
 return classes
}