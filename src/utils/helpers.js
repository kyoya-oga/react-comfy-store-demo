export const formatPrice = (number) => {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
  }).format(number)
}

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  if (type === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}
