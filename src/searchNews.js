export default function searchNews(searchQuery, limit) {
  return fetch(
    `${process.env.REACT_APP_API_HOST}?search=${searchQuery}&per_page=${limit}`,
    {
      method: 'GET',
    },
  ).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('An error has occurred');
    }
  });
}
