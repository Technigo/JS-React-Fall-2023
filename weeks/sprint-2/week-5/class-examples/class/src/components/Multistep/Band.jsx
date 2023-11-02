export const Band = ({ updateFormData, value }) => {
  const favoriteBand = (e) => updateFormData("favoriteBand", e.target.value);
  return (
    <div>
      <label>
        Favorite Band:
        <select value={value} onChange={favoriteBand}>
          <option value="">Select a Band</option>
          <option value="artic-monkeys">Artic Monkeys</option>
          <option value="electric-wizard">Electric Wizard</option>
          <option value="metallica">Metallica</option>
          <option value="black-sabbath">Black Sabbath</option>
        </select>
      </label>
    </div>
  );
};
