using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using System.Data;

namespace Northwind.Controllers
{
    public class CustomerController : Controller
    {
        // this controller depends on the NorthwindRepository
        private DataContext _dataContext;


        
        public CustomerController(DataContext db) => _dataContext = db;
        public IActionResult Register() => View();
        [HttpPost]
        public async Task<IActionResult> NewCustomer(Customer newCustomer){
            try{
                if(newCustomer.CompanyName is null){
                    return RedirectToAction(nameof(Register));
                }
                foreach(Customer customer in _dataContext.Customers){
                    if(customer.CompanyName == newCustomer.CompanyName){
                        return RedirectToAction(nameof(Register));
                    }
                }
                _dataContext.Customers.Add(newCustomer);
                await _dataContext.SaveChangesAsync();
                return RedirectToAction(nameof(Register));
            }catch{
                return RedirectToAction(nameof(Register));
            }
        }
    }
}