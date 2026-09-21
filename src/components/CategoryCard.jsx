import { Link } from 'react-router-dom'

export default function CategoryCard({ category }) {
  return (
    <Link to="/shop" className="group relative block overflow-hidden rounded-lg aspect-square hover-scale">
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover group-hover:opacity-75 transition duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition flex items-center justify-center">
        <h3 className="text-white text-xl font-semibold text-center px-4 group-hover:text-lg transition">
          {category.name}
        </h3>
      </div>
    </Link>
  )
}
