import { useState } from 'react';
import { AddCategory, GrifGrid } from './components';

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  const onAddCategory = (onNewCategory) => {
    const categoriesMayus = categories.map((element) => element.toUpperCase());
    if (categoriesMayus.includes(onNewCategory.toUpperCase())) return;

    setCategories([onNewCategory, ...categories]);
  };

  return (
    <>
      {/* TITULO */}
      <h1>Gif Expert App</h1>

      {/* INPUT */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* LISTADO  */}
      {categories.map((categoria) => {
        return <GrifGrid key={categoria} category={categoria} />;
      })}
    </>
  );
};
