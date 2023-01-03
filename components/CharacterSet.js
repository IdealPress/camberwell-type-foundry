const alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!?.,";

const CharacterSet = ({ entry }) => (
  <div className="space-y-4">
    <p className="text-xs dark:text-white">Character Set</p>
    <div className="grid grid-cols-6 md:grid-cols-16 lg:grid-cols-24 gap-1">
      {alphabet.split("").map((character, index) => (
        <div
          key={index}
          className={`bg-gray-50 dark:bg-slate-900 dark:text-white flex content-center justify-center p-4 text-xl lg:text-3xl ${entry.data.class}`}
        >
          {character}
        </div>
      ))}
    </div>
  </div>
);

export default CharacterSet;
