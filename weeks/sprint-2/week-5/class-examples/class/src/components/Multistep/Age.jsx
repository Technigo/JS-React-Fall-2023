export const Age = ({ updateFormData, value }) => {
  const ageInput = (e) => updateFormData("age", e.target.value);
  return (
    <div>
      <label>
        Age:
        <input type="number" value={value} onChange={ageInput} />
      </label>
    </div>
  );
};
