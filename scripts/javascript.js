// FilterableProductTable (orange): contains the entirety of the example
  // SearchBar (blue): receives all user input
// ProductTable (green): displays and filters the data collection based on user input
// ProductCategoryRow (turquoise): displays a heading for each category
// ProductRow (red): displays a row for each product
var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
var FilterableProductTable = React.createClass({
  render: function(){
    return (
      <div>
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
});

var SearchBar = React.createClass({
  render: function(){
    return (
        <form>
          <input type="text" placeholder="Search..." />
          <p>
            <input type="checkbox" />
            {' '}Only Show products in stock
          </p>
        </form>
    );
  }
});
ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementsById('content')
);
