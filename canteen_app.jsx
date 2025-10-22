export default function MVSRCanteenApp() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-yellow-500 text-white p-6 shadow-lg text-center text-3xl font-bold">
        MVSR College Canteen 🍴
      </header>

      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Welcome to MVSR Canteen</h2>
        <p className="mb-6 text-gray-600">
          Order your favorite meals, snacks, and beverages online! Pay securely, get your digital token,
          and pick up your food without waiting in line.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4">
            <img src="/images/idli.jpg" alt="Idli" className="rounded-xl mb-3 w-full h-40 object-cover" />
            <h3 className="text-lg font-bold">Idli & Sambar</h3>
            <p className="text-gray-500">Soft steamed rice cakes served with hot sambar and chutney.</p>
            <p className="mt-2 font-semibold text-green-600">₹30</p>
          </div>

          <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4">
            <img src="/images/friedrice.jpg" alt="Fried Rice" className="rounded-xl mb-3 w-full h-40 object-cover" />
            <h3 className="text-lg font-bold">Veg Fried Rice</h3>
            <p className="text-gray-500">Delicious Indo-Chinese style rice with vegetables and sauces.</p>
            <p className="mt-2 font-semibold text-green-600">₹60</p>
          </div>

          <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4">
            <img src="/images/coffee.jpg" alt="Coffee" className="rounded-xl mb-3 w-full h-40 object-cover" />
            <h3 className="text-lg font-bold">Filter Coffee</h3>
            <p className="text-gray-500">Strong South Indian coffee brewed to perfection.</p>
            <p className="mt-2 font-semibold text-green-600">₹20</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        <p>© 2025 MVSR College Canteen | Developed for online ordering convenience</p>
      </footer>
    </div>
  );
}
