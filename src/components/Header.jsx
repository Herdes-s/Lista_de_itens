function Header({ top, title, bottom }) {
  return (
    <header className="px-6 mb-6 h-52 bg-[#1E293B] w-full text-white rounded-b-3xl flex flex-col justify-center items-center">
      {top}
      <h1 className="text-5xl mb-6 font-bold ">{title}</h1>
      {bottom}
    </header>
  );
}

export default Header;
