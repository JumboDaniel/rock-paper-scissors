const Chip: React.FC<{value:number}>  = ({ value }) => {
  return (
    <div className="rounded-full border-4 border-blue-700 bg-white p-2">
      <p>{value * 500}</p>
    </div>
  );
};

export default Chip;
