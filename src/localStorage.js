export const LOCAL_STORAGE_KEY = "added_cities";

export default function getAddedCitiesFromStorage(key = LOCAL_STORAGE_KEY) {
  const localValue = localStorage.getItem(key);
  const localStorageContent = JSON.parse(localValue);
  let favorites = [];
  if (localStorageContent !== null && Array.isArray(localStorageContent))
    favorites = localStorageContent;
  return new Map(favorites.map(cityName => [cityName]));
}
