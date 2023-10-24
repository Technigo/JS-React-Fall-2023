export const Email = ({ updateFormData, value }) => {
  const emailInput = (e) => updateFormData("email", e.target.value);
  return (
    <div>
      <label>Email:</label>
      <input type="email" value={value} onChange={emailInput} />
    </div>
  );
};
