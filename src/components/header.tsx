
const Header = ({balance}) => {
  return (
    <section className="bg-black">
      <section className="container mx-auto w-full px-8 py-2">
        <section className="flex justify-evenly">
          <div className="flex gap-2">
            <p className="text-gold">Balance:</p>
            <p className="text-white">{balance}</p>
          </div>
          <div>
            <p className="text-gold">Bet:</p>
            <p className="text-white"></p>
          </div>
          <div>
            <p className="text-gold">Win:</p>
            <p className="text-white"></p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Header;
