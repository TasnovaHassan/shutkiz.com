import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiFilter, FiX, FiChevronDown } from 'react-icons/fi';
import ProductCard from '../components/product/ProductCard';
import { productAPI, categoryAPI } from '../utils/api';
import './ProductsPage.css';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const keyword = searchParams.get('keyword') || '';
  const category = searchParams.get('category') || '';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';
  const sort = searchParams.get('sort') || '-createdAt';
  const page = parseInt(searchParams.get('page') || '1');

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value); else next.delete(key);
    next.delete('page');
    setSearchParams(next);
  };

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await productAPI.getAll({ keyword, category, minPrice, maxPrice, sort, page, limit: 12 });
      setProducts(data.products);
      setTotal(data.total);
      setPages(data.pages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [keyword, category, minPrice, maxPrice, sort, page]);

  useEffect(() => {
    document.title = 'Products — Shutkiz';
    categoryAPI.getAll().then(r => setCategories(r.data.categories)).catch(() => {});
  }, []);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  const clearFilters = () => setSearchParams({});

  const hasFilters = keyword || category || minPrice || maxPrice;

  return (
    <div className="page-wrapper products-page">
      <div className="container">
        {/* Header bar */}
        <div className="products-topbar">
          <div>
            <h1 className="products-title">
              {keyword ? `Results for "${keyword}"` : category ? 'Category Products' : 'All Products'}
            </h1>
            <p className="products-count">{total} products found</p>
          </div>
          <div className="products-controls">
            <button className="btn btn-ghost filter-toggle" onClick={() => setFiltersOpen(f => !f)}>
              <FiFilter size={16} /> Filters {filtersOpen ? <FiChevronDown size={14} style={{ transform: 'rotate(180deg)' }} /> : <FiChevronDown size={14} />}
            </button>
            <select className="sort-select" value={sort} onChange={e => setParam('sort', e.target.value)}>
              <option value="-createdAt">Newest First</option>
              <option value="price">Price: Low to High</option>
              <option value="-price">Price: High to Low</option>
              <option value="-rating">Top Rated</option>
              <option value="-soldCount">Best Selling</option>
            </select>
          </div>
        </div>

        {/* Filters */}
        {filtersOpen && (
          <div className="filters-panel">
            <div className="filter-group">
              <label className="filter-label">Category</label>
              <div className="filter-pills">
                <button className={`pill${!category ? ' active' : ''}`} onClick={() => setParam('category', '')}>All</button>
                {categories.map(c => (
                  <button key={c._id} className={`pill${category === c._id ? ' active' : ''}`} onClick={() => setParam('category', c._id)}>
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <label className="filter-label">Price Range (৳)</label>
              <div className="price-inputs">
                <input className="form-input" type="number" placeholder="Min" value={minPrice}
                  onChange={e => setParam('minPrice', e.target.value)} />
                <span>—</span>
                <input className="form-input" type="number" placeholder="Max" value={maxPrice}
                  onChange={e => setParam('maxPrice', e.target.value)} />
              </div>
            </div>
            {hasFilters && (
              <button className="btn btn-ghost btn-sm" onClick={clearFilters}>
                <FiX size={14} /> Clear All Filters
              </button>
            )}
          </div>
        )}

        {/* Grid */}
        {loading ? (
          <div className="spinner" />
        ) : products.length === 0 ? (
          <div className="no-products">
            <p>🐟</p>
            <h3>No products found</h3>
            <p>Try adjusting your filters or search terms</p>
            <button className="btn btn-primary" onClick={clearFilters}>Clear Filters</button>
          </div>
        ) : (
          <div className="grid-4">
            {products.map(p => <ProductCard key={p._id} product={p} />)}
          </div>
        )}

        {/* Pagination */}
        {pages > 1 && (
          <div className="pagination">
            <button className="btn btn-outline btn-sm" disabled={page <= 1}
              onClick={() => setParam('page', String(page - 1))}>← Prev</button>
            {Array.from({ length: pages }, (_, i) => i + 1).map(p => (
              <button key={p}
                className={`page-btn${p === page ? ' active' : ''}`}
                onClick={() => setParam('page', String(p))}>
                {p}
              </button>
            ))}
            <button className="btn btn-outline btn-sm" disabled={page >= pages}
              onClick={() => setParam('page', String(page + 1))}>Next →</button>
          </div>
        )}
      </div>
    </div>
  );
}