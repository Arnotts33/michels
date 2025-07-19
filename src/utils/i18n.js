import fr from "../i18n/fr.json";
import en from "../i18n/en.json";

const translations = { fr, en };

export function t(locale, key) {
	const keys = key.split(".");
	let value = translations[locale];

	for (const k of keys) {
		value = value?.[k];
	}

	return value || key;
}
