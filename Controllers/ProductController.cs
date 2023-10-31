using Microsoft.AspNetCore.Mvc;

public class ProductController : Controller
{
  // this controller depends on the NorthwindRepository
  private DataContext _dataContext;
  public ProductController(DataContext db) => _dataContext = db;
  public IActionResult Category() => View(_dataContext.Categories.OrderBy(category => category.CategoryName));
  public IActionResult Index(int id) => View(
    _dataContext.Products.Where(
      product => 
        product.Discontinued == false && 
        product.CategoryId == id
    ).OrderBy(product => product.ProductName));
  public IActionResult Discount() => View(_dataContext.Discounts.OrderBy(discount => discount.Title));
  public IActionResult ActiveDiscounts(int id) => View(
  _dataContext.Discounts.Where(
    discount => 
      discount.StartTime >= @DateTime.Now && 
      discount.EndTime <= @DateTime.Now && 
      discount.DiscountId == id
  ).OrderBy(discount => discount.Title));
}