import React, { useState } from 'react';

function CollectionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    collectionType: [],
    collectionCategory: [],
    itemCount: '',
    description: '',
    askingPrice: '',
    images: null,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    
    if (type === "checkbox") {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: checked ? 
          [...prevFormData[name], value] : 
          prevFormData[name].filter(item => item !== value)
      }));
    } else if (type === "file") {
      setFormData(prevFormData => ({
        ...prevFormData,
        images: event.target.files
      }));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };

  const isChecked = (name, value) => {
    return formData[name].includes(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
      <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" />

      <div className="checkbox-group">
        <label>What best describes your collection? (Check all that apply)</label>
        <div className="checkbox-row">
          <label className={isChecked('collectionType', 'Ultra Modern') ? 'selected-label' : ''}>
            <input type="checkbox" name="collectionType" value="Ultra Modern" onChange={handleInputChange} />
            Ultra Modern
          </label>
          <label className={isChecked('collectionType', 'Modern') ? 'selected-label' : ''}>
            <input type="checkbox" name="collectionType" value="Modern" onChange={handleInputChange} />
            Modern
          </label>
          <label className={isChecked('collectionType', 'Junk Era') ? 'selected-label' : ''}>
            <input type="checkbox" name="collectionType" value="Junk Era" onChange={handleInputChange} />
            Junk Era
          </label>
          <label className={isChecked('collectionType', 'Vintage') ? 'selected-label' : ''}>
            <input type="checkbox" name="collectionType" value="Vintage" onChange={handleInputChange} />
            Vintage
          </label>
          <label className={isChecked('collectionType', 'Pre-War') ? 'selected-label' : ''}>
            <input type="checkbox" name="collectionType" value="Pre-War" onChange={handleInputChange} />
            Pre-War
          </label>
          <label className={isChecked('collectionType', 'Sealed Product') ? 'selected-label' : ''}>
            <input type="checkbox" name="collectionType" value="Sealed Product" onChange={handleInputChange} />
            Sealed Product
          </label>
        </div>
      </div>

      <div className="checkbox-group">
        <label>What category best describes your collection? (Check all that apply)</label>
        <div className="checkbox-row">
          <label className={isChecked('collectionCategory', 'Baseball') ? 'selected-label' : ''}>
            <input type="checkbox" name="collectionCategory" value="Baseball" onChange={handleInputChange} />
            Baseball
          </label>
          <label className={isChecked('collectionCategory', 'Basketball') ? 'selected-label' : ''}>
            <input type="checkbox" name="collectionCategory" value="Basketball" onChange={handleInputChange} />
            Basketball
          </label>
          <label className={isChecked('collectionCategory', 'Football') ? 'selected-label' : ''}>
            <input type="checkbox" name="collectionCategory" value="Football" onChange={handleInputChange} />
            Football
          </label>
          {/* Add more checkboxes for other categories in the same pattern */}
        </div>
      </div>

      <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Please list or briefly explain what you have for sale." />
      <input type="file" name="images" onChange={handleInputChange} multiple />
      <input type="text" name="askingPrice" value={formData.askingPrice} onChange={handleInputChange} placeholder="Asking Price" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CollectionForm;
