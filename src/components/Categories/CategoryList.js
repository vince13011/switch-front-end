/* eslint-disable react/prop-types */
import React, { Link } from 'react';

import Category from 'src/components/Categories/Category';

export default function CategoryList({ categories }) {
  if (!categories) return null;
  return (
    <>
      {categories.map((category) => (
        <li key={category.slug}>
          <Link to={`/categories/${category.slug}`}>
            <Category {...category} />
          </Link>
        </li>
      ))}
    </>
  );
}

CategoryList.prototypes = {
  categories: PropTypes
};
