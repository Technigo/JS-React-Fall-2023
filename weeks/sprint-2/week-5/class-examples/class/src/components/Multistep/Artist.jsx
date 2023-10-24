export const Artist = ({ updateFormData, value }) => {
  const favoriteArtist = (e) =>
    updateFormData("favoriteArtist", e.target.value);
  return (
    <div>
      <label>Favourite Solo Artist:</label>
      <select value={value} onChange={favoriteArtist}>
        <option>Select an Artist</option>
        <option value="michael-jackson">Michael Jackson</option>
        <option value="hakan-hellstrom">Håkan Hellström</option>
        <option value="britney-spears">Britney Spears</option>
        <option value="mina">Mina</option>
      </select>
    </div>
  );
};
