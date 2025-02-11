package org.siman.sales.service;

import java.util.List;

import org.siman.sales.model.Clients;
import org.siman.sales.model.Products;
import org.siman.sales.repository.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SalesService {

    @Autowired
    private SalesRepository salesRepository;

    public List<Clients> findTopClient() {
        return salesRepository.findTopClient();
    }

    public List<Products> findTopProducts() {
        return salesRepository.findTopProducts();
    }

    public Double lastMonthTotal() {
        return salesRepository.lastMonthTotal();
    }

}
