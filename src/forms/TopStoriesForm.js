import React, { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Button } from '@material-ui/core';

/**Form to select section for which to view top stories
 * 
 * default selection = 'home'
 * 
 * input type = radio buttons
 */
function TopStoriesForm({ selectTopStorySection }) {
  const [formData, setFormData] = useState('home');

  function handleChange(evt) {
    evt.preventDefault();
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    selectTopStorySection(formData);
  }

  /** Create Form Control Elements
   * 
   * Each label is capitalized and given a space if two words
   * 
   * (Not the most elegant solution, but I wanted to play around with array/string manipulation)
   */
  function createFormControlLabels() {
    let sectionLabels = [
      'arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 
      'movies', 'ny region', 'obituaries', 'opinion', 'politics', 'real estate', 'science', 'sports', 'sunday review', 
      'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'
    ]

    const sectionValues = sectionLabels.map(section => {
      const sectionArr = section.split(' ');
      if (sectionArr.length > 1) {
        section = sectionArr.join('');
        console.log('joining section:', section);
      }
      return section;
    })

    /** capitalize each word in selction lables */
    sectionLabels = sectionLabels.map( section => {
      // debugger;
      section = section.split(' ');
      let updatedSection = section.map( item => {
        let firstLetter = item.charAt(0).toUpperCase();
        let remainder = item.slice(1);
        item = firstLetter + remainder;
        return item;
      })
      updatedSection = updatedSection.join(' ');
      return updatedSection;
    })

    /** Creating the form labels */
    const formLabels = sectionValues.map( (section, index) => (
      <FormControlLabel
        key={section}
        value={section}
        control={<Radio />}
        label={sectionLabels[index]}
      />
    ))

    return formLabels;
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component='fieldset'>
        {/* fieldset groups releated elements in a form. The fieldset tag draws a box around the related elements */}
        <FormLabel component='legend'>Section</FormLabel>
          {/* legend defines a caption for the fieldset element */}
          <RadioGroup  aria-label='top story section' name='section' defaultValue='home' onChange={handleChange} row>
            {createFormControlLabels()}
          </RadioGroup>
          <Button type='submit' variant='outlined' color='primary'>Submit</Button>
      </FormControl>
    </form>
  )
}

export default TopStoriesForm;