import { useTranslation } from 'react-i18next';
import React from 'react';

const OtherPage = () => {
	const { t } = useTranslation('other');

	return (
		<div>
			<h1>{t('Other Page')}</h1>
		</div>
	);
};

export default OtherPage;
