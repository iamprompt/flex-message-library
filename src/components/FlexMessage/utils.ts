export const SIZE_MAPPING: Record<string, string> = {
  xs: 'Xs',
  sm: 'Sm',
  md: 'Md',
  lg: 'Lg',
  xl: 'Xl',
  xxl: 'XXl',
  '3xl': '3Xl',
  '4xl': '4Xl',
  '5xl': '5Xl',
  full: 'Full',
}

export const CapitalizeString = (str: string, digit = -1) => {
  if (digit === -1) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }
  return str.charAt(0).toUpperCase() + str.slice(1, digit).toLowerCase()
}

export const SizeMapping = (size: string) => {
  const sizeKey = size.toLowerCase()
  return SIZE_MAPPING[sizeKey] || CapitalizeString(size)
}
