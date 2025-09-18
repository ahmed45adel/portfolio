export default function ViewCVButton() {
  const handleClick = () => {
    window.open("/Ahmed Adel - CV.pdf", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 text-dark/90 dark:text-white rounded-lg bg-slate-300 dark:bg-primary cursor-pointer"
    >
      View CV
    </button>
  );
}
