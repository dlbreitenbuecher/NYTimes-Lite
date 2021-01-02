import React, { useState, useEffect } from 'react';

const API_BASE_URL = 'https://api.nytimes.com/svc/topstories/v2';
const API_KEY = process.env.REACT_APP_API_KEY;

/** Fetch top stories from NY Times API */
function useFetchTopStories(section) {
  const [isLoading, setIsLoading] = useState(false);
  const [topStories, setTopStories] = useState(null);

  console.log('in useFetchTopStories');

  useEffect(function fetchTopStoriesOnCall() {
    async function fetchTopStories() {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/${section}.json?api-key=${API_KEY}`);
        const stories = await response.json();
        setTopStories(stories);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching in top stories container!'. err);
        setIsLoading(false);
      }
    }

    fetchTopStories();
  }, []);

  return { isLoading, topStories};
}

export default useFetchTopStories;