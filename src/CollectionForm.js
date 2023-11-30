import React, { useState } from 'react';
import Select from 'react-select';

function CollectionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    collectionType: [],
    collectionCategory: [],
    description: '',
    askingPrice: '',
    images: []
  });

  // Options for the React Select component
  const collectionTypeOptions = [
    { value: 'ultra-modern', label: 'Ultra Modern (2017-Present)' },
    { value: 'modern', label: 'Modern (2000-2017)' },
    { value: 'junk-era', label: 'Junk Era (1980-1999)' },
    { value: 'vintage', label: 'Vintage (1940-1979)' },
    { value: 'pre-war', label: 'Pre-War (1939 and Older)' },
    { value: 'sealed-product', label: 'Sealed Product' },
  ];

  const collectionCategoryOptions = [
    { value: 'baseball', label: 'Baseball' },
    { value: 'basketball', label: 'Basketball' },
    { value: 'football', label: 'Football' },
    // Add more options as needed
  ];

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'images') {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData({ ...formData, [name]: selectedOption });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit formData to your backend or service
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="collection-form">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        placeholder="Location"
        required
      />
      <Select
        isMulti
        name="collectionType"
        options={collectionTypeOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleSelectChange}
        placeholder="What best describes your collection?"
        value={formData.collectionType}
      />
      <Select
        isMulti
        name="collectionCategory"
        options={collectionCategoryOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleSelectChange}
        placeholder="What category best describes your collection?"
        value={formData.collectionCategory}
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Please list or briefly explain what you have for sale."
        required
      />
      <input
        type="text"
        name="askingPrice"
        value={formData.askingPrice}
        onChange={handleInputChange}
        placeholder="Asking Price"
        required
      />
      <input
        type="file"
        name="images"
        onChange={handleInputChange}
        multiple
        accept="image/*"
      />
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default CollectionForm;
