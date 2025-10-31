import Logo from '../../public/assets/images/logo.svg';

export default function Header() {
  return (
    <header className="flex flex-row justify-between pt-4 mx-4 md:mx-20 bg-neutral-900">
      <img src={Logo}/>
      <div className="bg-neutral-800 text-white flex items-center">Dropdown</div>
    </header>
  );
}
