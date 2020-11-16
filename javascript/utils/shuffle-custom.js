/**
 * 打乱数组(可固定)
 * @param {array} arr - 目标数组
 * @param {function} fn - 类似fitler用法，如果返回true则表明改值不参与随机
 */
function shuffleFn (arr, fn) {
	const shuffleArr = []; // -> 需要固定的值
	const stickyIndex = []; // -> 需要固定的值所固定的索引值
	const stickyArr = arr.filter((e, index) => {
		const result = fn(e)
		if (result) {
			stickyIndex.push(index)
		}
		if (!result) {
			shuffleArr.push(e)
		}
		return result
  })
  // 这里用到lodash的随机
	const res = _.shuffle(shuffleArr)
	stickyArr.forEach((e, index) => {
		res.splice(stickyIndex[index], 0, e)
  })
  return res
}