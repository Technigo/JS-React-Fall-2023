export const Album = ({ updateFormData, value }) => {
  const favoriteAlbum = (e) => updateFormData("favoriteAlbum", e.target.value);
  return (
    <div>
      <label>Favorite Album:</label>
      <select value={value} onChange={favoriteAlbum}>
        <option value="">Select an Album</option>
        <option value="artic-monkeys-am">Artic Monkeys - AM</option>
        <option value="electric-wizard-dopethrone">Electric Wizard - Dopethrone</option>
        <option value="metallica-justice-for-all">Metallica - And Justice For All</option>
        <option value="black-sabbath-paranoid">Black Sabbath - Paranoid</option>
      </select>
    </div>
  );
};