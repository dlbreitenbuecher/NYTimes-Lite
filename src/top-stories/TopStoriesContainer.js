import React, { useState, useEffect } from 'react';

import useFetchTopStories from '../custom-hooks/useFetchTopStories';

// const API_BASE_URL = 'https://api.nytimes.com/svc/topstories/v2';
// const API_KEY = process.env.REACT_APP_API_KEY;

/**Fetch Top Stories and Display Top Story Cards
 * 
 * props: 
 *  - topStorySection: 
 *      name of the section the user wants top stories from. 
 *        Defaults to home
 * 
 * state:
 *  - topStories:
 *      array of article objects
 *        see (https://developer.nytimes.com/docs/top-stories-product/1/routes/%7Bsection%7D.json/get)
 * 
 *  - isLoading:
 *      true/false
 * 
 * 
 * App -> TopStoriesContainer -> TopStoryCard
 */
function TopStoriesContainer({ topStorySection='home' }) {
  console.debug('TopStoriesContainer');

  console.log('topStorySection:', topStorySection)

  // const [isLoading, setIsLoading] = useState(false);
  // const [topStories, setTopStories] = useState(null);

  // useEffect(function fetchTopStoriesOnRender() {
  //   async function fetchTopStories() {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch(`${API_BASE_URL}/${topStorySection}.json?api-key=${API_KEY}`)
  //       const topStories = await response.json();
  //       setTopStories(topStories);
  //       setIsLoading(false);
  //     } catch (err) {
  //       console.error('Error Fetching in TopStories Container!', err);
  //     }
  //   }

  //   fetchTopStories();
  // }, [topStorySection])


  // const storiesFromAPI = useFetchTopStories(topStorySection);


  // console.log('topStories:', storiesFromAPI.topStories);


  // TODO: fetch data with custom hook and api class

  return (
    <div>
      {/* {storiesFromAPI.isLoading && 
        <p>Loading...</p>
      } */}

    </div>
  )
}

export default TopStoriesContainer;