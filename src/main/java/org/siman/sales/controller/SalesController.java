package org.siman.sales.controller;

import java.util.List;

import org.siman.sales.model.Clients;
import org.siman.sales.model.Products;
import org.siman.sales.service.SalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/sales")
public class SalesController {

    @Autowired
    private SalesService salesService;

    @GetMapping("/findtopclient")
    public List<Clients> findTopClient() {
        return salesService.findTopClient();
    }
    
    @GetMapping("/findtopproducts")
    public List<Products> findTopProducts() {
        return salesService.findTopProducts();
    }

    @GetMapping("/lastmonthtotal")
    public Double lastMonthTotal() {
        return salesService.lastMonthTotal();
    }

}
