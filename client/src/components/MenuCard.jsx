import React from 'react'
import { Star, Clock, DollarSign, Heart, Flame, Leaf, Beef, Wheat } from 'lucide-react';
import { popularMenus } from '../assets/assets'

const MenuCard = () => {

    const getDietIcon = (menu) => {
    if (menu.isVegetarian) return <Leaf className="w-4 h-4 text-green-500" />;
    if (menu.isSpicy) return <Flame className="w-4 h-4 text-red-500" />;
    return <Beef className="w-4 h-4 text-orange-500" />;
  };

  const getDietLabel = (menu) => {
    if (menu.isVegetarian) return 'Vegetarian';
    if (menu.isSpicy) return 'Spicy';
    return 'Contains Meat';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Menus Grid - 4 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularMenus.map((menu) => (
            <div
              key={menu.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden cursor-pointer border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={menu.image}
                  alt={menu.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Favorite Button */}
                <button className="absolute top-3 right-3 p-1.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-md">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                </button>

                {/* Popular Badge */}
                {menu.isPopular && (
                  <div className="absolute top-3 left-3">
                    <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      Popular
                    </div>
                  </div>
                )}

                {/* Diet Indicator */}
                <div className="absolute bottom-3 left-3">
                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    {getDietIcon(menu)}
                    <span className="text-gray-700">{getDietLabel(menu)}</span>
                  </div>
                </div>
              </div>

              {/* Menu Info */}
              <div className="p-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-2 leading-tight">
                      {menu.name}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mb-2">
                      {menu.restaurant}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg flex-shrink-0 ml-2">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">{menu.rating}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {menu.description}
                </p>

                {/* Price & Prep Time */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1 font-semibold text-green-600">
                    <DollarSign className="w-4 h-4" />
                    <span>{menu.price}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{menu.prepTime}</span>
                  </div>
                </div>

                {/* Calories & Category */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>{menu.calories}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full">{menu.category}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {menu.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-50 text-blue-700 px-2 py-0.5 rounded-lg text-xs font-medium hover:bg-blue-100 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="px-4 pb-4">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MenuCard