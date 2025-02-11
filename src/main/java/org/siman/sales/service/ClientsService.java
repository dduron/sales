package org.siman.sales.service;

import java.util.List;

import org.siman.sales.model.Clients;
import org.siman.sales.repository.ClientsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientsService {

    @Autowired
    private ClientsRepository clientsRepository;

    public List<Clients> findAll() {
        return clientsRepository.findAll();
    }

}
