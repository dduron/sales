package org.siman.sales.controller;

import java.util.List;
import java.util.Optional;

import org.siman.sales.model.Products;
import org.siman.sales.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("/products")
public class ProductsController {

    @Autowired
    private ProductsService productsService;

    @GetMapping
    public List<Products> findAll() {
        return productsService.findAll();
    }
    
    @GetMapping("/{id}")
    public Optional<Products> findById(@PathVariable Long id) {
        return productsService.findById(id);
    }    

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Products create(@RequestBody Products products) {
        return productsService.save(products);
    }

    @PutMapping
    public Products update(@RequestBody Products products) {
        return productsService.save(products);
    }
    
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        productsService.deleteById(id);
    }

}
