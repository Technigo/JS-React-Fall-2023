// Importing necessary hooks and components
import { useState } from "react";
import { Age } from "./Age";
import { Album } from "./Album";
import { Artist } from "./Artist";
import { Band } from "./Band";
import { Email } from "./Email";
import { Name } from "./Name";

// Define the MultiStepForm component
export const MultiStepForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    favoriteBand: "",
    favoriteAlbum: "",
    favoriteArtist: "",
  });

  // State to track the current step in the form
  const [currentStep, setCurrentStep] = useState(1);

  // Function to update form data based on field and value
  // How to add object or fields in array of objects in useState

  const updateFormData = (field, value) => {
    // setFormData({ ...values, name: 'new Value' })
    // setFormData({ ...values, age: 'new Value' })
    // setFormData({ ...values, email: 'new Value' })
    setFormData((values) => ({ ...values, [field]: value }));
  };

  // The updateFormData function is designed to update the state of formData based on the provided field and value arguments. Let's break it down step by step:

  // Function Arguments:

  // field: This argument represents the key (or property name) in the formData object that you want to update. For example, it could be "name", "age", "email", etc.
  // value: This argument represents the new value that you want to assign to the specified field.
  // setFormData:

  // This is the state update function provided by the useState hook for the formData state. It's used to update the state of formData.
  // Function Body:

  // values: This represents the current state of formData before any updates. It's a common pattern to use a function inside setState (or setFormData in this case) when the next state depends on the previous state.

  // { ...values }: This syntax is called the spread operator. It's used to create a new object that contains all of the properties of the values object. This ensures that we're not directly mutating the state, but instead creating a new copy of it.

  // [field]: value: This is a computed property name. It allows you to set the property of an object based on the value of a variable (field in this case). The value of this property will be set to the value argument passed to the function.
  // For example, if field is "name" and value is "John", this would add or update the property "name" with the value "John" in the new object.

  // In summary, the updateFormData function takes a field and a value, and updates the formData state by creating a new object that contains all the previous properties and values,
  // but with the specified field updated to the new value.

  // Function to move to the next step in the form
  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  // Function to move to the previous step in the form
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const submitForm = () => {
    console.log(formData);
    const formattedData = `
    Name: ${formData.name}
    Age: ${formData.age}
    Email: ${formData.email}
    Favorite Band: ${formData.favoriteBand}
    Favorite Album: ${formData.favoriteAlbum}
    Favorite Artist: ${formData.favoriteArtist}
  `;

    alert(formattedData);
  };

  // Render the component
  return (
    <div>
      {/* Render the Name component if on step 1 */}
      {currentStep === 1 && (
        <Name value={formData.name} updateFormData={updateFormData} />
      )}
      {/* Render the Age component if on step 2 */}
      {currentStep === 2 && (
        <Age value={formData.age} updateFormData={updateFormData} />
      )}
      {/* Render the Email component if on step 3 */}
      {currentStep === 3 && (
        <Email value={formData.email} updateFormData={updateFormData} />
      )}
      {/* Render the Band component if on step 4 */}
      {currentStep === 4 && (
        <Band value={formData.favoriteBand} updateFormData={updateFormData} />
      )}
      {/* Render the Album component if on step 5 */}
      {currentStep === 5 && (
        <Album value={formData.favoriteAlbum} updateFormData={updateFormData} />
      )}
      {/* Render the Artist component if on step 6 */}
      {currentStep === 6 && (
        <Artist
          value={formData.favoriteArtist}
          updateFormData={updateFormData}
        />
      )}

      {/* Navigation buttons */}
      <div className="multi-step-form">
        {/* Show the "Back" button if not on the first step */}
        {currentStep > 1 && <button onClick={prevStep}>Back</button>}
        {/* Show the "Next" button if not on the last step, otherwise show the "Submit" button */}
        {currentStep < 6 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={submitForm}>Submit</button>
        )}
      </div>
    </div>
  );
};
