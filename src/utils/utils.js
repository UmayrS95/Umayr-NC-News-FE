export const dateFormat = (dateStr) => {
	if (!dateStr || typeof dateStr !== 'string') return '';

	const dateValues = dateStr.split('T')[0].split('-');

	const months = {
		'01': 'Jan',
		'02': 'Feb',
		'03': 'Mar',
		'04': 'Apr',
		'05': 'May',
		'06': 'Jun',
		'07': 'Jul',
		'08': 'Aug',
		'09': 'Sep',
		'10': 'Oct',
		'11': 'Nov',
		'12': 'Dec'
	};

	return `${dateValues[2]} ${months[dateValues[1]]} ${dateValues[0]}`;
};
