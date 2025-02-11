SELECT pr.id, pr.name, pr.price, pr.stock FROM products pr
JOIN sales sa ON pr.id = sa.productid
GROUP BY pr.id, pr.name, pr.price, pr.stock
ORDER BY SUM(sa.total) DESC
LIMIT 3

SELECT cl.id, cl.name, cl.email FROM clients cl
JOIN sales sa on cl.id = sa.clientid
group by cl.id, cl.name, cl.email
ORDER BY SUM(sa.total) DESC
LIMIT 1

SELECT SUM(total) FROM sales
WHERE date BETWEEN CURRENT_DATE - interval '1 month' AND CURRENT_DATE