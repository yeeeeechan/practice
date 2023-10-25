create database user
default character set utf8mb4 default collate utf8mb4_unicode_ci;

use user;

create table departments (
id int primary key,
name varchar(50),
location varchar(50)
);
desc departments;

create table employees (
id int primary key,
name varchar(50),
age int,
department_id int,
foreign key (department_id) references departments(id)
);
desc employees;

insert into departments (id, name, location)
values (1, 'Sales', 'New York'),
  (2, 'Marketing', 'San Francisco'),
  (3, 'Engineering', 'Seattle');
  
  insert into employees (id, name, age, department_id)
  values (1, 'John Doe', 25, 1),
  (2, 'Jane Smith', 30, 1),
  (3, 'Bob Johnson', 40, 2),
  (4, 'Alice Lee', 35, 3),
  (5, 'Tom Wilson', 28, 3);
  
show tables;

-- 문제 1.
select * from employees;

-- 문제 2.
select * from employees order by age DESC;

-- 문제 3.
select name, age from employees where age >= '30';

-- 문제 4.
select * from departments;
select * from employees where department_id = '2';

-- 문제 5.
select * from employees where department_id = '3' and age < '30';

-- 문제 6.
select count(*) as 'total_employees' from employees;

-- 문제 7.
select department_id, count(*) as 'total_department_employees' from employees group by department_id;

-- 문제 8.
select avg(age) as 'average_age' from employees;

-- 문제 9.
select department_id, avg(age) as 'department_average_age' from employees group by department_id;

-- 문제 10.
select * from departments where location like '_e%';

-- 문제 11.
select * from departments where location like '% %';

-- 문제 12.
select * from employees where name like '%n';