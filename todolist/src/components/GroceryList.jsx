export const GroceryList = ({ title, status, id, handelToggel }) => {
  return (
    <>
      <div>{title}</div>
      <button onClick={() => handelToggel(id)}>Mark as Done</button>
    </>
  );
};
