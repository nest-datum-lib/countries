import {
	exists as utilsCheckExists,
	arr as utilsCheckArr,
	obj as utilsCheckObj,
	objFilled as utilsCheckObjFilled,
} from '@nest-datum-utils/check';

const urlApiStr = (url, data = {}) => {
	const accessToken = localStorage.getItem(`${process.env.URL_UI}_accessToken`);

	let key,
		processed = {};

	if (utilsCheckObjFilled(data)) {
		for (key in data) {
			if (utilsCheckExists(data[key])) {
				processed[key] = (utilsCheckObj(data[key]) || utilsCheckArr(data[key]))
					? JSON.stringify(data[key])
					: data[key];
			}
		}
	}
	if (!processed['query']) {
		delete processed['query'];
	}
	return (utilsCheckObjFilled(processed))
		? `${url}?${String(new URLSearchParams({ accessToken, ...processed }))}`
		: (url.includes('?')
			? `${url}&accessToken=${accessToken}`
			: `${url}?accessToken=${accessToken}`);
};

export default urlApiStr;
