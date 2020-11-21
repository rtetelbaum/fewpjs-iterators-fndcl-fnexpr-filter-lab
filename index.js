const findMatching = (driversArray, searchString) => {
	return driversArray.filter(driver => driver.toLowerCase() === searchString.toLowerCase())
}

const fuzzyMatch = (driversArray, searchString) => {
	return driversArray.filter(driver => driver[0] === searchString[0])
}

const matchName = (driversArray, searchString) => {
	return driversArray.filter(driver => driver.name === searchString)
}