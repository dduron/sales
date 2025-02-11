package org.siman.sales.controller;

import java.util.List;

import org.siman.sales.model.Clients;
import org.siman.sales.service.ClientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/clients")
public class ClientsController {

    @Autowired
    private ClientsService clientsService;

    @GetMapping
    public List<Clients> findAll() {
        return clientsService.findAll();
    }

}
