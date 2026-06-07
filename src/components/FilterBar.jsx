const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-4 mb-4 ">
      <button
        className={
          filter === "all"
            ? "bg-indigo-500 text-white px-4 py-1 cursor-pointer rounded-sm"
            : "bg-transparent border border-gray-50 px-4 py-1 cursor-pointer rounded-sm"
        }
        onClick={() => {
          setFilter("all");
        }}
      >
        All
      </button>
      <button
        className={
          filter === "active"
            ? "bg-indigo-500 text-white px-4 py-1 cursor-pointer rounded-sm"
            : "bg-transparent border border-gray-50 px-4 py-1 cursor-pointer rounded-sm"
        }
        onClick={() => {
          setFilter("active");
        }}
      >
        active
      </button>
      <button
        className={
          filter === "completed"
            ? "bg-indigo-500 text-white px-4 py-1 cursor-pointer rounded-sm"
            : "bg-transparent border border-gray-50 px-4 py-1 cursor-pointer rounded-sm"
        }
        onClick={() => {
          setFilter("completed");
        }}
      >
        completed
      </button>
    </div>
  );
};

export default FilterBar;
