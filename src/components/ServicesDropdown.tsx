import ServicesDropdownButton from "./ServicesDropdownButton";

function ServicesDropdown() {
  return (
    <div className="flex fixed top-[60px] right-0 left-0 w-[240px] h-[150px] z-20 mx-auto rounded-xl bg-black/90 backdrop-blur-2xl">
      <ul className="text-gray-300 fixed right-0 text-base/10 p-5">
        <ServicesDropdownButton href="/products" label="پکیجینگ">
          پکیجینگ
        </ServicesDropdownButton>
        <ServicesDropdownButton href="/brand-managing">
          برندینگ
        </ServicesDropdownButton>
        <ServicesDropdownButton href="/developer-service" label="طراحی سایت">
          طراحی سایت
        </ServicesDropdownButton>
      </ul>
    </div>
  );
}

export default ServicesDropdown;
