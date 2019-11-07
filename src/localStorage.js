export default function getAddedCitiesFromStorage() {
  const localValue = localStorage.getItem('cities');
  const localStorageContent = JSON.parse(localValue);
  let favorites = [];
  if (localStorageContent !== null && Array.isArray(localStorageContent))
    favorites = localStorageContent;
  return new Map(favorites.map(cityName => [cityName]));
}
