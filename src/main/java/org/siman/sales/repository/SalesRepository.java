package org.siman.sales.repository;

import java.util.List;

import org.siman.sales.model.Clients;
import org.siman.sales.model.Products;
import org.siman.sales.model.Sales;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SalesRepository extends JpaRepository<Sales, Long> {

    @Query(value="SELECT cl.id, cl.name, cl.email \r\n" + //
                "FROM clients cl\r\n" + //
                "JOIN sales sa on cl.id = sa.clientid\r\n" + //
                "group by cl.id, cl.name, cl.email\r\n" + //
                "ORDER BY SUM(sa.total) DESC\r\n" + //
                "LIMIT 1", nativeQuery = true)
    public List<Clients> findTopClient();

    @Query(value="SELECT pr.id, pr.name, pr.price, pr.stock \r\n" + //
                "FROM products pr\r\n" + //
                "JOIN sales sa ON pr.id = sa.productid\r\n" + //
                "GROUP BY pr.id, pr.name, pr.price, pr.stock\r\n" + //
                "ORDER BY SUM(sa.total) DESC\r\n" + //
                "LIMIT 3", nativeQuery = true)
    public List<Products> findTopProducts();

    @Query(value="SELECT COALESCE(SUM(total),0) lastMonthTotal \r\n" + //
                "FROM sales\r\n" + //
                "WHERE date BETWEEN CURRENT_DATE - interval '1 month' AND CURRENT_DATE", nativeQuery = true)
    public double lastMonthTotal();
}
