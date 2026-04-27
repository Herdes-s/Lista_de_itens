function Button({ textBtn, navigation, submit }) {
  function handleClick() {
    if (submit) submit();
    if (navigation) navigation();
  }

  return (
    <button
      className="bg-[#2563EB] text-white font-bold text-lg block py-2 w-full rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
      onClick={handleClick}
    >
      {textBtn}
    </button>
  );
}

export default Button;
