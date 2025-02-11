package org.siman.sales.service;

import java.util.List;
import java.util.Optional;

import org.siman.sales.model.Products;
import org.siman.sales.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    public List<Products> findAll() {
        return productsRepository.findAll();
    }

    public Optional<Products> findById(Long id) {
        return productsRepository.findById(id);
    }

    public Products save(Products products) {
        return productsRepository.save(products);
    }

    public void deleteById(Long id) {
        productsRepository.deleteById(id);
    }
    
}
