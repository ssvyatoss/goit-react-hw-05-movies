export const SearchForm = ({ onSubmit }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target.elements.query;
      onSubmit(value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input placeholder="search" name="query" />
        <button>Search</button>
      </form>
    );
  };