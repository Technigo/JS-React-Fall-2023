export const Description = ({ description }) => {
  return (
    <div>
      <span>Description:</span>
      {description}
    </div>
  );
};

Description.defaultProps = {
  description: "Description is missing",
};
