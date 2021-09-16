import {Handler} from 'express';
import {Customer} from "./../entity/customer";
import {connection} from './../db'
import { getRepository } from 'typeorm';



export const getAll:Handler = async (req,res)=> {
    const Repository = getRepository(Customer);
    const customers = await Repository.find()
    res.json(customers);
}

export const getCustomer:Handler = async (req,res)=> {
    const {id} = req.params;
    const Repository = getRepository(Customer);
    const customer = await Repository.findOne(id)
    res.json(customer);
}

export const addCustomer:Handler = async(req,res)=>{
    const params = req.body;
    const customer = new Customer();
    customer.firstName = params.firstName;
    customer.lastName = params.lastName;
    customer.email = params.email;
    customer.age = params.age
    await customer.save()
    res.json(customer)
}

export const deleteCurstomer:Handler =async(req,res)=>{
    const {id} = req.params;
    await Customer.delete(id)
    res.send("delete success")
}

export const updateCustomer:Handler = async(req,res)=>{
    const params = req.body;
    const {id} = req.params;
    const customer = new Customer();
    customer.firstName = params.firstName;
    customer.lastName = params.lastName;
    customer.email = params.email;
    customer.age = params.age;
    const Repository = getRepository(Customer);
    await Repository.update(id,customer);
    res.json(customer)
}

