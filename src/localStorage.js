export default function getAddedCitiesFromStorage() {
  const localValue = localStorage.getItem('cities');
  const localStorageContent = JSON.parse(localValue);
  let cities = [];
  if (localStorageContent !== null && Array.isArray(localStorageContent))
    cities = localStorageContent;
  return new Map(cities.map(city => [city]));
}
