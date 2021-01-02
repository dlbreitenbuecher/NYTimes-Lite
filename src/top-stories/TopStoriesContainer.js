import React, { useState, useEffect } from 'react';


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
 * 
 * App -> TopStoriesContainer -> TopStoryCard
 */
function TopStoriesContainer() {
  console.debug('TopStoriesContainer');

  // TODO: fetch data with custom hook and api class

  return (
    <div>

    </div>
  )
}